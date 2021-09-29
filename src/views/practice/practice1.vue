<template>
	<div class="articleBox fx-f1">
		
		<el-button @click="postTestFn2">postTestFn2</el-button>
    <el-button @click="postTestFn">postTestFn</el-button>


		<el-button @click="getTestFn2">getTestFn2</el-button>
		<el-button @click="getTestFn2_">getTestFn2_</el-button>
		<el-button @click="getTestFn">getTestFn</el-button>



	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"practice1",
  data () {
    return {
    }
  },

  computed:{
    ...mapState(
          ['user']
     )
  },

  filters:{

  },

  methods:{
		postTestFn2(){
			let api = this.$api.practiceDemo1PostTest
      api.data = {
        "userid":this.user.user_id,
        "productList":[1,2,3]
      }
      this.$http(api).then((data)=>{
			  console.log(data)
			})
		},


    postTestFn(){
      let obj = {
        "userid":this.user.user_id,
        "productList":[1,2,3]
      }
      let apiUrl = "practice/demo1/postTest"
      this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      });
    },


		getTestFn2(){
			let api = this.$api.practiceDemo1GetTest
      api.data = {
        "user_id":"123",
        "name":"xiaoma",
        "sex":"man"
      }
      this.$http(api).then((data)=>{
			  console.log(data)
			})
		},


		getTestFn2_(){
			let api = this.$api.practiceDemo1GetTest2
      api.data = {
        "id":"123",
        "name":"xiaoma",
        "sex":"man"
      }
      this.$http(api).then((data)=>{
			  console.log(data)
			})
		},


    getTestFn(){
      let apiUrl = "practice/demo1/getTest?user_id=123&name=xiaoma&sex=man"
      this.$axios.get(apiUrl).then((data) => {
        console.log(data)
      }).catch((err) => {
        console.log(err)
      });
    },






  },

  mounted(){

  },
  created(){

  },
}
</script>
