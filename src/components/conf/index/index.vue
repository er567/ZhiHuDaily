<template>
	<div class="mod-index" id="jDemo">
		 <mt-header title="知乎日报" class="ui-header">
      <mt-button icon="more" slot="left"></mt-button>
		</mt-header>
		<mt-swipe :auto="3000" :speed="250">
			<mt-swipe-item v-for="(item,index) in topStories" :key="index" >
				<div class="ui-swiper" @click="getDetails(item.id)" :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }">
					<h1 class="slider-title">{{item.title}}</h1>
				</div>
			</mt-swipe-item>
		</mt-swipe>
		<articleList :list="list" :dateList="dateList" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10"></articleList>	
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
      list: [],
      dateList:['今日新闻'],
      isNotFirst: false,
			today: Date.now()
    };
  },
  components: {articleList},
  mounted() {
    let self = this;
    this.today = this.$options.filters['date'](this.today);
    this.$ajax.get(this.$apiUrl.indexUrl).then(res => {
      //   console.log(res.top_stories);
      self.topStories = res.STORIES.top_stories;
      self.list.push(res.STORIES.stories);
    });
  },
  methods: {
    getDetails (id) {
      this.$router.push({name:'detail',params:{ articleId: id }});
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}
    },
    loadMore() {
			if(this.isNotFirst){//第一次不执行
				this.loading = true;
				this.lazyloadList(this.today);
				console.log(this.today)
				console.log('不是第一次');
			}
			this.isNotFirst = true;
    },
    lazyloadList(date) {
      let self = this;
      this.dateList.push(this.$options.filters['Cdate'](date));
      console.log(this.dateList)
      this.$ajax.get(this.$apiUrl.topicList+date).then(res => {
        console.log(res.STORIES.stories);
        self.list.push(res.STORIES.stories);
        self.today -= 1;
    });
    }
  },
  filters: {
		date:function (input) {
				var d = new Date(input);
				var year = d.getFullYear();
				var month = d.getMonth() <9 ? '0' + (d.getMonth()+1) : '' + d.getMonth()+1;
				var day = d.getDate() <10 ? '0' + d.getDate() : '' + d.getDate();
				var hour = d.getHours();
				var minutes = d.getMinutes();
				var seconds = d.getSeconds();
				return year+month+day;// + ' ' + hour + ':' + minutes + ':' + seconds;
    },
    Cdate:function(ipt){
      ipt = ipt.toString();
      let year = ipt.slice(0,4),
          month = ipt.slice(4,6),
          day = ipt.slice(6,8);
      return month + '月' + day + '日';
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
