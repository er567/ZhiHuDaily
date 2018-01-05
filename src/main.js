import 'lib-flexible'
import Vue from 'vue'
import ajax from './assets/js/ajax'
import router from './router'
import store from './store'
import apiUrl from './assets/js/api-url'
// import ElementUI from 'element-ui'
import Mint from 'mint-ui'
import './assets/sass/reset/_reset.scss';
import './assets/sass/fonts/common/1.0.0/_common.scss';
// import 'element-ui/lib/theme-default/index.css'
import 'mint-ui/lib/style.css'
// Vue.use(ElementUI);
Vue.use(Mint);

new Vue({
    el: '#jApp',
	store,
    router
})

