<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<!-- 用户操作 -->
			<view class="user-operates">
				<app-item :showBottomBorder="false" :data="userData.data"></app-item>
				<view class="split"></view>
				<app-item :itemClick="toPage" :showBottomBorder="false" :data="bankData.data"></app-item>
				<view class="split"></view>
				<app-item :itemClick="toPage" v-for="(item, index) in items" :data="item.data" :showGo="item.showGo" :showBottomBorder="item.showBottomBorder" :key="index"></app-item>
				<view class="split"></view>
			<!-- 	<app-item :showBottomBorder="false" :data="customerData.data"></app-item> -->
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userData: {data: {icon: '../../static/sjh.png', title: '用户名', describe: ''}},
				bankData: {data: {icon: '../../static/yhk.png', title: '我的银行卡', url: '/pages/banks/banks'}},
				customerData: {data: {icon: '../../static/kfdh.png', title: '客服电话', url: '/pages/banks/banks'}},
				items: [
					{data: {icon: '../../static/smrz.png', title: '实名认证', url: '/pages/certification/certification'}},
					{data: {icon: '../../static/dlmm.png', title: '登陆密码', url: '/pages/loginPassword/loginPassword'}},
					{data: {icon: '../../static/dlmm.png', title: '交易密码', url: '/pages/payPasswrod/payPasswrod'}},
				],
				data: {}
			}
		},
		methods: {
			toPage(item){
				if(item.url !== undefined){
					uni.navigateTo({
					    url: item.url
					});
				}
			},
			getUserCore(){
				this.api.userCore().then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.data = res.data
						this.userData.data.describe = this.data.phone
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
			this.getUserCore()
		}
	}
</script>

<style>

</style>
