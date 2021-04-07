<template>
  <div class="app-wrapper">
    <sidebar></sidebar>
    <div class="main-container">
      <navbar></navbar>

      <div class="main-con">

        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./componets/Navbar";
import Sidebar from "./componets/Sidebar";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar
  }
};
</script>

<style scoped lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;

  .sidebar-container {
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;

    color: #fff;
    width: 200px;
  }

  .main-container {
    clear: both;
    min-height: 100%;
    margin-left: 200px;


    .navbar-container {
      height: 50px;

      line-height: 50px;
      display: flex;
      justify-content: space-between;
    }

    .main-con {
      width: 100%;
      min-height: 100%;

    }
  }
}
</style>
