<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<!-- 项目基本信息 -->
			<view class="project-info">
				<view class="project-title">{{projectData.title}}</view>
				<view class="project-data">
					可投{{data.money}}元
					<span>|</span>
					期限{{projectData.cycle}}个自然日
					<span>|</span>
					日化{{projectData.profit}}%
				</view>
			</view>
			
			<!-- 支付方式 -->
			<view class="pay-style">
				<view class="pay-style-left">选择支付方式</view>
				<view class="pay-style-right" @click="toCharge">
					<view>充值</view>
				</view>
			</view>
			
			<!-- 账户余额与起投金额 -->
			<view class="balance">
				<view class="value1">
					账户余额：<span>{{data.money}}</span>元
				</view>
				<view class="value2">
					起投金额：<span>{{projectData.moneyUser}}</span>元 
					<!-- 加一次为<span>1</span>元 -->
				</view>
			</view>
			
			<!-- 投资金额 -->
			<view class="investment">
				<view class="investment-top">
					<view class="investment-sign">￥</view>
					<input v-model="form.money" type="number" class="investment-input" placeholder="输入金额为1的整数倍" placeholder-style="font-size:16px;"/>
					<view class="investment-all" @click="invest">全投</view>
				</view>
				<!-- 预期总收益 -->
				<view class="prospective-yield">
					预期总收益(元)：<span class="red">{{prospectiveYield}}元</span>
				</view>
			</view>

		</scroll-view>
		
		<view class="xieyi-content" v-if="checkAgree">
			<view style="text-align: center;padding: 25rpx;background-color: #5F89E8;color: white;">相关协议</view>
			<view style="text-align: center;display: flex;justify-content: space-between;padding: 30rpx 20px;" @click="toXieyi">
				<view>《电子合同》</view>
				<image src="../../static/right.png" style="width: 30rpx;height: 30rpx;"></image>
			</view>
		</view>
		
		<view class="xieyi" v-if="checkAgree">
			<view class="xieyi-btn" @click="changeAgree(true)">取消</view>
			<view class="xieyi-btn xieyi-btn-color" @click="changeAgree(false)">同意</view>
		</view>
		
		<view class="bottom-btn" @click="checkAgree = true" v-if="!checkAgree">支付</view>
		
		<u-modal v-model="showPay"
			:mask-close-able="true" 
			:content-slot="true" 
			title="支付" 
			confirm-text="支付" 
			@confirm="toPay">
			<view class="slot-content">
				<u-cell-group>
					<u-field
						v-model="form.moneyPassword"
						label="密码"
						placeholder="请填写密码"
						:password="true">
					</u-field>
				</u-cell-group>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				checkAgree: false,
				form: {
					money: '',
					moneyPassword: ''
				},
				data: {
					money: 0.00,
					tobMoney: 0.00,
					interest: 0.00,
					sumMoney: 0.00,
					level: 0,
				},
				projectData: {},
				prospectiveYield: 0,
				showPay: false
			}
		},
		onLoad: function (option) {
			this.form.proectId = option.id
			
		},
		methods: {
			changeAgree(value){
				this.checkAgree = false
				if(!value){
					this.showPay = true
				}
			},
			toXieyi(){
				uni.navigateTo({
				    url: '/pages/Xieyi/Xieyi'
				});
			},
			toCharge(){
				uni.navigateTo({
				    url: '/pages/charge/charge'
				});
			},
			projectDetails(){
				this.api.projectDetails(this.form.proectId).then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.projectData = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			invest(){
				this.form.money = this.data.money
			},
			getUserCore(){
				this.api.userCore().then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.data = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			toPay(){
				if(this.form.money === ''){
					uni.showToast({
						title: '请填写金额',
						mask: true
					})
					return
				}
				
				if(this.form.money < this.projectData.moneyUser){
					uni.showToast({
						title: '未超过起投金额',
						mask: true
					})
					return
				}
				
				if(this.form.moneyPassword === ''){
					uni.showToast({
						title: '请填写密码',
						mask: true
					})
					return
				}
				uni.showLoading({
					title: '支付中...',
					mask: true
				});
				
				this.api.pajectUserSave(this.form).then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '支付成功',
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
					console.log(e)
					uni.hideLoading()
					uni.showToast({
					    title: '请求错误',
					    duration: 2000
					});
				})

			}
		},
		watch:{
			form: {
				handler(newName, oldName) {
					var value = newName.money * this.projectData.profit/100 * parseInt(this.projectData.cycle);
					this.prospectiveYield = value.toFixed(2)
				},
				deep: true
			}
		},
		created(){
			this.getUserCore()
			this.projectDetails()
		}
	}
</script>

<style>
.slot-content{padding: 30rpx;display: flex;flex-direction: column;}
.bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: linear-gradient(-269deg, #FF9906 0%, #FFC606 94%);color: white;}
.container{background-color: #F5F5F5;}
	
.project-info{display: flex;flex-direction: column;padding: 35rpx;font-size: 35upx;background-color: #57C59E;color: white;}
.project-title{display: flex;justify-content: flex-start;}
.project-data{font-size: 30upx;justify-content: flex-start;display: flex;margin-top: 10rpx;}
.project-data >span{color: #9de2c9;margin: 0 20rpx;display: flex;align-items: center;justify-content: center;}

.pay-style{display: flex;justify-content: space-between;font-size: 30upx;padding: 20rpx 30rpx;border-bottom: 1rpx solid #dedede;
background-color: white;}
.pay-style-left{color: #888;}
.pay-style-right{color: #4a977b;}

.balance{padding: 30rpx; font-size: 35upx;color: #666;background-color: white;}
.value1{padding: 10rpx 0;}
.value1 >span{color: #75c2a1;}
.value2{padding: 10rpx 0;}
.value2 >span{color: #ED702E;}

.investment{padding: 35rpx 50rpx;margin-top: 20rpx;background-color: white;display: flex;flex-direction: column;}
.investment-top{display: flex;justify-content: center;align-items: center;}
.investment-sign{font-size: 100upx;}
.investment-input{font-size: 100upx;text-align: center;border-bottom: 1rpx solid #dedede;padding: 0 30rpx;}
.investment-all{width: 140rpx;padding: 5rpx 10rpx;text-align: center;border: 1rpx solid #57c59e;color: #57c59e;font-size: 30upx;
margin-left: 30rpx;border-radius: 40rpx;}
.prospective-yield{text-align: center;font-size: 30upx;margin-top: 30rpx;}

.red{color: red;}
.xieyi{display: flex;justify-content: center;align-items: center;position: fixed;bottom: 0;
left: 0;right: 0;background-color: white;border-top: 1rpx solid #dedede;}
.xieyi-btn{flex: 1;display: flex;justify-content: center;align-items: center;height: 100rpx;font-size: 30rpx];}
.xieyi-btn-color{background-color: #5F89E8;color: white;}
.xieyi-content{position: fixed;bottom: 100rpx;background-color: white;left: 0;right: 0;}
/* .bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: rgb(216, 30, 6);color: white;} */
</style>
