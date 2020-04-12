<template>

	<view class="content">
		<my-form>
			<input type="text" value="eeeeee">
			<radio>3333	</radio>
			<checkbox>选择</checkbox>
		</my-form>
<!--		<imgBorder></imgBorder>-->
<!--		<img-border></img-border>-->
		<view>{{srcFromChild}}</view>
		<img-border :src="src1" @srcChange="handleSrcChange"></img-border>
		<img-border :src="src2" @srcChange="handleSrcChange"></img-border>
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view>
			<ul>
				<li v-for="(item,index) in list" :key="item.id">{{item.id}}----{{item.name}}-----{{index}}</li>
			</ul>
		</view>
		<view v-if="true">我不显示</view>
		<view v-show="false">3333</view>
		<view>{{money}}</view>
		<view>{{cnMoney}}</view>
		<view>
			<ul>
				<li v-for="item in filterList" :key="item.id">{{item.name}}</li>
			</ul>
		</view>
		<view>
			<button @click="handleClick(1)">点击我试试1</button>
			<button data-index="22" @click="handleClick2(2,$event)">点击我试试2</button>
		</view>
	</view>

</template>

<script>
	import imgBorder from "@/components/img-border";
	import myForm from "@/components/my-form";
	export default {
		components:{
			imgBorder,
			myForm
		},
		data() {
			return {
				title: 'Hello',
				list:[
					{id:1,name:'🍌'},
					{id:2,name:'🍋'},
					{id:3,name:''}
				],
				money:1000,
				srcFromChild:'',
				src1:'https://upload-images.jianshu.io/upload_images/13946786-da0300d5a8757975.png?imageMogr2/auto-orient/strip|imageView2/2/w/800/format/webp',
				src2:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586682431803&di=b548e38e9133e40be1e6d87104007025&imgtype=0&src=http%3A%2F%2Fku.90sjimg.com%2Felement_origin_min_pic%2F16%2F10%2F05%2F1857f4d4593b60d.jpg'
			}
		},
		computed:{
			cnMoney(){
				return "￥"+this.money
			},
			filterList(){
				return this.list.filter(v=>v.id <=1 )
			}
		},
		onLoad() {
			//页面加载完毕就会触发
			console.log(this.baseurl);
			console.log(getApp().globalData.base)
		},
		methods: {
			handleClick(arg){
				console.log(arg);
			},
			handleClick2(arg,event){
				console.log(arg);
				console.log(event);
				console.log(event.currentTarget.dataset.index);
			},
			handleSrcChange(e){
				console.log(e);
				this.srcFromChild=e
			}
		}
	}
</script>

<style>

</style>
