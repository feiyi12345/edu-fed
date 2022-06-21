import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// 引入element
Vue.use(Antd);
import ElementUI from 'element-ui'
// 引入element主题文件
// import 'element-ui/lib/theme-chalk/index.css'
// 将element注册为Vue插件
// 引入自定义全局样式文件
import './styles/index.scss'
import { Button } from 'ant-design-vue';
Vue.use(Button);
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
