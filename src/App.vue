<template>
  <div id="jApp">
    <transition :name="transitionName">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
<script >
  export default {
    name: 'jApp',
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      if (isBack) {
        console.log(isBack,222)
          this.transitionName = 'slide-right'
      } else {
          this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>
<style scoped>
.view {
    position: absolute;
    width:100%;
    transition: all .8s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(50px, 0);
    transform: translate(50px, 0);
}
.slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-50px, 0);
    transform: translate(-50px, 0);
}
</style>