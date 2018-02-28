<template>
  <div class="sidebar-box" :class="{'show-sidebar': showSidebar}">
      <router-link :to="{name: 'author',params: { userId: 'er567' }}">
            <div class="sidebar-header">
                <div class="user">
                    <img src="../../../assets/images/conf/avatar.jpg" alt="">
                    <p>{{author}}</p>
                </div>
                <div class="operation">
                    <div class="operation-item">
                        <i class="iconfontcom">&#xe676;</i>
                        <p>我的收藏</p>
                    </div>
                    <div class="operation-item">
                        <i class="iconfontcom">&#xe7bb;</i>
                        <p>离线下载</p>
                    </div>
                </div>
            </div>
      </router-link>
      <div class="sidebar-list">
          <router-link :to="{name: 'index'}">
                <p class="home" @click="hiddenBarChild()"><i class="iconfontcom">&#xe630;</i>首页</p>
          </router-link>
          <ul>
            <li class="list-item" v-for="(item,index) in themeObj" :key="index">
                <p>{{item.name}}</p>
                <div>+</div>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import { demo } from "vuex";
export default {
  props: ["showSidebar"],
  data() {
    return {
      author: "",
      sidebarShow: this.showSidebar,
      themeObj: ""
    };
  },
  mounted: function() {
    // this.$nextTick(function() {});
    let self = this;
    this.author = this.$store.state.demo.author;
    this.$ajax.get(this.$apiUrl.themesUrl).then(res => {
      self.themeObj = res.THEMES.others;
    });
  },
  methods: {
    hiddenBarChild() {
      if (this.sidebarShow) {
        this.sidebarShow = !this.sidebarShow;
      }
      console.log(this.sidebarShow);
      this.$emit("update:showSidebar", this.sidebarShow);
    }
  },
  computed: {
    getUser() {
      return this.$store.state.demo.author;
    }
  },
  watch: {
    getUser(val) {
      this.author = val;
    }
  }
};
</script>
<style lang="scss" scoped>
.show-sidebar {
  transform: translateX(290px);
}
.sidebar-box {
  position: fixed;
  transform: translateZ(0);
  height: 100%;
  overflow: auto;
  width: 290px;
  left: -290px;
  z-index: 99;
  top: 0;
  bottom: 0;
  transition: all 0.3s ease;
  &.show-sidebar {
    transform: translateX(290px);
  }
  .sidebar-header {
    padding: 15px;
    background: #00a2ea;
    .user {
      display: flex;
      flex-direction: row;
      > img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      > p {
        margin-left: 20px;
        line-height: 30px;
        flex: 1;
        font-size: 18px;
        font-weight: 300;
        color: #ffffff;
      }
    }
  }
  .operation {
    height: 13px;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    color: #fff;
  }
  .operation-item {
    flex: 1;
    font-size: 13px;
    font-weight: 300;
    position: relative;
    padding-left: 50px;
    i {
      position: absolute;
      left: 25px;
    }
  }
  .sidebar-list {
    background: #f9f9f9;
    .home {
      position: relative;
      height: 48px;
      line-height: 48px;
      font-size: 15px;
      padding-left: 54px;
      color: #00a2ea;
      i {
        position: absolute;
        left: 22px;
        font-size: 18px;
      }
    }
    .list-item {
      height: 48px;
      line-height: 48px;
      font-size: 15px;
      padding-left: 15px;
      display: flex;
      flex-direction: row;
      > p {
        flex: 1;
      }
      > div {
        padding-right: 40px;
        font-size: 25px;
        font-weight: 200;
        color: #868686;
      }
    }
  }
}
#jApp.night-style {
  .sidebar-header {
    background: #222;
    p {
      color: #b7b7b7;
    }
  }
  .sidebar-list {
    background: #343434;
  }
  ul {
    color: #b7b7b7;
  }
}
</style>

