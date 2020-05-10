<template>
	<div class="state-lcol fx-f1">
    <div class="state-txt fx">
      <div class="fx-f1">
          <div class="state-top">订单号：{{orderid}}</div>
          <h3 class="state-txt ftx-02">{{status|statusFliter}}</h3>
      </div>

      <div class="dl fx-f1">
          <div class="dt">
            <h4>收货人信息</h4>
          </div>
          <div class="dd">
              <div class="item">
                  <span class="label">收货人：</span>
                  <div class="info-rcol">{{this.user.name}}</div>
              </div>
              <div class="item">
                <span class="label">地址：</span>
                  <div class="info-rcol">{{this.user.address}}</div>
              </div>
              <div class="item">
                <span class="label">手机号码：</span>
                  <div class="info-rcol">{{this.user.tel}}</div>
              </div>
          </div>
      </div>

    </div>

    <div class="orderList">
      <template>
        <el-table
          :data="orderList"
          border
          style="width: 100%">
          <el-table-column
            prop="cname"
            label="商品名称">
          </el-table-column>
          <el-table-column
            prop="productid"
            label="商品编号"
            width="180">
          </el-table-column>

          <el-table-column
            prop="listprice"
            label="价格"
            width="180">
          </el-table-column>
          <el-table-column
            prop="quantity"
            label="数量"
            width="180">
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
              <el-button @click="deleteRow(scope.row)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>

    </div>

    <!-- 支付总额 -->
    <div class="goods-total clx">
        <ul>
            <li>
                <span class="label">付款方式：</span>
                <span class="txt">在线支付</span>
            </li>
            <li class="hide">
                <span class="label">付款时间：</span>
                <span class="txt"></span>
            </li>
            <li>
                <span class="label">商品总额：</span>
                <span class="txt">¥{{amount}}</span>
            </li>
            <li class="ftx-01">
                <span class="label">应付总额：</span>
                <span class="txt count">¥{{amount}}</span>
            </li>

            <li class="btn">
                <el-row>
                    <el-button type="danger">确认支付</el-button>
                </el-row>
            </li>
        </ul>
    </div><!--goods-total end-->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"ordersDetails",
  data () {
    return {
      orderid:this.$route.query.orderid,
      orderList:[],
      status:null,
      amount:0
	  }
  },

  computed:{
    ...mapState(
          ['user']
     ),
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

    deleteRow(obj){
      let _obj = {
        "userid":this.user.id,
        "orderid":obj.orderid,
        "productid":obj.productid,
      }

      let apiUrl = "shop/order/deleteProductInOrderDetails"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });
      this.$axios.post(apiUrl, JSON.stringify(_obj)).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){
          this.getOrdersDetailsById()
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


    },

    getOrdersDetailsById(){
      let apiUrl = "shop/order/getOrdersDetailsById"
      let loadingMask = this.$loading({
        lock: true,
        background: 'rgba(0, 0, 0, 0.5)'
      });

      let obj = {
        "orderid":this.orderid,
        "userid":this.user.id
      }

      this.$axios.post(apiUrl,obj).then((data) => {
        loadingMask.close();
        if(!!data && data.resultCode ==="20000"){

            this.orderList= data.result.orderlist
            this.amount= data.result.amount
            this.status= this.orderList.length ? this.orderList[0].status : null
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

    init(){
      this.getOrdersDetailsById()
    }

  },

  mounted(){},

  created(){
    this.init()
  }

}
</script>
