<template>
	<header class="fx fx-aic fx-srk header">
		<div class="logo">后台管理</div>
		<nav class="fx-f1">
			<ul class="fx fx-aic">
        <li><a href="/">网站首页</a></li>
				<li><router-link to="/blog">博客</router-link></li>
				<li><router-link to="/petStore">宠物商店</router-link></li>
			</ul>
		</nav>
		<div class="personalCenter" v-if="user">
      <a href="javascript:">{{user.name}}</a>
      <a class="t12" href="javascript:" @click="logout">登出</a>
		</div>
	</header>
</template>
<script>
import { mapState,mapGetters,mapActions ,mapMutations } from 'vuex'
export default {
  name: 'cHeader',
  props:[],
  data(){
    return{}
  },
  computed:{
    ...mapState(
          ['user','token']
     ),
  },
  watch:{},
  methods:{
    ...mapMutations(['setUser','setToken']),
    //登出
    logout(){
      this.$confirm('确定登出, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.setUser(null)
        this.setToken(null)
        localStorage.removeItem("user")
        localStorage.removeItem("token")
        window.location.href="/"
        //this.$router.push("/login")
      }).catch(() => {
      });
    },

    changeMenuFn(type){
      this.$emit("changemenu",type)
    },
  },
  mounted(){}
}
</script>

<style scoped>

</style>
