<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="items">
				<u-cell-group>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="form.moneyPass"
						label="原支付密码"
						placeholder="请输入支付密码"
						label-width="180"
						:password="true"
					>
					</u-field>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="form.newMoneyPassword"
						label="新支付密码"
						placeholder="请输入新支付密码"
						label-width="180"
						:password="true"
					>
					</u-field>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="form.newMoneyPassword1"
						label="确认密码"
						placeholder="确认密码"
						label-width="180"
						:password="true"
					>
					</u-field>
				</u-cell-group>
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="changePay">完成修改</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: true,
				form: {
					moneyPass: '',
					newMoneyPassword: '',
					newMoneyPassword1: ''
				}
			}
		},
		methods: {
			changePay(){
				if(this.form.moneyPass === '' || this.form.newMoneyPassword === '' || this.form.newMoneyPassword1 === ''){
					uni.showToast({
					    title: '请填写密码',
					    duration: 2000
					});
					return;
				}
				
				if(this.form.newMoneyPassword !== this.form.newMoneyPassword1){
					uni.showToast({
					    title: '两次输入的密码不一致',
					    duration: 2000
					});
					return;
				}
				
				uni.showLoading({
					title: '修改中...',
					mask: true
				});
				
				console.log(this.form)
				
				this.api.moneyPassword(this.form).then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
							icon: 'none',
							mask: true,
						    title: '修改成功',
						    duration: 2000
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
			}
		},
		created(){
			
		}
	}
</script>

<style>
.items{display: flex;flex-direction: column;padding: 0;font-size: 30upx;}
</style>
