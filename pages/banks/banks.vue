<template>
	<view class="container" scroll-y="true">
		<scroll-view class="content" scroll-y="true">
			<view class="add-container" v-if="!status">
				<view class="bottom-btn" @click="addBank=true">新增银行卡</view>
			</view>
			<view class="bank" v-if="status">
				<image class="bank-img" mode="aspectFit" src="../../static/bank.png"></image>
				<view class="bank-info">
					<view>{{form.bankName}}</view>
					<view style="margin-top: 10rpx;">{{form.bankCode}}</view>
				</view>
			</view>
		</scroll-view>
	
		<u-modal v-model="addBank" 
			:mask-close-able="true" 
			:content-slot="true" 
			title="添加银行卡" 
			confirm-text="添加" 
			cancel-text="取消"
			:showCancelButton="true"
			@confirm="updateBank">
			<view class="slot-content">
				<u-cell-group>
					<u-field
						v-model="form.bankCity"
						label="持卡人姓名"
						placeholder="请填写持卡人姓名">
					</u-field>
					<u-field
						v-model="form.bankCode"
						label="银行卡号"
						placeholder="请填写银行卡号">
					</u-field>
					<u-field @click="show = true" v-model="form.bankName" 
						:disabled="true" label="银行名称" placeholder="请选择银行名称"
						right-icon="arrow-down-fill">
					</u-field>
				</u-cell-group>

			</view>
		</u-modal>
		
		<u-popup v-model="show" mode="bottom">
			<scroll-view style="background-color: white;overflow: scroll;height: 300px;" scroll-y="true">
				<view v-for="(item,index) in bankList" style="text-align: center;padding: 16px 0;" @click="bankListClick(item)">
					{{item.text}}
				</view>
			</scroll-view>
		</u-popup>
<!-- 		<uni-popup ref="popup" type="bottom">
			<view style="background-color: white;">
				<view v-for="(item,index) in bankList" style="text-align: center;padding: 16px 0;" @click="bankListClick(item)">
					{{item.text}}
				</view>
			</view>
		</uni-popup> -->
		<!-- <u-action-sheet @click="bankListClick" :list="bankList" v-model="show"></u-action-sheet> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: false,
				addBank: false,
				form: {
					bankName: '',
					bankCode: '',
				},
				bankList: [
					{text: '中国银行'},
					{text: '中国建设银行'},
					{text: '中国农业银行'},
					{text: '中国工商银行'},
					{text: '平安银行'},
					{text: '招商银行'},
					{text: '中国邮政储蓄银行'},
					{text: '中信银行'},
					{text: '中国民生银行'},
					{text: '中国光大银行'},
					{text: '华夏银行'}
				
				],
				show: false
			}
		},
		methods: {
			bankListClick(item){
				this.show=false
				this.form.bankName = item.text
			},
			getBank(){
				this.api.userBank().then(res => {
				    console.log(res.data)
					uni.hideLoading()
					
					if(res.code === "0"){
						if(res.data.status === 0){
							this.status = true
							this.form = res.data
						}else{
							this.status = false
						}
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
			},
			updateBank(){
				uni.showLoading({
					title: '添加银行卡',
					mask: true
				});
		
		
				this.api.updateBank(this.form)
				.then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '添加成功',
						    duration: 2000
						});
						this.getBank()
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
		created(){
			this.getBank()
		},
		mounted() {
			
		}
	}
</script>

<style>
.uni-popup{z-index: 99999;overflow-y: scroll;}
.slot-content{padding: 30rpx;display: flex;flex-direction: column;}
.bank{display: flex;flex-direction: row;padding: 20rpx;}
.bank-img{width: 150rpx;height: 100rpx;}
.bank-info{display: flex;flex-direction: column;justify-content: center;margin-left: 15rpx;}
.bank-info{font-size: 35upx;}

.add-container{padding: 30rpx;}
</style>
