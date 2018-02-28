<template>
    <div class="mod-index" id="">
        <mt-header title="" class="ui-header">
            <i class="list-icon iconfontcom" slot="left" @click="showBar()">&#xe639;</i>
            <span class="sy-txt" slot="left">{{themeName}}</span>
        </mt-header>
        <sidebar :showSidebar.sync="showSidebar"></sidebar>
        <div class="img-box"  :style="{ backgroundImage: 'url(' + getImage(background) + ')' }">
            <h1 class="detail-title">{{description}}</h1>
            <p class="detail-image-source"></p>
        </div>
        <div class="author-box"></div>
		<articleList :list="list" :source="source"></articleList>	
        <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar()"></div>     
  </div>
</template>

<script>
import Vue from "vue";
import sidebar from "../index/sidebar.vue";
import articleList from "../index/article-list.vue";
// var bus = new Vue();
export default {
  data() {
    return {
      showSidebar: false,
      author: "",
      themeName: "",
      description: "",
      background: "",
      source: "theme",
      list: []
    };
  },
  props: [""],
  components: { sidebar,articleList},
  mounted() {
    this.author = this.$store.state.demo.author;
    this.getTheme(`/${this.$route.params.id}`);
  },
  methods: {
    showBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "scroll-stop";
    },
    hiddenBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "";
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(
          /http\w{0,1}:\/\/p/g,
          "https://images.weserv.nl/?url=p"
        );
      }
    },
    getTheme(id) {
      this.$ajax.get(this.$apiUrl.themesUrl + id).then(res => {
        this.themeName = res.THEMEDES.name;
        this.description = res.THEMEDES.description;
        this.background = res.THEMEDES.background;
        this.list.push(res.THEMEDES.stories);
      });
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.getTheme(`/${to.params.id}`);
    next();
  }
};
</script>

<style scoped lang="scss">
.ui-header {
  width: 100%;
  height: 54px;
  font-size: 16px;
  .list-icon {
    margin-left: 10px;
  }
  .sy-txt {
    margin-left: 32px;
  }
  .edit-icon {
    font-size: 20px;
    margin-right: 6px;
  }
}
.img-box {
  position: relative;
  z-index: 0;
  height: 230px;
  width: 100%;
  background-size: 100%;
  background-position-x: 50%;
  background-position-y: 50%;
  background-repeat: no-repeat;
  .detail-title {
    position: absolute;
    bottom: 23px;
    line-height: 1.2;
    left: 0;
    padding: 0 18px;
    font-weight: 300;
    font-size: 21px;
    color: #ffffff;
  }
  .detail-image-source {
    position: absolute;
    bottom: 8px;
    right: 0;
    padding: 0 18px;
    font-weight: 300;
    font-size: 12px;
    color: #d3d3d3;
  }
}
</style>