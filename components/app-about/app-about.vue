<template>
	<scroll-view class="container" scroll-y="true">
		<view class="topbar">
			<view class="topbar-center">
				关于我们
			</view>
<!-- 			<view class="topbar-right">
				<view style="color: red;font-size: 30upx;">进入会员区</view>
			</view> -->
<!-- 		<view class="topbar-left">
				123
			</view> -->
		</view>
		<view class="content">
			<app-item v-for="(item, index) in items"
			:data="item.data" 
			:showGo="item.showGo" 
			:showBottomBorder="item.showBottomBorder" 
			paddingTop="30rpx"
			borderBottomColor=""
			:key="index"
			:itemClick="toPage"
			></app-item>
		</view>
		
		<app-bottom></app-bottom>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{data: {title: '公司介绍', url: '/pages/companyIntroduction/companyIntroduction'}},
					{data: {title: '安全保障', url: ''}},
					// {data: {title: '收益模式', url: '/pages/revenueModel/revenueModel'}},
					// {data: {title: '产品说明', url: '/pages/contentLook/contentLook'}},
					{data: {title: '常见问题', url: '/pages/frequentlyAskedQuestions/frequentlyAskedQuestions'}},
					{data: {title: '关于我们', url: '/pages/aboutUs/aboutUs'}},
					{data: {title: '收益分析', url: '/pages/contentCheck/contentCheck'}},
					{data: {title: '新手帮助', url: '/pages/userhelp/userhelp'}},
					{data: {title: '公司资质', url: '/pages/enterpriseQualification/enterpriseQualification'}},
					{data: {title: '支付方式', url: '/pages/paymentMethod/paymentMethod'}},
					{data: {title: '等级制度', url: '/pages/financialRating/financialRating'}},
				]
			}
		},
		methods: {
			toPage(item){
				if(item.url !== undefined){
					if(item.title ==='安全保障'){
						this.toSafe()
						return;
					}
					
					uni.navigateTo({
					    url: item.url
					});
				}
			},
			toSafe(){
				let src = 'http://www.5t1i.cn/indexxq/'
				uni.navigateTo({
				    url: '/pages/webview/webview?src=' + src + '&showBottom=true'
				});
			}
		}
	}
</script>

<style>

</style>
