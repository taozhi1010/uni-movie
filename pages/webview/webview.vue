<template>
	<view class="container">
		<view class="content" style="display: flex;overflow: hidden;">
			<web-view :webview-styles="webviewStyles" :src="src"></web-view>
		</view>
		<!-- <view class="bottom-btn" @click="back" style="z-index: 999;" v-if="showBottom">返回首页</view> -->
	</view>
</template>

<script>
	export default {
		onLoad: function (option) {
			this.src = option.src
			this.showBottom = option.showBottom
		},
		data() {
			return {
				src: '',
				showBottom: false,
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
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
	.bottom-btn{height: 75px;background-color: #F1A93D;font-size: 40rpx; z-index :9999;}
</style>
