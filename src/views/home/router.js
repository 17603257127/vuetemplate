// 懒加载路由
const Home = () => import('./home.vue')
export default [
  {
    path: '/home', 
    name: 'home',
    component: Home,
    children: [
    ]
  },
  {
    path: '', 
    name: 'home',
    component: Home,
    children: [
    ]
  }
]

