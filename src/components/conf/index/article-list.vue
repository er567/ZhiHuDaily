<template>
  <div class="list-box">
			<ul class="mod-list" v-for="(listItem,index) in list" :key="index">
				<h2 v-if="source=='index'" class="title">{{dateList[index]}}</h2>
  				<li class="list-item" @click="getDetails(item.id)" v-for="(item,index) in listItem" :key="index">
            <div class="item-title">{{item.title}}</div>
            <div class="item-imgbox" v-if="item.images">
              <img :src="getImage(item.images[0])" alt="">
            </div>
				  </li>
			</ul>
		</div>
</template>

<script>
import Vue from "vue";
// import formatDate from './assets/js/data.js'
// var bus = new Vue();
export default {
  data() {
    return {
      
    };
  },
  props:['list','dateList','source'],
  components: {},
  mounted() {
    window.document.body.className = "";
  },
  methods: {
    getDetails (id) {
      this.$router.push({name:'detail',params:{ articleId: id }});
    },
    getImage(url) {
      if (url !== undefined) {
        return url.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}
		}
	}
};
</script>

<style scoped lang="scss">
  .mod-list{
	padding: 10px 10px;
	background: #f2f2f2;
	line-height: 1;
	.list-item{
		min-height: 40px;
		display: -webkit-box;
    	display: -webkit-flex;
    	display: flex;
		margin: 10px auto;
		padding: 10px;
		background: #fff;
		border: 1px solid #eaeaea;
    border-bottom: 1px solid #d0d0d0;
		.item-title{
			font-size: 16px;
    		line-height: 1.2;
			margin-right: 10px;
			-webkit-box-flex: 1; 
			-webkit-flex: 1; 
			flex: 1; 
		}
		.item-imgbox{
			img{
				width: 90px;
				height: 80px;
			}
		}
	}
}
</style>