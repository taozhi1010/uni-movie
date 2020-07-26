<template>
	<scroll-view class="container" scroll-y="true">
		<app-item v-for="(item, index) in items" 
		:data="item.data" 
		:showGo="item.showGo" 
		:showBottomBorder="item.showBottomBorder" 
		paddingTop="30rpx"
		borderBottomColor=""
		:key="index"
		:itemClick="toPage"
		></app-item>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{data: {title: '公司介绍'}},
					{data: {title: '安全保障',}},
					{data: {title: '收益模式',}},
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
					uni.navigateTo({
					    url: item.url
					});
				}
			}
		}
	}
</script>

<style>

</style>
