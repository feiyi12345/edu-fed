<template>
  <div class="app-aside">
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
          <el-menu-item index="/role">角色管理</el-menu-item>
          <el-menu-item index="/menu">菜单管理</el-menu-item>
          <el-menu-item index="/resource">资源管理</el-menu-item>
        </el-submenu>
      <el-menu-item index="/course">
        <i class="el-icon-setting"></i>
        <span slot="title">课程管理</span>
      </el-menu-item>
      <el-menu-item index="/user">
        <i class="el-icon-setting"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
            <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>广告管理</span>
        </template>
          <el-menu-item index="/advert">广告列表</el-menu-item>
          <el-menu-item index="/advert_l">广告位列表</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AppAside'
}
</script>

<style lang='scss' scoped>
    .app-aside{
    height: 100%;
    }
    .el-menu{
        height: 100%;
    }
</style>
