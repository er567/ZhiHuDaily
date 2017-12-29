<template>
	<div class="mod-demo" id="jDemo">
		<ul>
			<li>{{ title }}</li>
			<li>字体图标<span class="iconfontcom">&#xe7ca;</span></li>
		</ul>
		<D2 :bus="bus"></D2>  
	</div>
</template>

<script>
import D2 from './d2.vue'
import Vue from 'vue'
var bus = new Vue();

export default {
	data(){
		return {
			bus,
			title: 'Hello world'	
		}
	},
	components:{
		D2
	}
}
</script>

<style scoped lang="scss">
.mod-demo {
	color:red;	
}
</style>
