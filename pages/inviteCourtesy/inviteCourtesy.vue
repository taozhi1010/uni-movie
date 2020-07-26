<template>
	<view class="container">
		<view class="topbar">
			<view class="topbar-center">
				<!-- <image class="topbar-center-image" mode="aspectFit" src="../../static/logo.png" @error="imageError"></image> -->
			</view>
		<!-- 			<view class="topbar-right">
						<view style="color: red;font-size: 30upx;">进入会员区</view>
					</view> -->
			<view class="topbar-left">
				<image src="../../static/back.png" style="width: 40rpx;height: 40rpx;" @click="back"></image>
			</view>
		</view>
		<scroll-view class="content" scroll-y="true">
			<view class="top-content">
				<image style="width: 100%;" src="../../static/xbanner.png" mode="widthFix"></image>
				<view class="top-content-data">
					<view class="data">
						<view class="value">{{data1.userCount}}</view>
						<view class="label">邀请人数(人)</view>
					</view>
					
					<view class="data">
						<!-- <view class="value">0</view> -->
						<!-- <view class="label">奖励红包(个)</view> -->
					</view>
					
					<view class="data">
						<view class="value">{{data1.reward}}</view>
						<view class="label">奖励现金(元)</view>
					</view>
				</view>
			</view>
			<view class="rewards">
			<!-- 	<view class="card">
				 	<view class="title-position">
						<view class="title-text">奖励1：好友充值奖励</view>
						<image class="title-img" src="../../static/title1.png" mode="aspectFit"></image>
					</view> 
					
					<view class="card-content">
						<image class="gift" src="../../static/gift1.png" mode="aspectFit"></image>
						<view class="info1">
							单笔充值最高送
							<span class="span1">5%</span>
							充值佣金
						</view>
						<view class="info2">好友注册90天内，充值并投资（不含新手）</view>
						<view class="info2" style="margin-top: 0;">
							即可获得
							<span class="span2">5%</span>
							佣金奖励
						</view>
					</view>
				</view> -->
				
				<view class="card">
					<view class="title-position">
						<view class="title-text">奖励1：好友投资奖励</view>
						<image class="title-img" src="../../static/title1.png" mode="aspectFit"></image>
					</view>
					
					<view class="card-content">
						<image class="gift2" src="../../static/gift2.png" mode="aspectFit"></image>
						<view class="info3">好友投资项目返利</view>
						<view class="info2">好友投资返利项目即可获得好友投资额百分比奖励</view>

					</view>
				</view>
				
		<!-- 		<view class="card">
					<view class="title-position">
						<view class="title-text">奖励3：好友投资送红包</view>
						<image class="title-img" src="../../static/title2.png" mode="aspectFit"></image>
					</view>
					
					<view class="card-content">
						<image class="gift2" src="../../static/gift3.png" mode="aspectFit"></image>
						<view class="info1">
							好友投资额达标送红包
						</view>
						<view class="info2">好友注册180天内，好友投资额达标您即获得投资大礼包</view>
						<view class="info2" style="margin-top: 0;">（不含新手项目）</view>
					</view>
				</view> -->
				
				<!-- <view class="hdsm" @click="showInfo=true">
					<view class="hdsm-btn">
						<image class="hdsm-btn-img" src="../../static/illustrate_ico.png"></image>
						<view class="hdsm-btn-text">活动说明</view>
					</view>
				</view> -->
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="openInvite">发起邀请</view>
		
		<u-popup v-model="showInfo" mode="center" border-radius="14">
			<view style="padding: 50rpx 40rpx;width: 600rpx;">
				<view style="color: #F19E3A;font-size: 35rpx;text-align: center;">活动说明</view>
				<view style="margin-top: 40rpx;font-size: 25rpx;color: #777;line-height: 45rpx;">1、推荐介绍人可计提推荐充值投资佣金<span style="color: red;">10%</span></view>
				<view style="font-size: 25rpx;color: #777;line-height: 45rpx;">2、您邀请的好友注册成功后，好友即可获得新人大礼包。</view>
				<view style="font-size: 25rpx;color: #777;line-height: 45rpx;">2、您邀请的好友注册成功后，好友即可获得新人大礼包。</view>
				<view style="font-size: 25rpx;color: #777;line-height: 45rpx;">3、手机用户可先截图保存二维码，然后把你保存在手机的二维码图片发送给你的朋友注册即可得到丰厚的奖励和佣金！</view>
				<view style="font-size: 25rpx;color: #777;line-height: 45rpx;">4、公司根据运营需求，享有对该推荐制度调整的权利，如规则有变更则以更新规则为准，平台保留对 该推荐活动的最终解释权。</view>
				<view style="font-size: 45rpx;text-align: center;margin-top: 30rpx;color: #C4C4C4;" @click="showInfo=false">x</view>
			</view>
		</u-popup>
		
		<u-popup v-model="showInvite" mode="bottom">
			<view class="popup">
				<view class="popup-title">推荐码邀请</view>
				<view class="popup-code">{{phone}}</view>
				<view style="margin-top: 50rpx;font-size: 30rpx;">面对面邀请</view>
				<image :src="'http://103.39.16.122:80/' + codeImage" style="width: 400rpx;height: 400rpx;margin: 20rpx 0 70rpx;"></image>
				<image @click="showInvite=false" src="../../static/close_bg.png" mode="aspectFit" style="height: 35rpx;width: 35rpx;"></image>
			
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data1: {},
				showInvite: false,
				showInfo: false,
				codeImage: '',
				phone: ''
			}
		},
		methods: {
			openInvite(){
				this.getCode()
				this.showInvite = true
			},
			back(){
				uni.navigateBack()
			},
			dsc(){
				
			},
			selectData(){
				this.api.userInvitation().then(res => {
					if(res.code === "0"){
						this.data1 = res.data
						console.log(res)
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			getCode(){
				this.api.getCode().then(res => {
					if(res.code === "0"){
						this.codeImage = res.data.codeimg
						this.phone = res.data.userName
						console.log(res)
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			}
		},
		created() {
			this.selectData()
		}
	}
</script>

<style>
.container{background-color: #ffedc1;}
.top-content{position: relative;}
.top-content-data{position: absolute;bottom: 120rpx;left: 0;right: 0;display: flex;justify-content: center;align-items: center;}
.rewards{display: flex;flex-direction: column;}
.top-content-data{color: white;font-size: 25rpx;font-weight: bold;padding: 0 40rpx;}
.data{flex: 1;display: flex;align-items: center;flex-direction: column;justify-content: center;}
.value{font-size: 45rpx;}
.label{margin-top: 5rpx;}

.card{background-color: white;margin: 30rpx;padding-bottom: 40rpx;
box-shadow: 0.0225rem 0.0425rem 0 #f1d497;border-radius: 10rpx;position: relative;}
.card-content{padding: 30rpx;display: flex;flex-direction: column;}
.title-position{position: absolute;width: 100%;}
.title{top: 10rpx;position: relative;width: 100%;}
.title-img{height: 70rpx;position: absolute;top: -25rpx;width: 100%;}
.title-text{height: 70rpx;position: absolute;top: -25rpx;text-align: center;width: 100%;z-index: 999;
color: white;line-height: 70rpx;font-size: 30rpx;}
.gift{width: calc(100% - 40rpx);margin-top: 10rpx;padding: 0 20rpx;}
.gift2{width: calc(100% - 150rpx);margin-top: 10rpx;padding: 0 75rpx;}

.info1{text-align: center;font-size: 40rpx;}
.span1{color: #ED7931;font-size: 60rpx;}
.info2{text-align: center;font-size: 25rpx;margin-top: 15rpx;}
.span2{color: #ED7931;}
.info3{font-size: 60rpx;text-align: center;}

.hdsm{display: flex;justify-content: center;align-items: center;padding: 40rpx 0 60rpx;
font-size: 35rpx;color: #EE7C3A;}
.hdsm-btn{padding: 20rpx 60rpx;border-radius: 45rpx;background-color: white;border: 1rpx solid #f2d3ab;display: flex;
align-items: center;justify-content: center;}
.hdsm-btn-img{width: 30rpx;height: 30rpx;margin-right: 20rpx;}
.bottom-btn{background-color: #F19E3A;font-size: 35rpx;}

.popup{padding: 35rpx 0;display: flex;flex-direction: column;text-align: center;justify-content: center;align-items: center;}
.popup-title{font-size: 35rpx;}
.popup-code{font-size: 30rpx;margin-top: 20rpx;}
</style>
