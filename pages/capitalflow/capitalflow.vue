<template>
	<s-pull-scroll class="container uni-scroll-view-content" :pullUp="loadData" ref="pullScroll">
		<view class="content">
			<view class="flow-infos">
				<view class="flow-info">
					<view class="flow-info-top">{{data.sumRecharge}}</view>
					<view class="flow-info-bottom">累计充值(元)</view>
				</view>
				<view class="flow-info">
					<view class="flow-info-top">{{data.sumWithdrawal}}</view>
					<view class="flow-info-bottom">累计提现(元)</view>
				</view>
				<view class="flow-info">
					<view class="flow-info-top">{{data.sumMoney}}</view>
					<view class="flow-info-bottom">累计投资(元)</view>
				</view>
			</view>
			
			<view class="data-types">
				<view class="data-type" :class="{'data-type-check': dataType === 1}" @click="dataTypeChange(1)">交易明细</view>
				<view class="data-type" :class="{'data-type-check': dataType === 2}" @click="dataTypeChange(2)">筛选</view>
			</view>
			
			<!-- 交易明细数据 -->
			<view class="data-list1" v-if="dataType === 1">
				<view class="data-item" v-for="(item, index) in data.list" :key="index">
					<!-- 交易明细子数据2 -->
					<view class="data-item-child">
						<view class="data-item-child-left">
							<image src="" class="left-icon"></image>
							<view class="child-data">
								<view class="type-name">{{item.content}}</view>
								<view class="type-time">{{item.createTime}}</view>
							</view>
						</view>
						<view class="data-item-child-right">
							<view class="value" v-if="item.money >= 0">+{{item.money}}</view>
							<view class="value-z" v-if="item.money < 0">{{item.money}}</view>
							<!-- <image class="data-item-title-right" src="../../static/right.png"></image> -->
						</view>
					</view>
				</view>
			</view>
			
			<!-- 筛选 -->
			<view class="data-list2" v-if="dataType === 2">
				<view class="span-list">
					<view class="span-view" v-for="(item, index) in spanList" :key="index" @click="checkChange(item.type)"><view class="span" :class="{'span-check': check===item.type}">{{item.label}}</view></view>
				</view>
				
				<view>
					<view class="data-item" v-for="(item, index) in data.list" :key="index">
						<!-- 交易明细子数据2 -->
						<view class="data-item-child">
							<view class="data-item-child-left">
								<image src="" class="left-icon"></image>
								<view class="child-data">
									<view class="type-name">{{item.content}}</view>
									<view class="type-time">{{item.createTime}}</view>
								</view>
							</view>
							<view class="data-item-child-right">
								<view class="value" v-if="item.money >= 0">+{{item.money}}</view>
								<view class="value-z" v-if="item.money < 0">{{item.money}}</view>
								<!-- <image class="data-item-title-right" src="../../static/right.png"></image> -->
							</view>
						</view>
					</view>
				</view>

			</view>
		
		</view>
	</s-pull-scroll>
</template>

<script>
	import sPullScroll from '@/components/s-pull-scroll/index.vue';
	export default {
		components: {
			sPullScroll
	    },
		data() {
			return {
				dataType: 1,
				spanList: [
					{label: '新人奖励', type: 0},
					{label: '投资支出', type: 1},
					{label: '投资返利', type: 3},
					{label: '签到', type: 4},
					{label: '推荐投资奖励', type: 5},
					{label: '投资反现', type: 6},
					{label: '转入零钱袋', type: 7},
					{label: '零钱袋收益', type: 8},
					{label: '转出零钱袋', type: 9},
					{label: '充值', type: 10},
					{label: '提现', type: 11},
					{label: '积分收入', type: 12},
					{label: '积分兑换', type: 13},
				],
				check: -1,
				data: {},
				page: 0,
				limit: 10
			}
		},
		methods: {
			loadData(pullScroll){
				this.page = this.page + 1
				this.pajectMoneyLog(false)
			},
			checkChange(type){
				this.page = 0
				this.check=type
				this.pajectMoneyLog(true)
			},
			dataTypeChange(dataType){
				this.page = 0
				this.dataType = dataType
				
				if(this.dataType === 1){
					this.check = -1
				}
				
				if(this.dataType === 2){
					this.check = 1
				}
				
				this.pajectMoneyLog(true)
			},
			pajectMoneyLog(down){
				let form = {
					offset: this.page * this.limit,
					limit: this.limit,
				}
				
				if(this.check !== -1){
					form.type = this.check
				}
				
				this.api.pajectMoneyLog(form).then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.$refs.pullScroll.success();
						if(down){
							this.data = res.data
						}else{
							for(let key in res.data.list){
								this.data.list.push(res.data.list[key])
							}
						}
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			}
		},
		created() {
			console.log(123)
			this.pajectMoneyLog(true)
		}
	}
</script>

<style>
.content{background-color: #f0f0f0;}
.flow-infos{display: flex;font-size: 35upx; color: white;background-color: #96CFB5;padding: 30rpx 0;}
.flow-info{flex: 1;display: flex;justify-content: center;align-items: center;flex-direction: column;}
.data-types{display: flex;border-bottom: 1rpx solid #dedede;background-color: white;}
.data-type{flex: 1;text-align: center;padding: 20rpx 0;font-size: 30upx;}
.data-type-check{border-bottom: 1rpx solid #96CFB5;color: #96CFB5;}

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
.value-z{color: green;font-size: 30upx;margin-right: 10rpx;}

.data-list2{display: flex;flex-direction: column;}
.span-list{display: flex;flex-wrap: wrap;padding: 10rpx 20rpx 30rpx;background-color: white;font-size: 30upx;}
.span-view{padding: 0 15rpx;padding-top: 15rpx;}
.span{border: 1rpx solid #96CFB5;border-radius: 10rpx;color: #96CFB5;text-align: center;padding: 5rpx 15rpx;font-size: 25upx;}
.span-check{color: white;background-color: #96CFB5;}

.uni-scroll-view-content{background-color: #f0f0f0 !important;}
</style>
