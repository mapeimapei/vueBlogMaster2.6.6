<template>
	<div class="articleBox fx-f1">
			<el-button type="primary" @click="startSpider">启动网络爬虫</el-button>
      <p class="t18 mt20">{{done}}</p>
  </div>
</template>
<script>
export default {
  name:"spider",
  data () {
    return {
        done:""
    }
  },

  methods:{
    startSpider(){
      let apiUrl = "spider/startSpider"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.post(apiUrl).then((data) => {
        loadingMask.close()
        if(!!data && data.resultCode ==="20000"){
           this.done = data.message
        }
      }).catch((err) => {
        loadingMask.close();
      });
    },
  },

  mounted(){
  }

}
</script>
