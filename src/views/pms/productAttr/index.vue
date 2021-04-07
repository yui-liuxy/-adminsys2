<template>
<div>
  <h2>商品分类列表</h2>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span style="float: left">数据列表</span>
      <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
    </div>
    <div class="text item">
      <el-table
          :data="productList"
          border
          style="width: 100%" >
        <el-table-column
            prop="id"
            label="编号"
            width="180">
        </el-table-column>
        <el-table-column
            label="商品图片"
            width="180">
          <template slot-scope="scope">
            <img :src="scope.row.pic" width="50px" height="50px">
          </template>
        </el-table-column>
        <el-table-column
            prop="name"
            label="商品名称">
        </el-table-column>
        <el-table-column label="价格/货号" prop="product_sn">
          <template slot-scope="scope">
            <p v-html= "scope.row.original_price"></p>
            <p v-html= "scope.row.product_sn" ></p>
          </template>
        </el-table-column>
        <el-table-column
            prop=""
            label="标签">
        </el-table-column>
        <el-table-column
            prop="preview_status"
            label="排序">
        </el-table-column>
        <el-table-column
            prop="delete_status"
            label="销量">
        </el-table-column>
        <el-table-column
            prop=""
            label="审核状态">
        </el-table-column>
        <el-table-column
            prop=""
            label="操作">
          <button style="margin-right: 10px">编辑</button>
          <button>删除</button>
        </el-table-column>
      </el-table>
    </div>
  </el-card>

</div>
</template>

<script>
import {fetchGoodsCategory} from "../../../api/product";

export default {
  name: "producAtttr",
  data(){
    return {
      GoodsCategory:[],
    }
  },
  mounted() {
    this.getGoodsCategory()
  },
  methods:{
   async  getGoodsCategory(){
       let  data=await  fetchGoodsCategory()
        console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
