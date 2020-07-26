<template style="background-color: #F5F5F5;">
	<view class="container">

		<scroll-view class="content" scroll-y="true">
			<!-- 轮播图 -->
			<view class="swiper">
				<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner1.png" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner2.png" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner3.png" @error="imageError"></image>
					</swiper-item>
					<swiper-item>
						<image  class="swiper-item" mode="aspectFill" src="../../static/banner4.png" @error="imageError"></image>
					</swiper-item>
				</swiper>
			</view>
			
			<!-- 首页导航 -->
			<view class="nav-items">
				<view class="item" v-for="(item,index) in navItems" :key="index" @click="navItemsClick(item)">
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
					:speed="50"
					:text="notice.content"></uni-notice-bar>
			</view>

			<!-- 项目数据 -->
			<view class="project-list">
				<app-project v-for="(item, index) in data" :key="index" :data="item" :investClick="investClick" :addUserMoney="addUserMoney1"></app-project>
			</view>
			
			<app-bottom></app-bottom>
		</scroll-view>
		
		 <view class="down-bar-background" v-if="isShowDown"></view>
		<view class="down-bar-position" v-if="isShowDown">
			<view class="down-bar-content-left">
				<image src="../../static/downlogo.png" mode="aspectFit"></image>
				<view style="font-size: 25rpx;margin-left: 20rpx;display: flex;flex-direction: column;justify-content: space-between;">
					<view>雲創科技</view>
					<view>创您所享</view>
				</view>
			</view>
			<view class="down-bar-content-right" >
				<view style="display: flex;align-items: center;">
					<view style="margin-right: 50rpx;background-color: #234D7C;padding: 10rpx 15rpx;border-radius: 10rpx;" @click="downApp">下载app</view>
					<view style="font-size: 50rpx;display: flex;align-items: center;" @click="isShowDown = false">×</view>
				</view>
			</view>
		</view>
		
		<u-popup v-model="showShop" mode="center" border-radius="14">
			<view style="padding: 50rpx;">敬请期待</view>
		</u-popup>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
	let app;
	export default {
		components: {uniNoticeBar},
		props: {
			changeTab: {
				type: Function,
				default: function(){}
			},
		},
		data() {
			return {
				notice: '',
				showShop: false,
				isShowDown: true,
				// 轮播图属性
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				
				addUserMoney1: 0,
				loginStatus: false,
				token: '',
				
				// nav导航栏
				navItems: [
					{text: "每日签到", icon: "../../static/mrqd.png",
						login: function(){
							app.signIn()
						},
						unlogin: function(){
							uni.showToast({
								icon: 'none',
							    title: '请先登陆',
							    duration: 2000
							});
						}
					},
					{text: "积分商城", icon: "../../static/tzxm.png",
						login: function(){
							uni.navigateTo({
							    url: '/pages/jfshop/jfshop'
							});
						},
						unlogin: function(){
							uni.showToast({
								icon: 'none',
							    title: '请先登陆',
							    duration: 2000
							});
						}
					},
					{text: "我的投资", icon: "../../static/wdtz.png",
						login: function(){
							uni.navigateTo({
							    url: '/pages/investrecord/investrecord'
							});
						},
						unlogin: function(){
							uni.navigateTo({
							    url: '/pages/login/login'
							});
						},
					},
					{text: "资金记录", icon: "../../static/zjjl.png",
						login: function(){
							uni.navigateTo({
							    url: '/pages/capitalflow/capitalflow'
							});
						},
						unlogin: function(){
							uni.navigateTo({
							    url: '/pages/login/login'
							});
						}
					},
					{text: "零钱袋", icon: "../../static/zjjl.png",
						login: function(){
							uni.navigateTo({
							    url: '/pages/yuebao/yuebao'
							});
						},
						unlogin: function(){
							uni.navigateTo({
							    url: '/pages/login/login'
							});
						},
					},
					{text: "我要充值", icon: "../../static/wycz.png",
						login: function(){
							uni.navigateTo({
								url: '/pages/charge/charge'
							});
						},
						unlogin: function(){
							uni.navigateTo({
							    url: '/pages/login/login'
							});
						},
					},
					{text: "我要提现", icon: "../../static/wytx.png",
						login: function(){
							uni.navigateTo({
								url: '/pages/cashout/cashout'
							});
						},
						unlogin: function(){
							uni.navigateTo({
							    url: '/pages/login/login'
							});
						}
					},
					{text: "新手帮助", icon: "../../static/xsbz.png",
						login: function(){
							app.changeTab(4)
						},
						unlogin: function(){
							app.changeTab(4)
						}
					},
				],
				data: []
			}
		},
		methods: {
			addUserMoney(){
				this.api.addUserMoney().then(res => {
					//console.log("addUserMoney", res.data)
					if(res.code === "0"){
						this.addUserMoney1 = res.data
					}else{
						uni.showToast({
							icon: 'none',
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			toChat(){
				this.changeTab(5)
			},
			downApp(){
				let src = 'https://www.huox.net/app.php/6229'
				uni.navigateTo({
				    url: '/pages/webview/webview?src=' + src + '&showBottom=' + true
				});
			},
			signIn(){
				this.api.signIn().then(res => {
					if(res.code === "0"){
						uni.showToast({
						    title: '签到成功',
						    duration: 2000
						});
					}else{
						uni.showToast({
							icon: 'none',
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			navItemsClick(item){
				let isLogin = this.token !== ''  && this.token !== undefined
				 
				if(isLogin){
					 item.login()
				}else{
					 item.unlogin()
				}
			},
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
				this.changeTab(3)
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
			},
			notice1(){
				this.api.notice().then(res => {
					console.log(res)
					if(res.code === "0"){
						app.notice = res.data
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
			this.notice1()
			this.addUserMoney()
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

.down-bar-background{background-color: #000000;opacity: 0.5;position: fixed;left: 0;right: 0;bottom: 110rpx;height: 90rpx;}
.down-bar-position{position: fixed;left: 0;right: 0;bottom: 110rpx;display: flex;padding: 0 20rpx ;height: 90rpx;display: flex;color: white;align-items: center;justify-content: space-between}
.down-bar-content-left{display: flex;}
.down-bar-content-left >image{width: 75rpx;height: 75rpx;}
</style>
