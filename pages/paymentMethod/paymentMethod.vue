<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="title1">支付方式</view>
			<view class="text color1">>>>在线支付</view>
			<view class="text">在线支付需知:</view>
			<view class="text">
				雲創科技在线支付单笔最低存款为￥
				<span class="color1">100</span>
				元，单笔最高上限￥
				<span class="color1">50000</span>
				元。
			</view>
			
			<view class="text">
				会员登入后点击 [
				<span class="color1">帐户充值</span>
				]，选择 [
				<span class="color1">在线支付</span>
				]。
			</view>
			
			<view class="text">
				填写要充值金额，点击提交。进入在线充值页面，选择”支付银行”。
			</view>
			
			<view class="text">
				支持借记卡：平安银行，招商银行，中国建设银行，中国农业银行，中国邮政储蓄银行，中信银行，兴业银行，中国民生银行，华夏银行	。确认送出后，请确认您的支付订单无误，并建议您记录您的支付订单号后，确认送出，并耐心等待载入网络银行页面，传输中已将您账户数据加密，请耐心等待。进入网络银行页面，请确实填写您银行账号信息，支付成功，充值金额将在1分钟内系统处理完成，立即加入您的账户上。
			</view>
			
			<view class="text">
				(
				<span class="color1">备注：短信验证码充值银行有支付限额，使用网银盾或电子密码器充值单笔最高上限50000元，充值额度请参照各大银行标准，支付过程中如有疑问请联系在线客服。</span>
				)
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="back">返回</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			}
		}
	}
</script>

<style>
.title1{font-size: 45upx;color: #3B424C;font-weight: bold;}
.content{padding: 35rpx 35rpx 0;width: auto !important;}
.text{color: rgb(91, 96, 103);font-size: 30upx;line-height: 60rpx;}
.color1{color: #ff6600;}
</style>
