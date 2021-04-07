<template>
  <div>
    <div slot="header" class="clearfix" style="margin-top: 20px">
      <span style="float: left ; ">筛选搜索</span>
      <el-button style="float: right; padding: 10px  ;background-color: dodgerblue;color: #FFFFFF" type="text" @click="handleSearch">查询</el-button>
      <el-button style="float: right; padding: 10px  ;" type="text" >重置</el-button>
    </div>
    <el-form ref="form" :model="listQuery" label-width="80px">
      <el-form-item label="输入搜索" style="display: inline-block">
        <el-input v-model="listQuery.name" placeholder="商品名称" style="width: 150px"></el-input>
      </el-form-item>
      <el-form-item label="商品编号" style="display: inline-block">
        <el-input v-model="listQuery.id" placeholder="商品编号"></el-input>
      </el-form-item>
    </el-form>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="float: left">数据列表</span>
        <el-button style="float: right; padding: 3px 0" type="text">添加</el-button>
      </div>
      <div class="text item">
        <el-table
            :data="brandList"
            border
            style="width: 100%" >
          <el-table-column width="180">
            <input type="checkbox" />
          </el-table-column>
          <el-table-column
              prop="id"
              label="编号"
              width="180">
          </el-table-column>
          <el-table-column
              prop="name"
              label="商品名称">
          </el-table-column>
          <el-table-column label="品牌首字母" prop="first_letter" >
          </el-table-column>
          <el-table-column
              prop="sort"
              label="排序">
          </el-table-column>
          <el-table-column
              prop=""
              label="品牌制造商">
            <el-switch v-model="value">
            </el-switch>
          </el-table-column>
          <el-table-column
              prop=""
              label="是否显示">
            <el-switch v-model="value">
            </el-switch>
          </el-table-column>
          <el-table-column label="相关" >
            <template slot-scope="scope">
            <div>商品： <p v-html= "scope.row.product_comment_count" style="display: inline-block"></p></div>
              <div> 评价：  <p v-html= "scope.row.product_count" style="display: inline-block" ></p></div>
            </template>
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
import {fetchbrand} from "../../../api/product";

export default {
  name: "brand",
  data(){
    return {
      brandList:[],
      value:true,
      listQuery:{
        pageSize:5, //每页多少条
        pageNum:1,  //当前页码
      },
      total:0
    }
  },
  mounted() {
    this.getBrand()
  },
  methods:{
    async getBrand(){
      let data=await fetchbrand(this.listQuery)
      console.log(data)
      this.brandList=data.data
      this.total=data.total
    },
    handleSizeChange(count){
      this.listQuery.pageSize=count;
      this.listQuery.pageNum=1;
      this.getBrand();
    },
    //改变当前页
    handleCurrentChange(num){
      this.listQuery.pageNum=num
      this.getBrand()
    },
    handleSearch() {
      this.getBrand();

    }
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
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both
}
</style>
