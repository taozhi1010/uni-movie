<template>
	<view class="project-card">
		<!-- 项目名 -->
		<view class="title">
			<!-- <image class="title-icon" src="../../static/bao.png"></image> -->
			<view class="title-text">商品名称：{{data.name}}</view>
		</view>
		
		<!-- 项目配图 -->
		<view class="project-image" v-if="showImage">
			<image class="image" :src="imgUrl"></image>
			<!-- <view class="label">注册即送{{addUserMoney}}现金</view> -->
		</view>
		
		<!-- 项目信息 -->
		<view class="project-info">
			<!-- 项目简略信息 -->
<!-- 			<view class="project-resume">
				<view class="resume-border">
					起投金额
					<span class="resume-data">{{data.moneyUser}}元</span>
					，每日可赚
					<span class="resume-data">{{data.profitex/100}}元</span>
				</view>
			</view> -->
			
			<!-- 项目详情 -->
			<view class="project-details">
				<view class="project-details-item">
					<view class="project-details-item-label">所需积分</view>
					<view class="project-details-item-data"><span class="data-color">{{data.moneyComm}}</span></view>
				</view>
				<view class="project-details-item">
					<view class="project-details-item-label">商品名称</view>
					<view class="project-details-item-data"><span class="data-color">{{data.name}}</span></view>
				</view>
				<view class="project-details-item">
					<view class="project-details-item-label">剩余数量</view>
					<view class="project-details-item-data"><span class="data-color">{{data.number}}</span></view>
				</view>
			</view>
			
			<!-- 项目规模 -->
			<view class="project-scale">商品描述：{{data.mbark}}</view>
			<view class="project-scale2">
				<view class="progress" ></view>
				<!-- <view class="project-scale-percent">{{data.speeof}}%</view> -->
				<button class="toinvest" type="primary" @click="investClick(data)">立即兑换</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {baseURL} from '../../http/http.js'
	
	export default {
		props: {
		    data: {
				type: Object,
				default: {}
			},
			addUserMoney: {
				type: Number,
				default: 0
			},
			showImage: {
				type: Boolean,
				default: true
			},
			investClick: {
				type: Function,
				default: function(){}
			}
		},
		data() {
			return {
				imgUrl: 'http://103.39.16.122:80/' + this.data.img
			};
		}
	}
</script>

<style>
.project-card{background-color: white;flex: 1;margin-top: 20rpx;border-radius: 5rpx;
border: 1rpx solid #C9C8CD;padding-bottom: 20rpx;border-radius: 30rpx;}
.title{display: flex;font-size: 30upx;padding: 20rpx;}
.title-icon{width: 40rpx;height: 40rpx;}
.title-text{margin-left: 15rpx;}
.project-image{width: 100%;position: relative;height: 350rpx;}
.project-image .image{width: 100%;height: 100%;position: absolute;}
.project-image .label{right: 0;position: absolute;font-size: 30upx;top: 20rpx;background-color: red;
color: white;border-radius: 10rpx;padding: 10rpx;}
.project-info{display: flex;flex-direction: column;}
.project-resume{color: #5DA83B;width: 100%;padding: 20rpx 0;font-size: 25upx;display: flex;justify-content: center;}
.resume-border{width: auto;padding: 10rpx 20rpx;border: 1rpx dashed #5DA83B;border-radius: 20rpx;}
.resume-data{color: #EA3423;}
.project-details{display: flex;margin-top: 30rpx;}
.project-details-item{flex: 0 0 33.33%;font-size: 25upx;display: flex;flex-direction: column;align-items: center;}
.project-details-item .data-color{color: #EA6637;font-size: 35upx;}
.project-details-item-label{margin-top: 5rpx;}
.project-scale{margin-top: 25rpx;font-size: 30rpx;padding: 0 65rpx;}
.project-scale2{padding: 0 35rpx 0 45rpx;margin-top: 20rpx;display: flex;}
.progress{flex: 1;}
.project-scale-percent{color: #64AC44;font-size: 30upx;padding: 0 30rpx;display: flex;align-items: center;}
.toinvest{font-size: 25upx;}
</style>
