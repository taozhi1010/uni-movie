<template>
	<view class="container" scroll-y="true">
		<scroll-view class="content">
			<view class="item">
				<view class="item-label">所属银行</view>
				<view class="item-value">{{bank.bankName}}({{formatBankCode(bank.bankCode)}})</view>
			</view>
			<view class="item">
				<view class="item-label">可提现额度</view>
				<view class="item-value">￥{{data.money}} 元</view>
			</view>
			
			<view class="item">
				<view class="item-label">提现金额</view>
				<input type="number" v-model="money" class="item-value" placeholder="输入提现金额"/>
			</view>
			
				<view class="item-value2">*提现收取1%手续费</view>
			<u-modal 
				v-model="showCashout"
				:mask-close-able="true" 
				:content-slot="true" 
				title="提现" 
				confirm-text="提现" 
				@confirm="cashout">
				<view class="slot-content">
					<u-cell-group>
						<u-field
							v-model="moneyPassWord"
							label="密码"
							placeholder="请填写密码"
							:password="true">
						</u-field>
					</u-cell-group>
				</view>
			</u-modal>
		</scroll-view>
		<view class="bottom-btn" @click="showCashout=true">提现</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				form: {},
				data: {
					money: 0
				},
				showCashout: false,
				moneyPassWord: '',
				money: undefined,
				bank: {}
			}
		},
		methods: {
			formatBankCode(bankCode){
				if(bankCode.length < 4){
					return backCode
				}
				return bankCode.substr(-4)
			},
			cashout(){
				// if(this.money % 100 !== 0){
				// 	uni.showToast({
				// 		title: '充值金额不为100的倍数',
				// 		duration: 2000
				// 	});
				// 	return
				// }
				
				if(this.moneyPassWord === ''){
					uni.showToast({
						title: '请输入密码',
						duration: 2000
					});
					return
				}
				
				let form = {
					moneyPassWord: this.moneyPassWord,
					money: this.money
				}
				
				console.log(form)
				
				this.api.cashout(form).then(res => {
					console.log(res)
					if(res.code === "0"){
						uni.showToast({
						    title: '提现成功',
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
			getBank(){
				this.api.userBank().then(res => {
				    console.log(res.data)
					uni.hideLoading()
					
					if(res.code === "0"){
						this.bank = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
		},
		created() {
			this.getUserCore()
			this.getBank()
		}
	}
</script>

<style>
	.slot-content{padding: 30rpx;display: flex;flex-direction: column;}
.title1{font-size: 45upx;color: #3B424C;font-weight: bold;}
.content{}
.text{color: rgb(91, 96, 103);font-size: 35upx;line-height: 60rpx;}
.item{padding: 30rpx 40rpx;border-bottom: 1rpx solid #dedede;display: flex;justify-content: space-between;align-items: center;}
.item-value{flex: 1;height: 100%;text-align: right;}

.item-value2{flex: 1;height: 100%;margin: 5px 0px 0px 230px ;   color: #999999;}

</style>
