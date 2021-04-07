<template>
<div>
  <div class="title">商品类型数据列表</div>
  <el-card class="box-card">

    <div class="text item">
      <el-table
          :data="typeList"
          border
          style="width: 100%" >
        <el-table-column
            prop="id"
            label="编号"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="类型名称">
        </el-table-column>
        <el-table-column
            prop="attribute_count"
            label="属性数量">
        </el-table-column>
        <el-table-column
            prop="param_count"
            label="参数数量">
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
import  {fetchproductAttr} from "../../../api/product";

export default {
name: "index",
  data(){
  return{
    typeList:[],
    listQuery:{
      pageSize:10, //每页多少条
      pageNum:1,  //当前页码
    },
    total:0
  }
  },
  mounted() {
  this.getType()
  },
  methods:{
   async  getType(){
     let data=await fetchproductAttr(this.listQuery)
     console.log(data)
     this.typeList=data.data
     this.total=data.total
   },
    handleSizeChange(count){
      this.listQuery.pageSize=count;
      this.listQuery.pageNum=1;
      this.getType();
    },
    //改变当前页
    handleCurrentChange(num){
      this.listQuery.pageNum=num
      this.getType()
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
</style>
