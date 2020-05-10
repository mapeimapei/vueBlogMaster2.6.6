<template>
	<div class="articleBox fx-f1">

		<el-table
      class="articleList"
      :data="orderList2"
      border>
      <el-table-column
        prop="orderid"
        width="360"
        label="订单ID">
      </el-table-column>

      <el-table-column
        prop="amount"
        label="总价(￥)">
      </el-table-column>

      <el-table-column
        prop="orderdate"
        label="订单日期">
      </el-table-column>

      <el-table-column
        prop="status"
        label="状态">
       <template slot-scope="scope">
          {{scope.row.status | statusFliter}}
        </template>
      </el-table-column>

      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="goOrdersDetails(scope.row.orderid)">查看</el-button>
          <el-button type="text" @click="deleteOrder(scope.row.orderid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <el-pagination
    	:current-page.sync="currentPage"
    	:page-size="pageSize"
    	layout="total, prev, pager, next"
    	:total="orderList.length">
    </el-pagination>

	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"orders",
  data () {
    return {
       orderList:[],
       currentPage:1,
       pageSize:5,
    }
  },
  computed:{
    ...mapState(
          ['user']
     ),

     //分页
     orderList2(){
       let start = (this.currentPage-1)*this.pageSize
       let end =this.currentPage*this.pageSize
       return this.orderList.slice(start,end)
     },

  },

  filters:{
    statusFliter(val){
      if(val == 0){
        return "未支付"
      }else if(val == 1){
        return "已完成"
      }else if(val == 2){
        return "已取消"
      }
    }
  },

  methods:{

    deleteOrder(id){
      
        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
      
          let obj = {
            "userid":this.user.id,
            "orderid":id
          }
          let apiUrl = "shop/order/deleteOrder"
          let loadingMask = this.$loading({
            lock: true,
            background: 'rgba(0, 0, 0, 0.5)'
          });
          this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
            loadingMask.close();
            if(!!data && data.resultCode ==="20000"){
              this.getOrderList()
              this.$notify({
                message: '订单删除成功。',
                type: 'success'
              })
            }else{
              this.$notify({
                message: '订单删除失败。',
                type: 'warning'
              });
            }
          }).catch((err) => {
            loadingMask.close();
            this.$notify({
              message: '订单删除接口报错。',
              type: 'warning'
            });
          });
          
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      
          
    },


    goOrdersDetails(id){
      this.$router.push({path: 'ordersDetails', query:{orderid: id}})
    },

    getOrderList(){
      let apiUrl = "shop/order/getOrderList/" + this.user.id
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.get(apiUrl).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
            this.orderList= data.result
        }else{
          this.$notify({
            message: '获取订单列表失败。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '订单列表接口报错。',
          type: 'warning'
        });
      });
    },

  },

  mounted(){
  },
  created(){
    this.getOrderList()

  }


}
</script>
