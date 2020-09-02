<template>
  <header>
    <div class="l-content">
      <el-button size="mini" plain icon="el-icon-menu" @click="collapseMenu"></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        <img :src="userImg" class="user">
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item @click.native="logOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    </div>
  </header>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState({
        current: state => state.tab.currentMenu
      })
    },
    data() {
      return {
        userImg: require('../assets/img/user.jpg')
      }
    },
    methods: {
      collapseMenu() {
        this.$store.commit('collapseMenu')
      },
      logOut() {
        this.$store.commit('clearToken')
        this.$store.commit('clearMenu')
        location.reload()
      }
    }
  }
</script>
<style scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
}
.el-button {
  margin-right: 20px;
}
.r-content .user{
  width: 40px;
  height: 40px;
  margin-top: 3px;
  border-radius: 50%;
  padding-bottom: 0px;
  margin-bottom: 0px;
  border-bottom: none; 
}
</style>
<style>
.el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    font-weight: 400;
    color: white;
    cursor: text;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link {
    font-weight: 700;
    text-decoration: none;
    transition: color .2s cubic-bezier(.645,.045,.355,1);
    color: #666666;
}
</style>