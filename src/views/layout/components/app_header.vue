<template>
  <div class="app_header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
        <el-breadcrumb-item v-for="breadSlipItem in breadSlip" :key="breadSlipItem.path">{{breadSlipItem. meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    <el-dropdown>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
        <i class="el-icon-arrow-down el-icon--right"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
        <el-dropdown-item icon="el-icon-circle-plus">狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  computed: {
    breadSlip () {
      return this.$route.matched
    }
  }
}
</script>

<style>
    .app_header{
        height: 100%;
        display: flex;
        align-items: center;
        background-color: none;
        justify-content:space-between;
    }
    .el-dropdown{
      display: flex;
      align-items: center;

    }
</style>
