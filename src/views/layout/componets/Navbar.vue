<template>
  <div class="navbar-container">
    <div class="navbar-l">
      <el-breadcrumb separator="/" style="line-height: 50px">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">商品</a></el-breadcrumb-item>
        <el-breadcrumb-item>商品列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="navbar-r">
      <el-dropdown>
        <el-button type="primary">
           <img   src="@/assets/images/mz_small_icon.png" class="userimg"/>

          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>

export default {
  name: "Navbar"
};
</script>

<style>
.navbar-l{
  padding-left: 10px;
}
.userimg {
  width: 22px;
  height: 22px;
}
</style>
