<template>
	<view class="container">
		<view class="relative">
			<view class="login-from">
				<view class="login-input">
					<input v-model="mobile" class="login-input-text" type="number" placeholder-class="placeholder-class" placeholder="请输入手机号码"/>
				</view>
				
				<view class="login-input">
					<input v-model="code" class="login-input-text" placeholder-class="placeholder-class" placeholder="请输入验证码"/>
					<text style="width: 250rpx;color: orange;" @click="sendCode1" v-if="codeShow">发送验证码</text>
					<text style="width: 250rpx;color: grey;text-align: right;" v-if="!codeShow">{{showString}}</text>
				</view>
				
				<view class="login-input">
					<input v-model="password1" class="login-input-text" placeholder-class="placeholder-class" placeholder="请输入密码" password="true"/>
				</view>
				<view class="login-input">
					<input v-model="password2" class="login-input-text" placeholder-class="placeholder-class" placeholder="确认密码,两次密码输入必须一致" password="true"/>
				</view>
				<button class="login btn" type="warn" @click="register">修改密码</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) {
			this.pid = option.pid
		},
		data() {
			return {
				username: '',
				password1: '',
				password2: '',
				mobile: '',
				code: '',
				pid: '',
				isCheck: false,
				showString: '剩余60秒',
				codeShow: true
			}
		},
		methods: {
			sendCode(){
				this.codeShow = false
				this.showString = '剩余60秒'
				let app = this
				let num = 60
				let ref = setInterval(function() {
					num = num - 1
					app.showString = '剩余' + num + '秒'
					
					if(num === 0){
						app.codeShow = true
						clearInterval(ref);
					}
				},1000)
			},
			sendCode1(){
				if(this.mobile === undefined || this.mobile === ''){
					uni.showToast({
						icon: 'none',
					    title: '手机号码为空',
					    duration: 2000
					});
					return
				}
				
				if(this.mobile.length !== 11){
					uni.showToast({
						icon: 'none',
					    title: '手机号码位数不够',
					    duration: 2000
					});
					return
				}
				
				this.sendCode()
				
				this.api.sendUpdate(this.mobile).then(res => {
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '发送成功',
						    duration: 2000
						});
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
				.catch(e => {
					uni.hideLoading()
					console.log(e)
				})
			},
			checkboxChange(){
				this.isCheck = !this.isCheck
			},
			login(){
				uni.navigateTo({
					url: '/pages/login/login'
				})
			},
			toAgreen(){
				uni.navigateTo({
					url: '/pages/agree/agree'
				})
			},
			register(){
				uni.showLoading({
					title: '修改密码中'
				});
				
				if(this.password1 === undefined || this.password1 === ''){
					uni.showToast({
						icon: 'none',
					    title: '密码为空',
					    duration: 2000
					});
					return
				}
				
				if(this.password2 === undefined || this.password2 === ''){
					uni.showToast({
						icon: 'none',
					    title: '密码为空',
					    duration: 2000
					});
					return
				}
				
				if(this.password1 !== this.password2){
					uni.showToast({
						icon: 'none',
					    title: '两次输入的密码不一致',
					    duration: 2000
					});
					return
				}
				
				if(this.password1.length < 6){
					uni.showToast({
						icon: 'none',
					    title: '密码必须大于等于六位',
					    duration: 2000
					});
					return
				}
				
				this.api.updatePassSend(this.mobile, this.code, this.password1).then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '修改成功',
						    duration: 2000,
							mask: true
						});
						
						setTimeout(function(){
							uni.navigateBack()
						},2000)
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
				.catch(e => {
					uni.hideLoading()
					console.log(e)
				})
			}
		}
	}
</script>

<style>
.relative{position: relative;background-color: #F5F5F5;height: 100%;}
.login-input{display: flex;background-color: white;align-items: center;padding: 10rpx 15rpx;border-radius: 15rpx;}
.login-input:not(:first-child){margin-top: 30rpx;}
.login-input-icon{width: 50rpx;height: 50rpx;}
.login-input-text{margin-left: 20rpx;padding: 10rpx;}
.login-from{display: flex;flex-direction: column;position: absolute;top: 15%;left: 0;right: 0;padding: 0 80rpx;font-size: 30upx;}
.btn{margin-top: 30rpx;font-size: 30upx;width: 100%;}
.logintext{text-align: right;font-size: 30upx;margin-top: 20rpx;}
.tologin{color: red;}
.placeholder-class{font-size: 30upx;}
</style>
