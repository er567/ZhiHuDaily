///配置全局url
import Vue from 'vue'
Vue.prototype.$apiUrl = {
  indexUrl: 'https://zhihu-daily.leanapp.cn/api/v1/last-stories',
  topicList: 'https://zhihu-daily.leanapp.cn/api/v1/before-stories/',
  // indexUrl: 'https://news-at.zhihu.com/api/4/news/latest',
  articleUrl: 'https://zhihu-daily.leanapp.cn/api/v1/contents/',
  themesUrl: 'https://zhihu-daily.leanapp.cn/api/v1/themes'
}
