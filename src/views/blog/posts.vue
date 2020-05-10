<template>
	<div class="articleBox fx-f1">
		<el-table
      class="articleList"
      :data="articleList2"
      border>
    <el-table-column
      prop="name"
      label="标题">
    </el-table-column>

    <el-table-column
      prop="user_name"
      label="作者"
      width="180">
    </el-table-column>

    <el-table-column
      prop="created_at"
      label="创建时间"
			width="200">
      <template slot-scope="scope">
        <span class="elli">{{scope.row.created_at }}</span>
      </template>
    </el-table-column>

		<el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button type="text" @click="deleFn(scope.row.id)">删除</el-button>
        <el-button type="text" @click="editFn(scope.row.id)">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>

	<el-pagination
		:current-page.sync="currentPage"
		:page-size="pageSize"
		layout="total, prev, pager, next"
		:total="articleList.length">
	</el-pagination>

</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"addSingle",
  data () {
    return {
      articleList: [],
			currentPage:1,
      pageSize:5,
      //articleList2:[],
    }
  },

  computed:{
    ...mapState(
          ['user']
     ),

    //分页
    articleList2(){
      let start = (this.currentPage-1)*this.pageSize
      let end =this.currentPage*this.pageSize
      return this.articleList.slice(start,end)
    },
  },

  filters:{

  },

  methods:{

		//删除
		deleFn(id){
			this.$confirm('确定是否删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

					this.deletData(id)
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},

		deletData(id){
			let apiUrl = "cms/post/deleteSingle"
			let loadingMask = this.$loading({
			  lock: true,
			  background: 'rgba(0, 0, 0, 0.5)'
			});

			let obj = {
				"id":id,
				"user_id":this.user.id
			}
			this.$axios.post(apiUrl,JSON.stringify(obj)).then((data) => {
			  loadingMask.close();
			  if(!!data && data.resultCode ==="20000"){
			      this.getPosts()
			  }else{
			    this.$notify({
			      message: '删除失败',
			      type: 'warning'
			    });
			  }
			}).catch((err) => {
			  loadingMask.close();
			  this.$notify({
			    message: '删除接口报错',
			    type: 'warning'
			  });
			});
		},

		//编辑
    editFn(id){
      this.$router.push({path: 'addSingle', query:{id: id}})
    },

		//初始化
    getPosts(){
      let apiUrl = "cms/post/getPosts"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.get(apiUrl).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
            this.articleList= data.result
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
  },

  mounted(){

  },
  created(){
    this.getPosts()
  },
}
</script>
