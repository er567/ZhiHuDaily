知乎日报-Vue
============
[![Build Status](https://travis-ci.org/cccyb/vue-zhihu-daily.svg?branch=master)](https://travis-ci.org/cccyb/vue-zhihu-daily) [![license](https://img.shields.io/github/license/mashape/apistatus.svg)](http://opensource.org/licenses/MIT)

## 声明
>『知乎』是 知乎. Inc 的注册商标。本软件与其代码非由知乎创作或维护。软件中所包含的信息与内容皆违反版权与知乎用户协议。本项目所有文字图片等稿件内容均由[知乎](https://www.zhihu.com)提供，获取与共享之行为或有侵犯知乎权益的嫌疑。若被告知需停止共享与使用，本人会及时删除整个项目。请您了解相关情况，并遵守知乎协议。

## 在线Demo
[点击预览](http://120.79.235.149:8888/)

## git address
``` js
git@github.com:er567/ZhiHuDaily.git
```

## Contents 
1. install

``` js
npm install
```
2. start

``` js
npm start
```
3. build

``` js
npm run build
```
4. modify webservice configuration
nginx

``` js
 location / {
	try_files $uri $uri/ /index.html;
}
```

for mac
[download phantomjs](http://phantomjs.org/download.html)
``` js
vi .bash_profile
export PATH=/Users/chancriss/Phantomjs/bin:$PATH
source .bash_profile
```

## Reference 
1. es6
1. [webpack](https://webpack.js.org/)
1. Vue.js devtools
1. [vue](https://vuejs.org/) 
1. [vue-router](https://router.vuejs.org/en/) 
1. [vuex](https://vuex.vuejs.org/en/)
1. [element for pc, admin](http://element.eleme.io/#/en-US)
1. [mockjs](http://mockjs.com/)
