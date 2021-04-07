<template>
  <div class="sidebar-container">
    <el-menu
        :default-active="$route.path"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <router-link to="/">
        <el-menu-item index="/">
          <i class="icon iconfont icon-home"></i>
          <span slot="title">首页</span>
        </el-menu-item>
      </router-link>
        <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品</span>
        </template>
        <el-menu-item-group>
          <router-link to="/pms">
          <el-menu-item index="/pms">商品列表</el-menu-item>
          </router-link>
          <router-link to="/pms/productCate">
          <el-menu-item index="/pms/productCate">商品分类</el-menu-item>
          </router-link>
          <router-link to="/pms/productType">
            <el-menu-item index="/pms/productType">商品类型</el-menu-item>
          </router-link>
          <router-link to="/pms/brand">
            <el-menu-item index="/pms/brand">品牌管理</el-menu-item>
          </router-link>
          <router-link to="/pms/addProduct">
            <el-menu-item index="/pms/addProduct">添加商品</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单</span>
        </template>
        <el-menu-item-group>
          <router-link to="/dms">
            <el-menu-item index="1-1">订单列表</el-menu-item>
          </router-link>
          <router-link to="/dms/orderSet">
            <el-menu-item index="1-2">订单设置</el-menu-item>
          </router-link>
          <router-link to="/dms/salesReturn">
            <el-menu-item index="1-3">退货申请处理</el-menu-item>
          </router-link>
          <router-link to="/dms/reason">
            <el-menu-item index="1-4">退货原因设置</el-menu-item>
          </router-link>

        </el-menu-item-group>
      </el-submenu>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style>
.icon {
  padding-right: 5px;
}
.el-menu{
  border-right: none !important;
}
.sidebar-container{
 background-color: rgb(84, 92, 100);
}
</style>
