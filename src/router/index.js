import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    // 2.0 路由独享的守卫
    beforeEnter: (to, from, next) => {
      // ...
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 1.0 全局路由守卫
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // ...
})
// 全局后置钩子
router.afterEach((to, from) => {
  // ...
})


// 3.0 组件内路由守卫

// <script>
// export default {
//     data(){
//         return{
//             name:"Arya"
//         }
//     },
// beforeRouteEnter (to, from, next) {
//   // 在渲染该组件的对应路由被 confirm 前调用
//   // 不！能！获取组件实例 `this`
//   // 因为当守卫执行前，组件实例还没被创建
// },
// beforeRouteUpdate (to, from, next) {
//   // 在当前路由改变，但是该组件被复用时调用
//   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
//   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
//   // 可以访问组件实例 `this`
// },
// beforeRouteLeave (to, from, next) {
//   // 导航离开该组件的对应路由时调用
//   // 可以访问组件实例 `this`
// }
// }
// </script>

export default router



// vue router的三种路由模式
// ①
// Hash: 使用URL的hash值来作为路由。支持所有浏览器。 url带#号
// ------ hash模式背后的原理是onhashchange事件，可以在window对象上监听这个事件：
// 你只能改变#后面的url片段

//   window.onhashchange = function(event){
//     console.log(event.oldURL, event.newURL);
//     let hash = location.hash.slice(1);
//     document.body.style.color = hash;
// }


// ②
// History: 以来HTML5 History API 和服务器配置。参考官网中HTML5 History模式
// history.go(-2);//后退两次
// history.go(2);//前进两次
// history.back(); //后退
// hsitory.forward(); //前进
// 包括了pushState、replaceState两个方法，这两个方法接收三个参数：stateObj，title，url
// history.pushState({color:'red'}, 'red', 'red')

// window.onpopstate = function(event){
//     console.log(event.state)
//     if(event.state && event.state.color === 'red'){
//         document.body.style.color = 'red';
//     }
// }
// history.back();
// history.forward();

// popstate实现history路由拦截，监听页面返回事件
// 当活动历史记录条目更改时，将触发popstate事件。

// 1、如果被激活的历史记录条目是通过对  history.pushState()  的调用创建的，或者受到对  history.replaceState()  的调用的影响，popstate事件的state属性包含历史条目的状态对象的副本。

// 2、需要注意的是调用  history.pushState()  或  history.replaceState()  用来在浏览历史中添加或修改记录，不会触发popstate事件；

// 只有在做出浏览器动作时，才会触发该事件，如用户点击浏览器的回退按钮（或者在Javascript代码中调用history.back() ）


// Abstract： 支持所有javascript运行模式。如果发现没有浏览器的API，路由会自动强制进入这个模式。
