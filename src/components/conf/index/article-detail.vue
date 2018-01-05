<template>
    <div class="mod-detail" v-html="content"></div>
</template>

<script>
import Vue from "vue";
// var bus = new Vue();
export default {
  data() {
    return {
      id:0,
      url:'',
      content:''
    };
  },
  props:[],
  components: {},
  mounted() {
    let self = this;
    self.id = this.$route.params.articleId
    self.url = this.$apiUrl.articleUrl + self.id
    console.log(self.id)
    this.$ajax.get(self.url).then(res => {
        console.log(res.CONTENTS.body);
        self.content = res.CONTENTS.body;
    });
  },
  methods: {
    getDetails () {
        
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}
    },
  }
};
</script>

<style scoped lang="scss">
    
</style>