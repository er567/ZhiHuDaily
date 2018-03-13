///配置全局url
import Vue from 'vue'
Vue.prototype.$apiUrl = {
  //'https://zhihu-daily.leanapp.cn/api/v1/last-stories',
  indexUrl: '/api/news/latest',
  themesUrl: '/api/themes',
  themesDetail: '/api/theme',
  topicList: '/api/news/before/',//'https://zhihu-daily.leanapp.cn/api/v1/before-stories/',
  articleUrl: '/api/news/'
}
