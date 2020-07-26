<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="yuebao-info">
				<view class="yuebao-info-main">
					<view>总资产</view>
					
					<view class="money">{{data.sumMoney}}</view>
					
					<view class="dsc">暂无收益</view>
					
					<view class="time">每日收益统一发放时间	(00:00)</view>
				</view>
				<view class="shouyi">
					<view class="shouyi-item">
						<view class="shouyi-item-top">收益中金额</view>
						<view class="shouyi-item-bottom">{{data.sumMoney}}</view>
					</view>
					<view class="shouyi-item">
						<view class="shouyi-item-top">累计收益</view>
						<view class="shouyi-item-bottom">{{data.shouyi}}</view>
					</view>
					<view class="shouyi-item">
						<view class="shouyi-item-top">收益率</view>
						<view class="shouyi-item-bottom">{{data.shouyilv}}%</view>
					</view>
				</view>
			</view>
			
			<view class="btns">
				<view class="btn" style="margin-right: 15rpx;" @click="showOpModal(1)">转出</view>
				<view class="btn" @click="showOpModal(2)">转入</view>
			</view>
			
			<u-modal v-model="showOp"
				:mask-close-able="true" 
				:content-slot="true" 
				title="操作" 
				confirm-text="操作" 
				@confirm="toOp">
				<view class="slot-content">
					<u-cell-group>
						<u-field
							v-model="form.money"
							label="金额"
							placeholder="请填写金额">
						</u-field>
						<u-field
							v-model="form.moneyPassWord"
							label="密码"
							placeholder="请填写密码"
							:password="true">
						</u-field>
					</u-cell-group>
				</view>
			</u-modal>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showOp: false,
				data: {},
				type: 1,
				form: {
					moneyPassWord: '',
					money: ''
				}
			}
		},
		methods: {
			showOpModal(type){
				this.type = type
				this.form = {
					moneyPassWord: '',
					money: ''
				}
				this.showOp = true
			},
			toOp(){
				switch(this.type){
					case 1:
						this.outYueBao()
						break;
					case 2:
						this.inYueBao()
						break;
				}
			},
			outYueBao(){
				uni.showLoading({
				    title: '转出中'
				});
				this.api.yuebaoOut(this.form).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
							icon: 'none',
						    title: '转出成功',
						    duration: 2000
						});
						this.balanceDe()
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			inYueBao(){
				uni.showLoading({
				    title: '转入中'
				});
				this.api.yuebaoSave(this.form).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
							icon: 'none',
						    title: '转入成功',
						    duration: 2000
						});
						this.balanceDe()
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			balanceDe(){
				this.api.balanceDe().then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						this.data = res.data
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
			this.balanceDe()
		}
	}
</script>

<style>
.slot-content{padding: 30rpx 0;display: flex;flex-direction: column;}
.content{font-size: 30rpx;font-weight: bold;background-color: #F6F6F6;}
.yuebao-info{position: relative;}
.yuebao-info-main{display: flex;flex-direction: column;background-color: #F5E852;padding: 30rpx 0 80rpx;
align-items: center;}
.money{margin-top: 20rpx;font-size: 40rpx;}
.dsc{margin-top: 10rpx;background-color: #F8F081;padding: 5rpx 100rpx;font-size: 25rpx;border-radius: 20rpx;}
.time{font-size: 25rpx;margin-top: 20rpx;}
.shouyi{bottom: -90rpx;position: absolute;display: flex;justify-content: center;margin: 0 50rpx;background-color: white;width: calc(100% - 100rpx);border-radius: 10rpx;
font-weight: 100;}
.shouyi-item{text-align: center;display: flex;flex-direction: column;padding: 30rpx 0;flex: 1;font-size: 25rpx;}
.shouyi-item-bottom{margin-top: 15rpx;font-size: 30rpx;}
.btns{display: flex;justify-content: center;margin-top: 120rpx;padding: 0 50rpx;}
.btn{padding: 20rpx 55rpx;background-color: #EACC6B;border-radius: 10rpx;color: white;flex: 1;text-align: center;}
</style>
