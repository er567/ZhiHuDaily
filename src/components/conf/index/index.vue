<template>
	<div class="mod-index" id="">
		 <mt-header title="" class="ui-header">
      <i class="list-icon iconfontcom" slot="left" @click="showBar()">&#xe639;</i>
      <span class="sy-txt" slot="left">首页</span>
      <i class="iconfontcom" slot="right">&#xe695;</i>
      <i class="iconfontcom head-more" slot="right" @click="nightMod()">&#xe633;</i>
		</mt-header>
    <sidebar :showSidebar.sync="showSidebar"></sidebar>
		<mt-swipe :auto="3000" :speed="250">
			<mt-swipe-item v-for="(item,index) in topStories" :key="index" >
				<div class="ui-swiper" @click="getDetails(item.id)" :style="{ backgroundImage: 'url(' + getImage(item.image) + ')' }">
					<h1 class="slider-title">{{item.title}}</h1>
				</div>
        <div class="swiper-mask"></div>
			</mt-swipe-item>
		</mt-swipe>
		<articleList :list="list" :dateList="dateList" :source="source" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="100"></articleList>	
    <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar()"></div>
  </div>
</template>

<script>
import Vue from "vue";
import articleList from "./article-list.vue";
import sidebar from "./sidebar.vue";
// var bus = new Vue();

export default {
  data() {
    return {
      topStories: "",
      list: [],
      dateList: ["今日新闻"],
      source: "index",
      isNotFirst: false,
      today: Date.now(),
      showSidebar: false,
      nightStyle: false
    };
  },
  components: { articleList, sidebar },
  mounted() {
    let self = this;
    window.document.body.className = "";
    this.today = this.$options.filters["date"](this.today);
    this.$ajax.get(this.$apiUrl.indexUrl).then(res => {
      self.topStories = res.top_stories;
      self.list.push(res.stories);
    });
  },
  methods: {
    getDetails(id) {
      this.$router.push({ name: "detail", params: { articleId: id } });
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(
          /http\w{0,1}:\/\/p/g,
          "https://images.weserv.nl/?url=p"
        );
      }
    },
    loadMore() {
      if (this.isNotFirst) {
        //第一次不执行
        this.loading = true;
        this.lazyloadList(this.today);
      }
      this.isNotFirst = true;
    },
    lazyloadList(date) {
      let self = this;
      this.dateList.push(this.$options.filters["Cdate"](date));
      // console.log(this.dateList);
      this.$ajax.get(this.$apiUrl.topicList + date).then(res => {
        // console.log(res.stories);
        self.list.push(res.stories);
        self.today -= 1;
      });
    },
    showBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "scroll-stop";
    },
    hiddenBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "";
    },
    nightMod() {
      if (!this.nightStyle) {
        window.document.getElementById("jApp").className = "night-style";
      } else {
        window.document.getElementById("jApp").className = "";
      }
      this.nightStyle = !this.nightStyle;
    }
  },
  filters: {
    date: function(input) {
      var d = new Date(input);
      var year = d.getFullYear();
      var month =
        d.getMonth() < 9 ? "0" + (d.getMonth() + 1) : "" + d.getMonth() + 1;
      var day = d.getDate() < 10 ? "0" + d.getDate() : "" + d.getDate();
      var hour = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      return year + month + day; // + ' ' + hour + ':' + minutes + ':' + seconds;
    },
    Cdate: function(ipt) {
      ipt = ipt.toString();
      let year = ipt.slice(0, 4),
        month = ipt.slice(4, 6),
        day = ipt.slice(6, 8);
      return month + "月" + day + "日";
    }
  }
};
</script>

<style lang="scss" scoped>
.mod-index {
  padding-top: 50px;
}
.ui-header {
  width: 100%;
  height: 54px;
  font-size: 16px;
  position: fixed;
  top: 0;
  z-index: 30;
  .list-icon {
    margin-left: 10px;
  }
  .sy-txt {
    margin-left: 30px;
  }
  .head-more {
    margin-left: 20px;
  }
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
      bottom: 23px;
      line-height: 1.2;
      left: 0;
      padding: 0 18px;
      font-weight: 300;
      font-size: 21px;
      color: #ffffff;
      z-index: 12;
    }
  }
  .swiper-mask {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0.1)
    );
    background-image: -webkit-linear-gradient(
      bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.1) 40%,
      rgba(0, 0, 0, 0.1)
    );
  }
  .mint-swipe-indicator {
    width: 8px;
    height: 8px;
  }
}
.sidebar-mask {
  /*width: 357px;*/
  /*height: 667px;*/
  position: fixed;
  transform: translateZ(0);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 30;
  background: rgba(0, 0, 0, 0.7);
}
#jApp.night-style {
  background: #343434;
  .ui-header {
    background: #222222;
  }
  .mod-list {
    background: #343434;
    .title {
      color: #b7b7b7;
    }
    .list-item {
      background: #404040;
      border: 1px solid #343434;
      border-bottom: 1px solid #222222;
      .item-title {
        color: #d2d2d2;
      }
    }
  }
}
.scroll-stop {
  overflow: hidden;
}
</style>
