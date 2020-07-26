<template>
	<scroll-view class="container" scroll-y="true">
		<view class="content">
			
			<!-- 类型选择 -->
			<view class="record-top">
				<view class="types">
					<view class="type1" :class="{'type3':typeCheck === 0}" @click="changeTypeCheck(0)">待收</view>
					<view class="type1" :class="{'type2':typeCheck === 1}" @click="changeTypeCheck(1)">结清</view>
				</view>
			</view>
			
			<view class="record-list">
				<view class="record">
					<view class="record-item" v-if="typeCheck===0">
						<view class="record-item-top">{{data.principal}}</view>
						<view class="record-item-bottom">待收本金(元)</view>
					</view>
					<view class="record-item" v-if="typeCheck===0">
						<view class="record-item-top">{{data.interest}}</view>
						<view class="record-item-bottom">待收利息(元)</view>
					</view>
<!-- 					<view class="record-item">
						<view class="record-item-top">{{data.reward}}</view>
						<view class="record-item-bottom">待收奖励(元)</view>
					</view> -->
					
					<view class="record-item" v-if="typeCheck===1">
						<view class="record-item-top">{{data.principal}}</view>
						<view class="record-item-bottom">收回本金(元)</view>
					</view>
					<view class="record-item" v-if="typeCheck===1">
						<view class="record-item-top">{{data.interest}}</view>
						<view class="record-item-bottom">收回利息(元)</view>
					</view>
				</view>
				
				<!-- 交易明细数据 -->
				<view class="data-list1" v-for="(item, index) in data.detailed" :key="index" @click="toProject(item)">
					<view class="data-item">
						<!-- 交易明细子数据2 -->
						<view class="data-item-child">
							<view class="data-item-child-left">
								<image src="" class="left-icon"></image>
								<view class="child-data">
									<view class="type-name">{{item.proectName}}</view>
									<view class="type-time">{{item.createTime}}</view>
								</view>
							</view>
							<view class="data-item-child-right">
								<view class="value">{{item.money}}</view>
								<image class="data-item-title-right" src="../../static/right.png"></image>
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</scroll-view>
</template>

<script>
	export default {
		data() {
			return {
				data: {
					principal: 0,
					interest: 0,
					reward: 0,
					detailed: []
				},
				typeCheck: 0
			}
		},
		methods: {
			pajectDetails(){
				this.api.pajectDetails(this.form.proectId).then(res => {
					console.log("pajectDetails", res.data)
					if(res.code === "0"){
						// this.data = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			toProject(item){
				uni.navigateTo({
				    url: '/pages/projectInfo/projectInfo?id=' + item.proectId + '&rid=' + item.id
				});
			},
			changeTypeCheck(typeCheck){
				this.typeCheck = typeCheck
				this.getRecordList()
			},
			getRecordList(){
				this.api.recordList(0, 100, this.typeCheck).then(res => {
					console.log(res)
					if(res.code === "0"){
						this.data = res.data
					}else{
						uni.showToast({
							icon: 'none',
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			}
		},
		created(){
			this.getRecordList()
		}
	}
</script>

<style>
.record-top{display: flex;justify-content: center;align-items: center;padding: 30rpx 0;background-color: #96CFB5;}
.types{font-size: 30upx ;margin: 0 80rpx;display: flex;flex: 1;border: 1rpx solid white;color: white;border-radius: 50rpx;}
.type1{flex: 1;text-align: center;padding: 10rpx 0;border-radius: 50rpx 0 0 50rpx;}
.type2{flex: 1;text-align: center;background-color: white;color: #96CFB5;padding: 10rpx 0;border-radius: 0 50rpx 50rpx 0;}
.type3{flex: 1;text-align: center;background-color: white;color: #96CFB5;padding: 10rpx 0;border-radius: 50rpx 0 0 50rpx;}
.record{display: flex;justify-content: center;align-items: center;
font-size: 30upx;border-bottom: 1rpx solid #dedede;}
.record-item{flex: 1;text-align: center;padding: 25rpx 0;display: flex;flex-direction: column;}
.record-item-top{color: #EC8A5B;}
.record-item-bottom{color: #666666;}

.data-list1{}
.data-item{display: flex;flex-direction: column;}
.data-item-title{display: flex;padding: 40rpx;justify-content: space-between;align-items: center;background-color: white;}
.day{font-size: 60upx;}
.data-item-title-right{width: 35rpx;height: 35rpx;}
.data-item-title-left{display: flex;align-items: center;}
.date-and-count{margin-left: 25rpx;display: flex;flex-direction: column;font-size: 20upx;color: #6c6c6c;}
.money-add{display: flex;flex-direction: column;font-size: 25rpx;margin-left: 70rpx;}
.add{color: red;}
.del{color: #96CFB5;}

.data-item-child{display: flex;align-items: center;padding: 25rpx 25rpx;font-size: 30upx;border-bottom: 1rpx solid #dedede;}
.data-item-child-left{flex: 1;display: flex;align-items: center;}
.left-icon{width: 35rpx;height: 35rpx;}
.type-time{font-size: 20upx;color: #6c6c6c;margin-top: 5rpx;}
.data-item-child-right{display: flex;justify-content: center;align-items: center;}
.value{color: red;font-size: 30upx;margin-right: 10rpx;}

.data-list2{display: flex;flex-direction: column;}
.span-list{display: flex;flex-wrap: wrap;padding: 10rpx 20rpx 30rpx;background-color: white;font-size: 30upx;}
.span-view{flex: 0 0 15%;padding: 0 15rpx;padding-top: 15rpx;}
.span{border: 1rpx solid #96CFB5;border-radius: 10rpx;color: #96CFB5;text-align: center;padding: 5rpx 0;font-size: 25upx;}
.span-check{color: white;background-color: #96CFB5;}
</style>
