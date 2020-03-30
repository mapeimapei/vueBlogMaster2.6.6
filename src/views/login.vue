<template>
	<div class="loginBox">
		<div class="pt60">
			<div class="tx">欢迎登录</div>
			<el-form :model="loginData" status-icon :rules="rules" ref="loginForm" label-width="70px" label-position="top" class="loginData">
			  <el-form-item label="账号" prop="account">
				<el-input type="text" v-model="loginData.account"></el-input>
			  </el-form-item>
			  <el-form-item label="输入密码" prop="passwd">
				<el-input type="password" @keyup.enter.native="submitForm" v-model="loginData.passwd"></el-input>
			  </el-form-item>
			  <el-form-item>
				<el-button @click="resetForm">重 置</el-button>
				<el-button type="primary" @click="submitForm">登 录</el-button>
			  </el-form-item>
			</el-form>
		</div>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions ,mapMutations } from 'vuex'
export default {
  name: 'login',
  components: {},
  data(){
      return {
        loginData: {
          account: '',
          passwd: '',
        },
        rules: {
          account: [
            { required: true, message: '请输入正确的账号或名称', trigger: 'blur' }
          ],
          passwd: [
            {required: true, message: '密码不能为空', trigger: 'blur' },
          ]
        }
   }
  },
  computed:{
    ...mapState(
          ['user','token']
     ),
  },
  watch:{},
  methods:{
    //mutation 的辅助方法
    ...mapMutations(['setUser','setToken']),

    loginFn(){
      let obj = {...this.loginData}
      let apiUrl = "/login"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
          this.setUser(data.result)
          this.setToken(data.result.token)
          localStorage.setItem("user",JSON.stringify(data.result))
          localStorage.setItem("token",data.result.token)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/blog/post');
          this.$router.push({
            path: redirect
          })
          this.$notify({
            message: '登录成功。',
            type: 'success'
          })
        }else{
          this.$notify({
            message: '账号或密码错误。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '登录接口报错。',
          type: 'warning'
        });
      });
    },

	  submitForm() {
	      this.$refs["loginForm"].validate((valid) => {
	        if (valid) {
	          //alert('submit!');
            this.loginFn()
	        } else {
	          console.log('error submit!!');
	          return false;
	        }
	      });
	    },
	    resetForm() {
	      this.$refs["loginForm"].resetFields();
	    }
  },

  mounted(){

  },

  created(){

  },

  beforDestroy(){

  }
}
</script>
