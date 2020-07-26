<template>
	<view @click="itemClick(data)" class="user-operate" :class="{'user-operate-bottom': this.showBottomBorder}"
		:style="{
			padding: paddingTop + ' 30rpx',
		}"
		>
		<view class="user-operate-left">
			<image class="user-operate-left-icon" :src="data.icon" v-if="data.icon !== undefined && data.icon !== ''" :style="{'opacity':data.op?0.4:1}"></image>
			<view class="user-operate-left-title">{{data.title}}</view>
		</view>
		<view class="user-operate-right">
			<view class="user-operate-right-describe" 
				:style="{
					'color': describeColor,
					'font-size': describeSize
				}"
				>{{data.describe}}</view>
			<image class="user-operate-right-go" src="../../static/goimg.png" v-if="showGo"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Object,
				default: {}
			},
			itemClick: {
				type: Function,
				default: function(){}
			},
			showBottomBorder: {
				type: Boolean,
				default: true
			},
			showGo:{
				type: Boolean,
				default: true
			},
			paddingTop:{
				type: String,
				default: "40rpx"
			},
			borderBottomColor:{
				type: String,
				default: "#F3F3F3"
			},
			describeColor:{
				type: String,
				default: "#9EA0A5"
			},
			describeSize:{
				type: String,
				default: "30upx"
			}
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.user-operate{display: flex;justify-content: space-between;}
.user-operate-left{display: flex;align-items: center;}
.user-operate-left-icon{height: 45rpx;width: 45rpx;}
.user-operate-left-title{color: #3B424C;font-size: 35upx;margin-left: 20rpx;}
.user-operate-right{display: flex;align-items: center;}
.user-operate-right-describe{}
.user-operate-right-go{width: 30rpx;height: 30rpx;margin-left: 15rpx;}
.user-operate-bottom{border-bottom: 1rpx solid #F3F3F3;}
</style>
