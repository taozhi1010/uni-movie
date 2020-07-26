<template>
	<view class="container">
		<view class="relative">
			<view class="login-from">
				<view class="login-input">
					<input v-model="username" class="login-input-text" placeholder-class="placeholder-class" placeholder="银行卡卡号"/>
				</view>
				<view class="login-input">
					123
				</view>
				<button class="login btn" type="warn" @click="login">添加银行卡</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: '',
				candidates: [
					'中国银行'
				],
				bank: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.relative{position: relative;background-color: #F5F5F5;height: 100%;}
.login-input{display: flex;background-color: white;align-items: center;padding: 10rpx 15rpx;border-radius: 15rpx;}
.login-input:not(:first-child){margin-top: 30rpx;}
.login-input-icon{width: 50rpx;height: 40rpx;}
.login-input-text{margin-left: 20rpx;padding: 10rpx;}
.login-from{display: flex;flex-direction: column;position: absolute;top: 20%;left: 0;right: 0;padding: 0 80rpx;font-size: 30upx;}
.btn{margin-top: 30rpx;font-size: 30upx;width: 100%;}
.fotget{text-align: right;font-size: 30upx;color: red;margin-top: 20rpx;}
.placeholder-class{font-size: 30upx;}

.uni-combox{flex: 1;margin-left: 20rpx;}
</style>
