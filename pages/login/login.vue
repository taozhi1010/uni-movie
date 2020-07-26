<template>
	<view class="container">
		<view class="relative">
			<view class="login-from">
				<view class="login-input">
					<image class="login-input-icon" src="../../static/user.png"></image>
					<input v-model="username" class="login-input-text" placeholder-class="placeholder-class" placeholder="请输入用户名"/>
				</view>
				<view class="login-input">
					<image class="login-input-icon" src="../../static/key.png"></image>
					<input v-model="password" class="login-input-text" placeholder-class="placeholder-class" placeholder="请输入密码" password="true"/>
				</view>
				<button class="login btn" type="warn" @click="login">立即登陆</button>
				<button class="register btn" type="info" @click="register">免费注册</button>
				<view class="fotget" @click="forgetPassword">忘记密码？</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			forgetPassword(){
				uni.navigateTo({
				    url: '/pages/forgetPassword/forgetPassword'
				});
			},
			login(){
				uni.showLoading({
					title: '登陆中',
					mask: true
				});
				
				this.api.login(this.username, this.password)
				.then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.removeStorageSync('token');
						uni.setStorage({
						    key: 'token',
						    data: res.data.token,
						    success: function(){}
						});
						
						uni.reLaunch({
							url: '/pages/index/index?tabChecked=' + 1
						});
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			register(){
				uni.navigateTo({
				    url: '/pages/register/register'
				});
			}
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
</style>
