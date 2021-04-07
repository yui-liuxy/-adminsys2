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
            :data="GoodsCategory"
            border
            style="width: 100%" >
          <el-table-column
              prop="id"
              label="编号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="商品名称">
          </el-table-column>
          <el-table-column label="级别" >
            <p>一级</p>
          </el-table-column>
          <el-table-column
              prop="product_count"
              label="商品数量">
          </el-table-column>
          <el-table-column
              prop="product_unit"
              label="数量单位">
          </el-table-column>
          <el-table-column
              prop=""
              label="是否显示">
            <el-switch v-model="value">
            </el-switch>
          </el-table-column>
          <el-table-column
              prop="nav_status"
              label="排序">
          </el-table-column>
          <el-table-column
              prop=""
              label="设置">
            <button>查看下级</button>
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
import {fetchGoodsCategory} from "../../../api/product";

export default {
  name: "produtCate",
  data(){
    return {
      GoodsCategory:[],
      value:true,
      listQuery:{
        pageSize:10, //每页多少条
        pageNum:1,  //当前页码
      },
      total:4
    }
  },
  mounted() {
    this.getGoodsCategory()
  },
  methods:{
    async  getGoodsCategory(){
      let  data=await  fetchGoodsCategory(this.listQuery)
      this.GoodsCategory=data.data
    },
    handleSizeChange(count){
      this.listQuery.pageSize=count;
      this.listQuery.pageNum=1;
      this.getGoodsCategory();
    },
    //改变当前页
    handleCurrentChange(num){
      this.listQuery.pageNum=num
      this.getGoodsCategory()
    }
  }
}
</script>

<style scoped>

</style>
