<template>
  <div id="jApp">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script >
export default {
  name: "jApp",
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  beforeRouteUpdate(to, from, next) {},//不适用
  watch: {
    $route(to, from) {
      let isBack = this.$router.isBack; //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = "slide-right";
        this.$router.isBack = false;
      } else {
        this.transitionName = "slide-left";
        this.$router.isBack = true;
      }
    }
  }
};
</script>
<style scoped>
.view {
  position: absolute;
  width: 100%;
  transition: all 0.8s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>