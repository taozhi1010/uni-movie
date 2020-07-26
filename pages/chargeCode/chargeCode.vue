<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="top2">
				<!-- 请联系在线客服获取入款账户，谢谢！银行入款赠送2%入款奖励 -->
<!-- 			{{describe1}} -->
			请联系在线客服获取入款账户，谢谢！
			</view>
			<view class="top">
				转账方式：复制我司财务收款账户，使用手机银行，网银或微信支付宝转账到银行卡功能转账充值
			</view>
			
			
			<view class="top2">
				<!-- 请联系在线客服获取入款账户，谢谢！银行入款赠送2%入款奖励 -->
			<!-- {{describe1}} -->
			</view>
			
			<image v-if="payType==='3'" mode="aspectFit" :src="'http://103.39.16.122:80/' + data[0].url" style="width: 100%;"></image>
			<view class="bottom" v-if="payType==='2'"> 
					{{data[2].url}}
			</view>
			<!-- <image v-if="payType==='2'" mode="aspectFit" :src="'http://103.39.16.122:80/' + data[1].url" style="width: 100%;"></image> -->
			<image v-if="payType==='1'" mode="aspectFit" :src="'http://103.39.16.122:80/' + data[1].url" style="width: 100%;"></image>
			
			<view class="bottom"> 
				提示：转账成功后,请联系在线客服，提供您的会员账号、充值金额、订单号、存款人帐号、充值时间；方便财务及时为您添加资金
			</view>
			<view class="bottom2">
				注意：会员每笔转帐支付请提交一次
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="chargeMoney">点击完成	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				payType: 1,
				payMoney: 0,
				data: [
					{},
					{},
					{},
				],
				describe1: ''
			}
		},
		onLoad: function (option) {
			this.payType = option.payType
			this.payMoney = option.payMoney
		},
		methods: {
			chargeMoney(){
				uni.showLoading({
					title: '充值中',
					mask: true
				})
				
				let form = {
					type: this.payType,
					money: this.payMoney
				}
				this.api.recharge(form).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){						
						uni.showToast({
							icon: 'none',
							title: '提交成功',
							duration: 2000,
							mask: true
						});
						setTimeout(function(){
							uni.reLaunch({
								url: '/pages/index/index?tabChecked=' + 3
							});
						},2000)
					}else{
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
					}
				})
			},
			back(){
				uni.reLaunch({
					url: '/pages/index/index?tabChecked=' + 3
				});
			},
			rechargeCode(){
				this.api.rechargeCode().then(res => {
					console.log(res)
					if(res.code === "0"){
						this.data = res.data.chongzhiList
					}else{
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
					}
				})
			},
			describe(){
				this.api.describe().then(res => {
					console.log(res)
					if(res.code === "0"){
						this.describe1 = res.data.describe
					}else{
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
					}
				})
			},
		},
		created(){
			this.rechargeCode()
			this.describe()
		}
	}
</script>

<style>
	.container{padding: 30rpx;}
	.top2{color: red;margin-top: 20rpx;}
	.bottom{margin-top: 20rpx;}
	.bottom2{margin-top: 20rpx;}
</style>
