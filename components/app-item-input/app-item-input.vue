<template>
	<view class="user-operate" :class="{'user-operate-bottom': this.showBottomBorder}"
		:style="{
			padding: paddingTop + ' 30rpx',
		}"
		>
		<view class="user-operate-left">
			<image class="user-operate-left-icon" :src="data.icon" v-if="data.icon !== undefined && data.icon !== ''"></image>
			<view class="user-operate-left-title">{{data.title}}</view>
		</view>
		<view class="user-operate-right">
			<input class="user-operate-input" :placeholder="data.placeholder" :type="type" v-model="payMoney"/> 
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
			type: {
				type: String,
				default: "text"
			},
			payMoney: {
				type: Number,
				default: 0
			},
			showBottomBorder: {
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
.user-operate-right-describe{font-size: 30upx;color: #9EA0A5;margin-right: 15rpx;}
.user-operate-right-go{width: 30rpx;height: 30rpx;}
.user-operate-bottom{border-bottom: 1rpx solid #F3F3F3;}
.user-operate-input{text-align: right;height: 100%;font-size: 30upx;}

input:focus{outline:none !important;background:none !important;}
</style>
