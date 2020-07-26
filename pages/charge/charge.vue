<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			
			<!-- 账户余额与充值金额 -->
<!-- 			<app-item
				:data="balance"
				:showGo="false"
				paddingTop="25rpx"
				describeSize="35upx"
				describeColor="black"
				>
			</app-item>
			<app-item-input
				:data="charge"
				:showGo="false"
				paddingTop="25rpx"
				type="number"
				:payMoney="payMoney"
				>
			</app-item-input> -->
			<u-cell-group style="padding: 0 20rpx;">
				<u-field
					v-model="data.money"
					label="账户可用余额"
					input-align="right"
					:disabled="true"
					:field-style="{'font-size': '35upx'}"
					label-width="150rpx"
					>
				</u-field>
				<u-field
					v-model="payMoney"
					label="充值金额"
					placeholder="请填写充值金额"
					input-align="right"
					:field-style="{'font-size': '35upx'}"
					label-width="150rpx"
					>
				</u-field>
			</u-cell-group>

			<!-- 充值方式 -->
			<view class="charge-title">充值方式（点击下方更换充值方式）</view>
			<view class="charge-styles">
<!-- 				{icon: '../../static/weixin.png', type: 1, name: '微信扫码'},
				{icon: '../../static/yinhangqia.png', type: 2, name: '银行卡转账'},
				{icon: '../../static/zhifubao.png', type: 3, name: '支付宝'}, -->
				<view class="charge-style" @click="checkPayType(1)" v-if="chongzhiList.wx !== 0">
					<view class="charge-border" :class="{'charge-border-check': 1 === payType}">
						<image src="../../static/weixin.png"></image>
					</view>
				</view>
				
				<view class="charge-style" @click="checkPayType(2)" v-if="chongzhiList.bank !== 0">
					<view class="charge-border" :class="{'charge-border-check': 2 === payType}">
						<image src="../../static/yinhangqia.png"></image>
					</view>
				</view>
				
				<view class="charge-style" @click="checkPayType(3)" v-if="chongzhiList.alibaba !== 0">
					<view class="charge-border" :class="{'charge-border-check': 3 === payType}">
						<image src="../../static/zhifubao.png"></image>
					</view>
				</view>
			</view>
			
			<!-- 温馨提示 -->
			<view class="tips">
				<view>温馨提示</view>
				<view>1. 银行卡快捷充值：最低限额100,单笔限额<span class="red">50000</span>元，次数不限。</view>
				<view>2. 扫码充值：扫二维码充值，最低限额100,单笔限额<span class="red">5000</span>元，次数不限。</view>
				<!-- <view>3. 手机银行、网银、支付宝、最低限额100,微信转账 、赠送<span class="red">2%</span>彩金 </view> -->
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="openCharge">立即充值</view>
		<u-modal 
			v-model="isCharge"
			content="确定充值吗"
			:show-cancel-button="true"
			@confirm="chargeMoney">
			
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				money: '¥100元',
				isCharge: false,
				balance: {title: '账户可用余额', describe: '¥100元'},
				charge: {title: '充值金额', placeholder: '输入充值金额'},
				chargeStyle: [
					{
						icon: '../../static/weixin.png', click: function(){
							console.log(1)
						},
					}
				],
				pays: [
					{icon: '../../static/weixin.png', type: 1, name: '微信扫码'},
					{icon: '../../static/yinhangqia.png', type: 2, name: '银行卡转账'},
					{icon: '../../static/zhifubao.png', type: 3, name: '支付宝'},
				],
				payType: 1,
				payMoney: undefined,
				data: {},
				chongzhiList: {
					wx: 0,
					bank: 0,
					alibaba: 0
				}
			}
		},
		methods: {
			isShow(item){
				for(let key in this.chongzhiList){
					let obj = this.chongzhiList[key];
					if(obj.name === item.name){
						return true
					}
				}
				
				return false
			},
			checkPayType(payType){
				this.payType = payType
			},
			openCharge(){
				if(this.payMoney === undefined){
					uni.showToast({
						title: '请先填写充值金额',
						duration: 2000
					});
					return
				}
				
				// if(this.payMoney%100 !== 0){
				// 	uni.showToast({
				// 		title: '充值金额不为100的倍数',
				// 		duration: 2000
				// 	});
				// 	return
				// }
				
				if(this.payType === 2){
					if(this.payMoney > 50000){
						uni.showToast({
							title: '银行卡充值不可大于50000',
							duration: 2000
						});
						return
					}
				}
				
				if(this.payType === 1){
					if(this.payMoney > 5000){
						uni.showToast({
							title: '微信充值不可大于5000',
							duration: 2000
						});
						return
					}
				}
				
				this.isCharge = true
			},
			chargeMoney(){
				uni.navigateTo({
				    url: '/pages/chargeCode/chargeCode?payType=' + this.payType + '&payMoney=' + this.payMoney
				});
				// uni.showLoading({
				// 	title: '充值中',
				// 	mask: true
				// });
				
				// let form = {
				// 	type: this.payType,
				// 	money: this.payMoney
				// }
				// this.api.recharge(form).then(res => {
				// 	console.log(res)
				// 	uni.hideLoading()
				// 	if(res.code === "0"){
				// 		uni.navigateTo({
				// 		    url: '/pages/chargeCode/chargeCode?payType=' + this.payType + '&payMoney' + this.payMoney
				// 		});
				// 	}else{
				// 		uni.showToast({
				// 			title: res.msg,
				// 			duration: 2000
				// 		});
				// 	}
				// })
			},
			getChargeType(){
				this.api.getChargeType().then(res => {
					console.log(res)
					if(res.code === "0"){
						this.chongzhiList = res.data
					}else{
						uni.showToast({
							title: res.msg,
							duration: 2000
						});
					}
				})
			},
			getUserCore(){
				this.api.userCore().then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.data = res.data
						this.data.money = '¥' + this.data.money + '元'
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
			this.getChargeType()
			this.getUserCore()
		}
	}
</script>

<style>
.bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: rgb(216, 30, 6);color: white;}
	
.charge-styles{display: flex;padding: 0 45rpx;flex-wrap: wrap;margin: -2.5%;}
.charge-title{font-size: 35upx;padding: 30rpx 45rpx;}
.charge-style{flex: 0 0 20%;display: flex;justify-content: center;align-items: center;padding: 30rpx 0;padding: 2.5%;}
.charge-style image{height: 80rpx;width: 80rpx;}
.charge-border{display: flex;justify-content: center;align-items: center;border: 1rpx solid #dedede;padding: 20rpx;
flex: 1;}
.charge-border-check{border: 5rpx solid #FF721F;}

.red{color: red;}
.tips{display: flex;flex-direction: column;padding: 0 45rpx;margin-top: 30rpx;font-size: 30upx;}
.tips >view{margin-top: 20rpx;}

.u-field{font-size: 35upx;}
</style>
