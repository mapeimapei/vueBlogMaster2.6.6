<template>
	<div class="articleBox fx-f1">

    <div class="mb20 clx">
      <el-button type="primary" @click="makeOrderFn" :disabled="!multipleSelection.length">提交订单</el-button>
      <el-button type="primary" @click="deleteFn(productids)" :disabled="!multipleSelection.length">删除选中的商品</el-button>
      <el-button class="right" @click="deleteFn('clear')"  :disabled="!cartList.length" type="primary">清空购物车</el-button>
    </div>

		<el-table
      class="articleList"
      :data="cartList2"
      :key = "rowKeys"
      :row-key="getRowKeys"
      @selection-change="handleSelectionChange"
      border>
    <el-table-column
      type="selection"
      :reserve-selection="true"
      width="55">
    </el-table-column>
		<el-table-column
      label="图片"
      width="72">
      <template slot-scope="scope">
        <div class="productIcon"><img :src="$ut.srcUrl + scope.row.image" sizes="48" /></div>
      </template>
    </el-table-column>

    <el-table-column
      prop="cname"
      label="名称">
    </el-table-column>

    <el-table-column
      prop="category"
      label="分类">
    </el-table-column>

    <el-table-column
      prop="descn"
      label="描述">
    </el-table-column>

    <el-table-column
      prop="listprice"
      label="单价(￥)">
    </el-table-column>

    <el-table-column
      label="数量">
      <template slot-scope="scope">
        <el-input-number :min="1" v-model="scope.row.quantity"  size="small" label="描述文字"></el-input-number>
      </template>
    </el-table-column>

    <el-table-column
      label="总价(￥)">
      <template slot-scope="scope">
        {{scope.row.listprice * scope.row.quantity}}
      </template>
    </el-table-column>

		<el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="deleteFn([scope.row.productid])">删除</el-button>
      </template>
    </el-table-column>

  </el-table>

    <!-- 分页 -->
    <el-pagination
    	@size-change="handleSizeChange"
    	@current-change="handleCurrentChange"
    	:current-page.sync="currentPage"
    	:page-size="pageSize"
    	layout="total, prev, pager, next"
    	:total="cartList.length">
    </el-pagination>

	</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"cart",
  data () {
    return {
      cartList:[],
      multipleSelection:[],
      productids:[],
      currentPage:1,
      pageSize:5,
      cartList2:[],
      rowKeys:this.$ut.uuid()
    }
  },

  computed:{
    ...mapState(
          ['user']
     ),


  },


  methods:{

    getRowKeys(row) {
      return row.productid
    },

    sliceFn(){
       let start = (this.currentPage-1)*this.pageSize
       let end =this.currentPage*this.pageSize
       this.cartList2 =  this.cartList.slice(start,end)
    },

    //分页
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.sliceFn()

    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
       this.sliceFn()
    },

    handleSelectionChange(val) {
      this.multipleSelection = val
      console.log(val)
      this.productids=[]
      this.multipleSelection.forEach((item)=>{
         this.productids.push(item.productid)
      })
    },

    makeOrderFn(){
      let obj = {
        "userid":this.user.id,
        "productList":[...this.multipleSelection]
      }

      let apiUrl = "shop/order/addOrder"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
          this.$notify({
            message: '订单生成成功。',
            type: 'success'
          })
          this.$router.push({path: 'ordersDetails', query:{orderid: data.result.orderid}})
        }else{
          this.$notify({
            message: '订单生成失败。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '订单生成接口报错。',
          type: 'warning'
        });
      });
    },




    //删除
    deleteFn(productids){

        this.$confirm('此操作将永久删除该记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

            let obj = {
              "productids":[...productids],
              "userid":this.user.id
            }
            //清空
            if(productids === "clear"){
              obj.productids = []
              this.cartList.forEach((item)=>{
               obj.productids.push(item.productid)
              })
            }
            let apiUrl = "shop/cart/deleteCart"
            let loadingMask = this.$loading({
              lock: true,
              background: 'rgba(0, 0, 0, 0.5)'
            });
            this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
              loadingMask.close();
              if(!!data && data.resultCode ==="20000"){
                this.getCartList()
                this.multipleSelection = []
                this.productids=[]
                this.rowKeys = this.$ut.uuid()
                this.$notify({
                  message: '删除成功。',
                  type: 'success'
                })
              }else{
                this.$notify({
                  message: '删除失败。',
                  type: 'warning'
                });
              }
            }).catch((err) => {
              loadingMask.close();
              this.$notify({
                message: '删除接口报错。',
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



    getCartList(){
      let apiUrl = "shop/cart/getCartList/" + this.user.id
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.get(apiUrl).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
            // data.result.forEach((item,index)=>{
            //   item.image = item.image.replace(/\./, "_")
            // })
            this.cartList= data.result
            if(this.cartList.length < 5){
              this.currentPage = 1
            }
            
            this.$nextTick(()=>{
              this.sliceFn()
            })
            
        }else{
          this.$notify({
            message: '获取购物车列表失败。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '获取购物车列表接口报错。',
          type: 'warning'
        });
      });
    },




  },

  mounted(){},
  created(){
    this.getCartList()

  }

}
</script>
