<template>
    <div class="role">
        <div class="container">
          <section class="jumbotron">
            <h3 class="jumbotron-heading">搜索用户</h3>
            <div>
          <input type="text" placeholder="enter the name you search"
          v-model = 'userKey'
          />&nbsp;
          <button @click="getUserList">Search</button>
            </div>
          </section>
          <div v-show="userMessage.length">
            <div class="card" 
            v-for="user in userMessage" 
            :key="user.login"
            >
               <a :href="user.html_url" target="_blank">
                 <img :src="user.avatar_url" style='width: 100px'/>
               </a>
               <p class="card-text">{{user.login}}</p>
               <el-button @click="getUserMessage">添加用户</el-button>
            </div>
          </div>
          
            <h1 v-show="renderList.welcomRender">欢迎光临</h1>
            <h1 v-show="renderList.loadingRender">loading......</h1>
            <h1 v-show="renderList.errorRender">Net_Error</h1>
        </div>
    </div>
</template>
<script lang="ts">
import axios from 'axios'
export default
{
  name: 'RoleIndex',
  data() {
    return {
      clickUser:{},
      userKey:'',
      userMessage:[], 
      renderList:{
        listRender:false,
        loadingRender:false,
        welcomRender:true,
        errorRender:false,
      }
    }
  },
    methods:{
    getUserList(){
      this.renderList.welcomRender = false
      this.renderList.loadingRender = true  
      axios.get(`https://api.github.com/search/users?q=${this.userKey}`).then(
        Response =>{
          this.userMessage = Response.data.items
          this.renderList.listRender = true
          this.renderList.loadingRender = false          
        },
        Error =>{
          this.renderList.loadingRender = false 
          this.renderList.errorRender = true    
        }
      )
    },
    getUserMessage(e){
      // 获取点击元素的父元素
      const user = e.currentTarget.parentElement
      console.log(user.getElementByTagName("p"))
      console.log(user)
      
    }
  }
}
</script>
<style lang="scss" scoped>
  section{
    // display: flex;
    background-color: rgba(185, 183, 181, 0.153);
    padding: 20px ;
  }
  .album {
  min-height: 50rem;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: .75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: .75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
