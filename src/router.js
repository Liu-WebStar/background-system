import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout.vue";
import Login from "@/views/login";
import Home from "@/views/home/index.vue";
import Member from "@/views/member";
import Supplier from "@/views/supplier";
import Goods from "@/views/goods";
import Staff from "@/views/staff";

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'layout',
    component:Layout,
    redirect:'/home',
    children:[
      {path:'/home',component:Home,meta:{title:'首页'}}
    ]
  },
  {path:'/login',name:'login',component:Login},
  {
    path:'/member',
    name:'member',
    component:Layout,
    children:[
      {path:'/',component:Member,meta:{title:'会员管理'}},
    ]
  },
  {
    path:'/supplier',
    name:'supplier',
    component:Layout,
    children:[
      {path:'/',component:Supplier,meta:{title:'供应商管理'}},
    ]
  },
  {
    path:'/goods',
    name:'goods',
    component:Layout,
    children:[
      {path:'/',component:Goods,meta:{title:'商品管理'}},
    ]
  },
  {
    path:'/staff',
    name:'staff',
    component:Layout,
    children:[
      {path:'/',component:Staff,meta:{title:'员工管理'}},
    ]
  }
];
const router = new VueRouter({
  routes
});

export default router;
