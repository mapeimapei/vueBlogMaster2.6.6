<template>
		<el-form  :model="addArticle" :rules="rules" ref="addArticle" label-width="100px" class="addArticleBox fx-f1" label-position="top">
			<el-form-item label="文章名称" prop="name">
				<el-input v-model="addArticle.name"></el-input>
			</el-form-item>
				<el-form-item label=" 文章摘要" prop="summary">
				<el-input v-model="addArticle.summary"></el-input>
			</el-form-item>
			<el-form-item label="正文内容" prop="content">
				<el-input type="textarea" v-model="addArticle.content"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button @click="resetForm()">重置</el-button>
				<el-button type="primary" @click="submitForm">提 交</el-button>
			</el-form-item>
		</el-form>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"addSingle",
  data () {
    return {
        postId:this.$route.query.id || "",
        addArticle: {
          "user_name":"",
          "user_id":"",
          "name":"",
          "post_id":"",
          "summary":"",
          "content":"",
        },
				rules:{
					name:[
							{ required: true, message: '请输入活动名称，此不能为空', trigger: 'blur' },
          ],
					content:[
						{ required: true, message: '正文内容不能为空', trigger: 'blur' },
					],

				}
    }
  },

  computed:{
    ...mapState(
          ['user']
     )
  },

  methods:{
		
		//获取内容
		getSingle(){
			if(!this.postId) return   // this.postId值为空，就跳出getSingle()，直接执行新增addSingle()。不为空，就是编辑，会执行下面的代码
			
			let apiUrl = "cms/post/getSingleById/" + this.postId
			let loadingMask = this.$loading({
			  lock: true,
			  background: 'rgba(0, 0, 0, 0.5)'
			});

			this.$axios.get(apiUrl).then((data) => {
			  loadingMask.close();
			  if(!!data && data.resultCode ==="20000"){
						this.addArticle.name =  data.result.name
						this.addArticle.summary =  data.result.summary
						this.addArticle.content =  data.result.content
			  }else{
			    this.$notify({
			      message: '获取文章列表失败。',
			      type: 'warning'
			    });
			  }
			}).catch((err) => {
			  loadingMask.close();
			  this.$notify({
			    message: '获取文章列表接口报错。',
			    type: 'warning'
			  });
			});

		},
		
		
		//新增
		addSingle(){
		  this.addArticle.user_name = this.user.name
		  this.addArticle.user_id = this.user.id
		  this.addArticle.post_id = this.postId	
		  let obj = {...this.addArticle}
		  let apiUrl = "cms/post/addSingle"
		 // var formData = new FormData();
		  //formData.append('requestJson', JSON.stringify(obj));
		  let loadingMask = this.$loading({
		    lock: true,
		    background: 'rgba(0, 0, 0, 0.5)'
		  });
		  this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
		    loadingMask.close();
		    if(!!data && data.resultCode ==="20000"){
		      this.$notify({
		        message: '成功。',
		        type: 'success'
		      })
		      this.$router.push('/index')
		    }else{
		      this.$notify({
		        message: '失败。',
		        type: 'warning'
		      });
		    }
		  }).catch((err) => {
		    loadingMask.close();
		    this.$notify({
		      message: '接口异常',
		      type: 'warning'
		    });
		  });
		},
		
		submitForm() {
        this.$refs["addArticle"].validate((valid) => {
          if (valid) {
            this.addSingle()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
			
      resetForm() {
        this.$refs['addArticle'].resetFields();
      }
  },

  mounted(){


  },
	
	created(){
		this.getSingle()  //获取内容
	}

}
</script>
