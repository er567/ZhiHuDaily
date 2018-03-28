import Vue from 'vue'
import index from './index/index'
import Router from 'vue-router'
Vue.use(Router)
Router.prototype.goBack = function () { 
　　this.isBack = true
　　window.history.go(-1)
}
const router = new Router({
    mode: 'history',
    routes: [index, {
        path: '*',
        redirect: '/404',
        hidden: true
    }, {
        path: '/404',
        component: resolve => require(['@/components/common/404/404.vue'], resolve),
        hidden: true
    },{
    path: '/index',
    name: 'index',
	component: resolve => require(['@/components/conf/index/index.vue'], resolve),
    meta: { scrollToTop: true }
    },{
        path: '/detail',  
        name: 'detail',
        component: resolve => require(['@/components/conf/article-detail/article-detail.vue'], resolve),
        meta: { scrollToTop: true }
    },{
        path: '/author',  
        name: 'author',
        component: resolve => require(['@/components/conf/author/author.vue'], resolve)
    },{
        path: '/theme/:id',  
        name: 'theme',
        component: resolve => require(['@/components/conf/theme/theme.vue'], resolve)
    }],
    scrollBehavior: function(to, from, savedPosition){
        const position = {}
        if (to.hash) {
        position.selector = to.hash
        }
        if (to.matched.some(m => m.meta.scrollToTop)) {
            position.x = 0
            position.y = 0
            return position
        }else{//savedPosition只有当浏览器触发返回时才有效
            return savedPosition
        }
    }
})

export
default router
