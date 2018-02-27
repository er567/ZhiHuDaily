<template>
    <div class="mod-index" id="">
        <mt-header title="" class="ui-header">
            <i class="list-icon iconfontcom" slot="left" @click="showBar()">&#xe639;</i>
            <span class="sy-txt" slot="left">个人主页</span>
            <i v-if="!edit" class="edit-icon iconfontcom" slot="right" @click="editName()">&#xe63b;</i>
            <i v-if="edit" class="edit-icon iconfontcom" slot="right" @click="editName()">&#xe607;</i>
        </mt-header>
        <sidebar :showSidebar.sync="showSidebar"></sidebar>
        <div>
            <div class="avatar">
                <img src="../../../assets/images/conf/avatar.jpg" alt="">
            </div>
            <div class="user-name">
                <input type="text" value="er_567" readonly="readonly" v-focus="focusState" ref="name" :class="{foucs:focusState}">
            </div>
            <div class="address-list">
                <a href="https://github.com/er567/ZhiHuDaily">github地址</a>
                <a href="https://oohyo.github.io">我的博客地址</a>
            </div>
            <router-link :to="{name: 'index'}">
                <div class="btn-box">登出</div>
            </router-link>
        </div>
        <div v-if="showSidebar" class="sidebar-mask" @click="hiddenBar()"></div>     
  </div>
</template>

<script>
import Vue from "vue";
import sidebar from "../index/sidebar.vue";
// var bus = new Vue();
export default {
  data() {
    return {
      showSidebar: false,
      edit: false,
      focusState: false
    };
  },
  props: [""],
  components: { sidebar },
  mounted() {},
  methods: {
    showBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "scroll-stop";
    },
    hiddenBar() {
      this.showSidebar = !this.showSidebar;
      window.document.body.className = "";
    },
    editName() {
        this.edit = !this.edit;
        this.focusState = !this.focusState;
        if(this.focusState){
            this.$refs.name.removeAttribute('readonly');
        }else{
            this.$refs.name.setAttribute('readonly','readonly');
        }
    }
  },
  directives: {
    focus: {
      update: function (el, {value}) {
        if (value) {
          el.focus()
        }
      }
    }
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
.avatar {
  margin: 30px auto;
  text-align: center;
  img {
    width: 80px;
    border-radius: 50%;
  }
}
.user-name {
  margin: 0 auto;
  text-align: center;
  input {
    border: 0;
    text-decoration: underline;
    text-decoration-color: #b6b6b6;
    text-underline-position: under;
    width: auto;
    margin: 0 auto 40px auto;
    padding-bottom: 2px;
    color: #999;
    font-size: 20px;
    text-align: center;
    &.foucs{
        color: #000;
        text-underline-position: under;
        text-decoration-color: #4bb6ae;
    }
  }
}
.address-list {
  width: 140px;
  margin: 0 auto;
  a {
    display: block;
    color: #2482ab;
    font-size: 18px;
    line-height: 18px;
    padding: 16px;
    border-bottom: 1px solid #b6b6b6;
    text-align: center;
    &:first-child {
      border-top: 1px solid #b6b6b6;
    }
  }
}
.btn-box {
  margin: 50px auto 0 auto;
  width: 100px;
  height: 40px;
  border: 1px solid #999;
  border-radius: 10px;
  color: #dd0f0f;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
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
  z-index: 10;
  background: rgba(0, 0, 0, 0.7);
}
#jApp.night-style input{
    background: #343434;
}
</style>