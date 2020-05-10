<template>
	<div class="articleBox fx-f1">
		<el-table
      class="articleList"
      :data="productList2"
      border>
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
      prop="listprice"
      label="单价(￥)">
    </el-table-column>

    <el-table-column
      prop="descn"
      label="描述">
    </el-table-column>

    <el-table-column
      label="数量">
      <template slot-scope="scope">
        <el-input-number :min="1" v-model="scope.row.quantity"  size="small" label="描述文字"></el-input-number>
      </template>
    </el-table-column>
		<el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button type="text" @click="makeOrderFn(scope.row)">直接购买</el-button>
        <el-button type="text" @click="addShoppingCart(scope.row)">加入购物车</el-button>
      </template>
    </el-table-column>


  </el-table>


  <el-pagination
  	:current-page.sync="currentPage"
  	:page-size="pageSize"
  	layout="total, prev, pager, next"
  	:total="productList.length">
  </el-pagination>


	</div>
</template>
<script>


import { mapState } from 'vuex'
export default {
  name:"products",
  data () {
    return {
      productList:[],
      currentPage:1,
      pageSize:5,
      // productList2:[],
    }
  },

  computed:{
    ...mapState(
          ['user']
     ),

     //分页
    productList2(){
      let start = (this.currentPage-1)*this.pageSize
      let end =this.currentPage*this.pageSize
      return this.productList.slice(start,end)
    },


  },

  methods:{

    makeOrderFn(row){
      let obj = {
        "userid":this.user.id,
        "productList":[row]
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



    //加入购物车
    addShoppingCart(row){
      let obj = {
        "productid":row.productid,
        "quantity":row.quantity,
        "userid":this.user.id
      }
      console.log(obj)
      let apiUrl = "shop/cart/addCart"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.post(apiUrl, JSON.stringify(obj)).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
          this.$notify({
            message: '添加成功。',
            type: 'success'
          })
        }else{
          this.$notify({
            message: '添加失败。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '添加接口报错。',
          type: 'warning'
        });
      });


    },

    //获取商品列表信息
    getProducts(){
      let apiUrl = "shop/products"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.get(apiUrl).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
            data.result.forEach((item,index)=>{
              //item.image = item.image.replace(/\./, "_")
              item.quantity = 1
            })
            this.productList = data.result
        }else{
          this.$notify({
            message: '获取商品列表失败。',
            type: 'warning'
          });
        }
      }).catch((err) => {
        loadingMask.close();
        this.$notify({
          message: '获取商品表接口报错。',
          type: 'warning'
        });
      });
    },

  },

  mounted(){

  },

  created(){
    this.getProducts()
  },

}
</script>

<style scoped>

</style>
