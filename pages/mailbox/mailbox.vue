<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="mail-list">
				<view class="mail" v-for="(item,index) in data" :key="index" @click="toDetails(item)">
					<image class="mail-img" src="../../static/tximg.png"></image>
					<view class="mail-info">
						<view class="mail-info-title">
							<view class="title">{{item.title}}</view>
							<view class="status grey">{{item.status===0?'未查看':'已查看'}}</view>
						</view>
						<view class="mail-content">
							{{item.content}}
						</view>
						<view class="mail-time">
							<image class="mail-time-img" src="../../static/clock.png"></image>
							<view class="grey">{{item.createTime}}</view>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				data: []
			}
		},
		methods: {
			toDetails(item){
				uni.navigateTo({
				    url: '/pages/mailboxDetails/mailboxDetails?id=' + item.id
				});
			},
			mailList(){
				let app = this
				this.api.mailList().then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						app.data = res.data
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
			this.mailList()
		}
	}
</script>

<style>
.mail-list{display: flex;flex-direction: column;}
.mail{padding: 20rpx 30rpx;flex: 1;display: flex;border-bottom: 1rpx solid #dedede;}
.mail-img{width: 80rpx;height: 80rpx;}
.mail-info{flex: 1;display: flex;flex-direction: column;margin-left: 30rpx;}
.mail-info-title{display: flex;justify-content: space-between;align-items: center;}
.title{color: #3B424C;font-size: 40upx;font-weight: bold;}
.mail-content{margin-top: 10rpx;}
.mail-time{display: flex;margin-top: 20rpx;align-items: center;}
.mail-time-img{width: 30rpx;height: 30rpx;margin-right: 15rpx;}
.grey{color: #A9A9A9;}
</style>
