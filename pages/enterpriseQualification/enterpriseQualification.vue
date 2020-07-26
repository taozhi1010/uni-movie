<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="title1">公司资质</view>
			
			<view class="title2 color1">营业执照</view>
			<image mode="widthFix" class="mimage" src="http://5t1i.cn/yyzz0706.jpg"></image>
			
		<!-- 	<view class="title2 color1">等保三级</view>
			<image mode="widthFix" class="mimage" src="http://vipsfm1.xhtzjr.com/uploadfile/yyzz.jpg"></image>
			
			<view class="title2 color1">开户许可证</view>
			<image mode="widthFix" class="mimage" src="http://vipsfm1.xhtzjr.com/uploadfile/yyzz.jpg"></image>
			
			<view class="title2 color1">机构信用代码证</view>
			<image mode="widthFix" class="mimage" src="http://vipsfm1.xhtzjr.com/uploadfile/yyzz.jpg"></image>
			
			<view class="title2 color1">机构代码证</view>
			<image mode="widthFix" class="mimage" src="http://vipsfm1.xhtzjr.com/uploadfile/yyzz.jpg"></image>
			 -->
			 <view class="text1">雲創科技 （香港） 有限公司成立于2011年10月6日</view>
			 
			 <view class="text1"> 英文名称：3C TECHNOLOGY CO. LIMITED</view>
			  <view class="text1">  董事长 ：周毅诚</view>
			 <view class="text1">  公司地址：香港特别行政区油尖旺区港威大夏-6座</view>
			
			 
			
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
.text1{color: rgb(91, 96, 103);font-size: 35upx;line-height: 60rpx; font-weight: blod;}
.color1{color: #ff6600;}
.mimage{width: 100%;margin-top: 40rpx;}
</style>
