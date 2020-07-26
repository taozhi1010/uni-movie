<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view style="padding: 30rpx;">
				<view class="title">{{data.title}}</view>
				<view class="time">{{data.createTime}}</view>
				<view class="value">
					{{data.content}}
				</view>
			</view>
		</scroll-view>
		<view class="bottom-btn" @click="back">返回</view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) {
			this.id = option.id
		},
		data() {
			return {
				id: 0,
				data: {}
			}
		},
		methods: {
			back(){
				uni.navigateBack()
			},
			getMail(){
				let app = this
				this.api.mail(this.id).then(res => {
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
			this.getMail()
		}
	}
</script>

<style>
.content{}
.title{font-size: 40rpx;font-weight: bold;}
.time{padding: 20rpx 0;font-size: 30rpx;}
.value{font-size: 30rpx;}
</style>
