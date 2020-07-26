<template>
	<view class="main">
		<view class="pages">
			<app-home v-if="tabChecked===1" :data="data" :changeTab="changeTab"></app-home>
			<app-invest v-if="tabChecked===2" :data="data" :changeTab="changeTab"></app-invest>
			<app-me v-if="tabChecked===3" :data="data" :changeTab="changeTab"></app-me>
			<app-about v-if="tabChecked===4" :data="data" :changeTab="changeTab"></app-about>
			<app-customerService v-if="tabChecked===5" :data="data" :changeTab="changeTab"></app-customerService>
		</view>
		
		<view class="tabs">
			<view class="tab" :class="{'tabCheck':tabChecked === item.type}" v-for="(item, index) in tabs" :key="index" @click="changeTab(item.type)">
				<image :src="tabChecked === item.type?item.selected:item.unselected" ></image>
				<view style="margin-top: 5rpx;">{{item.text}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	let app;
	export default {
		onLoad: function (option) {
			if(option.tabChecked !== undefined){
				this.tabChecked = parseInt(option.tabChecked)
			}
			
			this.noToken = option.noToken
		},
		data() {
			return {
				noToken: false,
				id: 1,
				// 1.首页 2.投资 3.个人 4.信息 5.客户服务
				tabChecked: 1,
				data: [],
				tabs: [
					{text: '首页', type: 1, unselected: '../../static/home.png', selected: '../../static/home-selected.png'},
					{text: '5G项目', type: 2, unselected: '../../static/invest.png', selected: '../../static/invest-selected.png'},
					{text: '个人中心', type: 3, unselected: '../../static/me.png', selected: '../../static/me-selected.png'},
					{text: '帮助', type: 4, unselected: '../../static/about.png', selected: '../../static/about-selected.png'},
					{text: '在线客服', type: 5, unselected: '../../static/kefu.png', selected: '../../static/kefu-selected.png'},
				]
			}
		},
		methods: {
			changeTab(type, noToken){
				if(type === 5){
					uni.navigateTo({
					    url: '/pages/customerService/customerService'
					});
					return;
				}
				
				
				if(noToken){
					this.token = ''
				}
				
				if(this.noToken){
					this.token = ''
				}
				
				if(this.token === undefined || this.token === ''){
					if(type === 3){
						uni.navigateTo({
						    url: '/pages/login/login'
						});
						return;
					}
				}
				
				if(type !== undefined){
					this.tabChecked = type
				}
			},
			projectList(){
				this.api.projectList(0, 10).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						app.data = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			}
		},
		created(){
			app = this
			this.projectList()
			uni.getStorage({
				key: 'token',
				success: function (res) {
					app.token = res.data
				},
				fail: function(){
					app.token = ''
				}
			})
		}
	}
</script>

<style>
.main{display: flex;flex-direction: column;position: relative;padding-bottom: 110rpx;}
.pages{flex: 1;}
.tabs{display: flex;height: 110rpx;position: fixed;bottom: 0;left: 0;right: 0;
background-color: white;border-top: 1rpx solid #dedede}
.tab{flex: 1;display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 25rpx;}
.tab >image{width: 50rpx;height: 50rpx;}
.tabCheck{color: #C63520}

</style>
