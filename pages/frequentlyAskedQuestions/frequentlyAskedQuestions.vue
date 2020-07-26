<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="title1">常见问题</view>
			<view class="title1" style="color: #BD412D;">帮助中心</view>
			
			<view class="question">如何成为雲創科技用户？</view>
			<view class="answer">在雲創科技平台注册账号，即可成为雲創科技用户。</view>
					
			<view class="question">如何注册账号？</view>
			<view class="answer">登录雲創科技，点击官网右上角【注册】，系统会跳转至"用户注册"页面，根据页面提示信息填写注册信息，即可完成注册。</view>		
			
			<view class="question">收不到验证码该如何处理？</view>
			<view class="answer">(1)确认短信是否被手机软件拦截或过滤</view>
			<view class="answer">(2)确认手机是否能正常接收短信（信号问 题、欠费、停机等）</view>
			<view class="answer">(3)短信收发过程中可能会有延时，请耐心等候。</view>
			<view class="answer">(4)您可联系雲創科技在线客服务企业或者拨打全国服务统一热线，客服为您服务。</view>
			
			<view class="question">注册成功后用户名可以修改吗？</view>
			<view class="answer">用户名是作为用户名登录注册成功后不可以修改。</view>
		</scroll-view>
		<view class="bottom-btn" @click="back">返回</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
.title1{font-size: 45upx;color: #3B424C;font-weight: bold;}
.title2{text-align: center;font-size: 35upx;padding: 10px 0;}
.content{padding: 35rpx 35rpx 0;width: auto !important;}
.text{color: rgb(91, 96, 103);font-size: 30upx;line-height: 60rpx;}
.color1{color: #ff6600;}
.mimage{width: 100%;margin-top: 40rpx;}

.question{color: #BD412D;font-size: 35upx;padding: 10rpx 0;}
.answer{font-size: 30upx;line-height: 55rpx;}
</style>
