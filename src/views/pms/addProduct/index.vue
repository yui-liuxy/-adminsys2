<template>
<div>
   <div class="title">填写商品信息</div>
  <el-form ref="form" :model="form" label-width="80px" style="max-width: 500px">
    <el-form-item label="商品分类">
      <el-cascader  style="float: left"
          v-model="selectProductCateValue"
          :options="productjilianList"
      ></el-cascader>
    </el-form-item>
    <el-form-item label="商品名称">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="副标题">
      <el-input v-model="form.sub_title"></el-input>
    </el-form-item>
    <el-form-item label="商品品牌">
      <el-select  placeholder="请选择品牌" style="float: left" v-model="form.brand_id">
        <el-option v-for="item in brandList" :key="item.id" :label="item.name" :value="item.id" >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品介绍">
      <el-input type="textarea" v-model="form.description"></el-input>
    </el-form-item>
    <el-form-item label="商品货号">
      <el-input v-model="form.product_sn"></el-input>
    </el-form-item>
    <el-form-item label="商品售价">
      <el-input v-model="form.price" value=0></el-input>
    </el-form-item>
    <el-form-item label="市场价">
      <el-input v-model="form.original_price" value=0></el-input>
    </el-form-item>
    <el-form-item label="商品重量">
      <el-input v-model="form.weight" value=0></el-input>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="form.stock" value=0></el-input>
    </el-form-item>
    <el-form-item label="计量单位">
      <el-input v-model="form.unit" value=0></el-input>
    </el-form-item>
    <el-form-item label="排序">
      <el-input v-model="form.sort" value=0></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">提交</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>

import {fetchGoodsCategory,fetchbrand,addgoods} from "../../../api/product";

export default {
name: "index",
  data() {
    return {
      form: {
        brand_id: null,//商品品牌id
        brand_name: '',//商品品牌名称
        delete_status: 0,//删除标志位，默认填0，表示未删除
        description: '',//商品介绍
        name: '',//商品名称
        original_price: 0,//市场价
        pic: '',//商品图片的url地址
        price: 0,//商品售价
        product_category_id: null,//分类id
        product_category_name: '',//分类名称
        product_sn: '',//商品货号
        sort: 0,//排序
        stock: 0,//商品库存
        sub_title: '',//副标题
        unit: '',//计量单位
        weight: 0,//商品重量
        sale:0,//商品销量
        publish_status: 0, //上架
        new_status: 0, //新品
        recommand_status: 0, //推荐
        verify_status: 0 //审核状态
  },
      productjilianList:[],
      selectProductCateValue: "",
      brandList:[],
    }
  },
  watch:{
    selectProductCateValue(newV){
      console.log(newV)
      if(newV!==null&&newV.length==2){
        this.form.product_category_id=newV[1];
      }
    },
  },
  mounted() {
    this. getrand()
    this.getGoodsCategory()
     this.submitForm()
  },
  methods: {
    submitForm() {
      addgoods(this.form)
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
  }

}
</script>

<style scoped>

.title{
 border: 1px solid #eeeeee;
  border-radius: 6px;
  height: 60px;
  line-height: 60px;
  text-align: left;
  padding-left: 10px;
  margin-bottom: 10px;

}
</style>
