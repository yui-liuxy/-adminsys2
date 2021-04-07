<template>
<div>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">筛选搜索</span>
      <el-button style="float: right; padding: 10px  ;background-color: dodgerblue;color: #FFFFFF" type="text" @click="handleSearch">查询</el-button>
      <el-button style="float: right; padding: 10px  ;" type="text"  @click="resetForm('listQuery')" >重置</el-button>
    </div>
    <el-form ref="form" :model="listQuery" label-width="80px">
      <el-form-item label="输入搜索" style="display: inline-block">
        <el-input v-model="listQuery.name" placeholder="商品名称" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="商品货号" style="display: inline-block">
        <el-input v-model="listQuery.product_sn" placeholder="商品货号"></el-input>
      </el-form-item>
      <el-form-item label="商品分类" style="display: inline-block">
        <el-cascader
            v-model="selectProductCateValue"
            :options="productjilianList"
            ></el-cascader>
      </el-form-item>
      <el-form-item label="商品品牌" style="display: inline-block">
        <el-select v-model="listQuery.brand_id" placeholder="请选择品牌" style="float: left">
          <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id" >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="上架状态" style="display: inline-block">
        <el-select v-model="listQuery.publish_status" placeholder="全部" style="float: left">
          <el-option    v-for="item in publishStatusOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"></el-option>

        </el-select>
      </el-form-item>
      <el-form-item label="审核状态" style="display: inline-block">
        <el-select v-model="listQuery.verify_status" placeholder="全部" style="float: left">
          <el-option label="审核" value=1></el-option>
          <el-option label="没有审核" value=0></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </el-card>

  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">数据列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
    </div>
    <div class="text item">
      <el-table :data="productList" border style="width: 100%" >
        <el-table-column prop="id" label="编号" width="180" class="h"></el-table-column>
        <el-table-column label="商品图片" width="180"  class="h">
          <template slot-scope="scope">
            <img :src="scope.row.pic" width="50px" height="50px">
          </template>
        </el-table-column >
        <el-table-column prop="name" label="商品名称"  class="h"></el-table-column>
        <el-table-column label="价格/货号" prop="product_sn"  class="h">
          <template slot-scope="scope" >
           <div> 价格：  ￥<p v-html= "scope.row.original_price" style="display: inline-block"></p></div>
          <div>货号：  <p v-html= "scope.row.product_sn"   style="display: inline-block"></p></div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="标签"  class="h">
          <template slot-scope="scope">
            <div>上架：  <p  style="display: inline-block">{{scope.row.publish_status?'是':"否"}}</p></div>
            <div>新品：  <p    style="display: inline-block">{{scope.row.recommand_status?'是':"否"}}</p></div>
            <div>推荐：  <p    style="display: inline-block">{{scope.row.new_status?'是':"否"}}</p></div>
          </template>
        </el-table-column>
        <el-table-column prop="sort" label="排序"  class="h"></el-table-column>
        <el-table-column prop="sale" label="销量"  class="h"></el-table-column>
        <el-table-column label="审核状态">
          <template slot-scope="scope">
             <p v-if="scope.row.verify_status">审核</p>
             <p v-else>未审核</p>
          </template>
        </el-table-column>
        <el-table-column prop="" label="操作"  class="h">
          <button style="margin-right: 10px">编辑</button>
          <button>删除</button>
        </el-table-column>
      </el-table>
    </div>
  </el-card>
<!--
 @size-change="handleSizeChange" 数量变化触发函数
 :current-page="currentPage4" 当前页
-->
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="listQuery.pageNum"
      :page-sizes="[5, 10, 15, 20]"
      :page-size="listQuery.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
  </el-pagination>
</div>
</template>

<script>
// import  request from "../../../utils/request.js"
import {fetchProductList,fetchbrand,fetchGoodsCategory} from "../../../api/product";

export default {
  name: "product",
  data(){
    return{
      productList:[],
      brandList:[],
      listQuery:{
        pageSize:5, //每页多少条
        pageNum:1,  //当前页码
        name:null,
        product_sn:null,
        product_category_id:null,
        publish_status:null,//上架状态
        verify_status:null,//审核状态
        brand_id:null //品牌的id
      },
      total:0,
      productjilianList:[],
      selectProductCateValue: "",
      publishStatusOptions: [
        //上架状态的options
        { value: 1, label: "上架" },
        { value: 0, label: "下架" },
      ],
    }
  },
  watch:{
    selectProductCateValue(newV){
      console.log(newV)
      if(newV!==null&&newV.length==2){
        this.listQuery.product_category_id=newV[1];
      }
    },
  },
  mounted() {
    this.getProductDate()
    // request({url:"product_list",method:'get'}).then(res=>{
    //   console.log(res)
    // })
    // request({
    //   url:'login',
    //   method:"post",
    //   data:{
    //     username:"admin",
    //     password:"admin",
    //   }
    // }).then((res)=>{
    //   console.log(res)
    // })
     this. getrand()
    this.getGoodsCategory()
  },
  methods:{
    async getProductDate(){
      let data=await fetchProductList(this.listQuery)//需要传递参数
      this.productList=data.product
      this.total= data.total

    },
    async getrand(){
      let data=await fetchbrand()
      this.brandList=data.data
    },
    async getGoodsCategory(){
      let res=await fetchGoodsCategory();
      let data=res.data
      //整理数据
      data.forEach(item=>{
        let children=[];
        if ( item.children!=null && item.children.length>0){
          item.children.forEach(j=>{
            children.push({label:j.name,value:j.id})
          })
        }
         this.productjilianList.push({
           label:item.name,
           value:item.id,
           children:children,
         })
      })
      console.log(this.productjilianList)
    },

    handleSizeChange(count){
      this.listQuery.pageSize=count;
      this.listQuery.pageNum=1;
      this.getProductDate();
    },
    //改变当前页
    handleCurrentChange(num){
      this.listQuery.pageNum=num
      this.getProductDate()
    },
    handleSearch() {
      this.getProductDate();

    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  filters:{
    // price:(val)=>{
    //   return
    // }
  }
}
</script>



<style scoped>
.h{
  height: 100px !important;
}
.el-form{
  display: flex;
}
.el-form-item{
  padding-left: 50px;
}
.el-button{
  border: 1px solid #eee;
  background: #FFFFFF;
  border-radius: 1px;
  margin: 5px;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 18px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
.box-card {
}
</style>
