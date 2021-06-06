import Vue from 'vue'
import VueRouter from 'vue-router'

// 1.安装VueRouter
Vue.use(VueRouter)

// 2.获取路由信息
// 动态加载pages中所有的路由文件
const files = require.context('@/views', true, /router\.js$/);

// files.keys()返回一个路径
const routes = [];

files.keys().forEach(path => {
  const page = require('@/views' + path.replace('.', ''));
  Array.prototype.isPrototypeOf(page.default) ? routes.push(...page.default) : routes.push(page.default);
});

// 3.创建路由对象
const router = new VueRouter({
  mode: 'history',
  routes
})

// 4.导出
export default router
