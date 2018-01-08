<template>
	<div class="mod-index" id="jDemo">
		 <mt-header title="知乎日报" class="ui-header">
			<!-- <router-link to="/" slot="left">
				<mt-button icon="back">返回</mt-button>
			</router-link>
			<mt-button icon="more" slot="right"></mt-button> -->
		</mt-header>
		<mt-swipe :auto="3000" :speed="250">
			<mt-swipe-item v-for="(item,index) in topStories" :key="index" >
				<div class="ui-swiper" :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }">
					<h1 class="slider-title">{{item.title}}</h1>
				</div>
			</mt-swipe-item>
		</mt-swipe>
		<articleList :list="list"></articleList>	
	</div>
</template>

<script>
import Vue from "vue";
import articleList from "./article-list.vue";
// var bus = new Vue();

export default {
  data() {
    return {
      topStories: "",
      list: ""
    };
  },
  components: {articleList},
  mounted() {
    let self = this;
    this.$ajax.get(this.$apiUrl.indexUrl).then(res => {
      //   console.log(res.top_stories);
      self.topStories = res.top_stories;
      self.list = res.stories;
    });
  },
  methods: {
    getImage(url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}
    }
  }
};
</script>

<style lang="scss">
.mod-index{
  padding-top: 50px;
}
.ui-header {
  width: 100%;
  height: 50px;
  font-size: 16px;
  position: fixed;
  top: 0;
  z-index: 10;
}
.mint-swipe {
  height: 230px;
  .ui-swiper {
    width: 100%;
    height: 100%;
    position: relative;
    background-size: 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    .slider-title {
      position: absolute;
      bottom: 20px;
      line-height: 1.2;
      left: 0;
      padding: 10px;
      font-weight: 300;
      font-size: 20px;
      color: #fff;
    }
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
  }
}
</style>
