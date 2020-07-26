<template>
	<view class="container" >
		<scroll-view class="content" scroll-y="true">
			<view class="title1">等级制度介绍</view>
			<view class="texts">
				<view class="text">
					<span style="width: 200rpx;">认购0元</span>
					<span>VIP0</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购1000元</span>
					<span>VIP1</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购5000元</span>
					<span>VIP2</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购20000元</span>
					<span>VIP3</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购50000元</span>
					<span>VIP4</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购100000元</span>
					<span>VIP5</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购150000元</span>
					<span>VIP6</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购200000元</span>
					<span>VIP7</span>
				</view>
				<view class="text">
					<span style="width: 200rpx;">认购300000元</span>
					<span>VIP8</span>
				</view>
			</view>
			
		<view class="title1">等级奖励介绍</view>
			<view class="text">
				VIP0享受一级0%、二级0%、三级0%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP1享受一级1%、二级1%、三级1%的认购金额推荐奖励;
			</view>
	<!-- 		<view class="text">
				VIP2享受一级2%、二级2%、三级2%的购买金额推荐奖励;
			</view> -->
			<view class="text">
				VIP2享受一级2%、二级2%、三级2%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP3享受一级3%、二级3%、三级3%的认购金额推荐奖励;
			</view>
		<!-- 	<view class="text">
				VIP4享受一级4%、二级4%、三级4%的购买金额推荐奖励;
			</view>
			<view class="text">
				VIP5享受一级5%、二级5%、三级5%的购买金额推荐奖励;
			</view> -->
			<view class="text">
				VIP4享受一级4%、二级4%、三级4%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP5享受一级5%、二级5%、三级5%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP6享受一级6%、二级6%、三级6%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP7享受一级7%、二级7%、三级7%的认购金额推荐奖励;
			</view>
			<view class="text">
				VIP8享受一级8%、二级8%、三级8%的认购金额推荐奖励;
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
.content{padding: 35rpx;width: auto !important;}
.text{color: rgb(91, 96, 103);font-size: 30upx;line-height: 60rpx;display: flex;flex: 0 0 50%;}
.bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: rgb(216, 30, 6);color: white;}
.texts{display: flex;flex-wrap: wrap;}
</style>
