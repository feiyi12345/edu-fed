<template>
  <div class="login">
    <div style="margin: -20px"></div>
    <el-form label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password"></el-input>
      </el-form-item>
      <el-button type="primary" round>登录</el-button>
    </el-form>

  </div>
</template>
<script lang="ts">
import {mapState} from 'vuex'
export default {
  name: 'LoginIndex',
  data () {
    return {
      form: {
        name: '',
        password: ''
      }
    }
  },
  computed:{
    ...mapState({user:(state)=>state.userPage.pageSize})
  },
  mounted(){
    console.log(this.user);
    
  }
}
</script>
<style lang="scss" scoped>
  .login{
    display: flex;
    justify-content: center ;
    align-items: center;
    width: 100%;
    height: 100vh;
  }
  .el-form{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid rgba(109, 109, 109, 0.178);
    border-radius: 25px;
    padding: 30px 55px 30px 30px;
    margin-top: -100px;
    background-color: rgba(255, 255, 255, 0.74);
  }
  .el-button{
    width: 50%;
    margin-left: 30px;
    // box-sizing: border-box;
  }
  .el-button{
    // text-indent: 20px;
    width: 250px;
  }
</style>
