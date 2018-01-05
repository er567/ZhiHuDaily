<template>
  <div>
			<ul class="mod-list" v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
				<h2>今日新闻</h2>
  				<li class="list-item" @click="getDetails" v-for="(item,index) in list" :key="index">
            <div class="item-title">{{item.title}}</div>
            <div class="item-imgbox">
              <img :src="getImage(item.images[0])" alt="">
            </div>
				  </li>
			</ul>
		</div>
</template>

<script>
import Vue from "vue";
// var bus = new Vue();
export default {
  data() {
    return {
      articleId:0
    };
  },
  props:['list'],
  components: {},
  mounted() {
    
  },
  methods: {
    getDetails () {
      let articleId = '9664295';
      this.$router.push({name:'detail',params:{ articleId: articleId }});
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}
		},
		loadMore() {
      this.loading = true;
    //   setTimeout(() => {
    //     let last = this.list[this.list.length - 1];
    //     for (let i = 1; i <= 7; i++) {
    //       this.list.push(last + i);
    //     }
    //     this.loading = false;
    //   }, 2500);
    }
  }
};
</script>

<style scoped lang="scss">
  .mod-list{
	padding: 20px 20px;
	background: #f2f2f2;
	line-height: 1;
	.list-item{
		min-height: 160px;
		display: -webkit-box;
    	display: -webkit-flex;
    	display: flex;
		margin: 20px auto;
		padding: 20px;
		background: #fff;
		.item-title{
			font-size: 32px;
    		line-height: 1.2;
			margin-right: 20px;
			-webkit-box-flex: 1; 
			-webkit-flex: 1; 
			flex: 1; 
		}
		.item-imgbox{
			img{
				width: 180px;
				height: 160px;
			}
		}
	}
}
</style>