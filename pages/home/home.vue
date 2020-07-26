<template style="background-color: #F5F5F5;">
	<view class="container">
		<view class="topbar">
			<view class="topbar-center">
				<image class="topbar-center-image" mode="aspectFit" src="../../static/logo.png" @error="imageError"></image>
			</view>
<!-- 			<view class="topbar-right">
				<view style="color: red;font-size: 30upx;">进入会员区</view>
			</view> -->
<!-- 		<view class="topbar-left">
				123
			</view> -->
		</view>
		<scroll-view class="content" scroll-y="true">
			<!-- 轮播图 -->
			<view class="swiper">
				<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner2.jpg" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner1.jpg" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner3.jpg" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner4.jpg" @error="imageError"></image>
					</swiper-item>
				</swiper>
			</view>
			
			<!-- 首页导航 -->
			<view class="nav-items">
				<view class="item" v-for="(item,index) in navItems" :key="index" @click="toLogin">
					<image class="item-icon" mode="aspectFill" :src="item.icon"></image>
					<view class="item-text">{{item.text}}</view>
				</view>
			</view>
			
			<!-- 未登陆时显示 -->
			<view class="nologin" v-if="token===''">
				<button class="tologin" type="primary" @click="toLogin">登 陆</button>
				<button class="toregister" type="warn" @click="toRegister">注 册</button>
			</view>
			
			<!-- 登陆时显示 -->
			<view class="nologin" v-if="token!==''">
				<button class="tologin" type="primary"  style="margin-right: 0;" @click="toMe">进入个人账户</button>
			</view>
			
			<!-- 通告栏 -->
			<view class="notice-bar">
				<uni-notice-bar 
					showIcon="true" scrollable="true" single="true" 
					background-color="white"
					text="尊敬的新老会员，推荐朋友投资，通过您的推广代码注册，您推荐的朋友充值并成功投资项目，您可以得到5%的佣金奖励。比如您介绍充值10000元，您可得到提成500元。依此类推！"></uni-notice-bar>
			</view>

			<!-- 项目数据 -->
			<view class="project-list">
				<app-project v-for="(item, index) in data" :key="index" :data="item" :investClick="investClick"></app-project>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	let app;
	export default {
		components: {uniNoticeBar},
		data() {
			return {
				// 轮播图属性
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				loginStatus: false,
				token: '',
				
				// nav导航栏
				navItems: [
					{text: "每日签到", icon: "../../static/mrqd.png"},
					{text: "投资项目", icon: "../../static/tzxm.png"},
					{text: "我的投资", icon: "../../static/wdtz.png"},
					{text: "资金记录", icon: "../../static/zjjl.png"},
					{text: "会员等级", icon: "../../static/hydj.png"},
					{text: "我要充值", icon: "../../static/wycz.png"},
					{text: "我要提现", icon: "../../static/wytx.png"},
					{text: "新手帮助", icon: "../../static/xsbz.png"},
				],
				
				// 项目数据
				data: []
			}
		},
		methods: {
			changeIndicatorDots(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange(e) {
				this.interval = e.target.value
			},
			durationChange(e) {
				this.duration = e.target.value
			},
			imageError(){
				
			},
			investClick(item){
				uni.navigateTo({
				    url: '/pages/project/project?id=' + item.id
				});
			},
			toMe(){
				wx.switchTab({
					url: '/pages/me/me'
				})
			},
			toLogin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			toRegister(){
				uni.navigateTo({
				    url: '/pages/register/register'
				});
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
		onShow() {
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
			
			// uni.clearStorage()
		}
	}
</script>

<style>
.topbar{height: 100rpx;background-color: white;
border-bottom: 1rpx solid #dedede;position: relative;}
.topbar-center{height: 100rpx;width: 100%;display: flex;justify-content: center;align-items: center}
.topbar-center-image{height: 80rpx;}
.topbar-right{right: 0;height: 100rpx;position: absolute;top: 0;display: flex;justify-content: center;align-items: center;
padding: 0 30rpx;}
.topbar-left{left: 0;height: 100rpx;position: absolute;top: 0;display: flex;justify-content: center;align-items: center;
padding: 0 30rpx;}

.swiper{width: 100%;}
.swiper-item{width: 100%;height: 100%;}

.nav-items{display: flex;flex-wrap: wrap;padding-top: 10rpx;background-color: white;}
.item{flex: 0 0 25%;display: flex;flex-direction: column;justify-content: center;align-items: center;
padding: 20rpx 0;}
.item-icon{width: 75rpx; height: 75rpx;}
.item-text{text-align: center;margin-top: 15rpx;font-size: 30upx;}

.nologin{display: flex;padding: 10rpx 30rpx;background-color: white;}
.nologin >uni-button{font-size: 35upx;}
.tologin{background-color: #FF4D4D !important;flex: 1;margin-right: 40rpx;}
.toregister{background-color: #000 !important;flex: 1;}

.notice-bar{padding: 10rpx 15rpx;background-color: white;}

.project-list{display: flex;padding: 0 30rpx;flex-direction: column;background-color: white;padding-bottom: 15rpx;}
</style>
