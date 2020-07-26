<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			
			<!-- 项目信息 -->
			<view class="project-info">
				
				<!-- 项目标题 -->
				<view class="project-title">
					<image class="project-title-icon" src="../../static/bao-green.png"></image>
					<view class="project-title-text">{{data.title}}</view>
				</view>
				
				<!-- 项目日收益 -->
				<view class="project-income">
					<view class="data">{{data.profit}}</view>
					<view class="percent">%</view>
				</view>
				
				<view class="prject-tip">
					<view>日化收益</view>
				</view>
				
				<!-- 项目投资进度条 -->
				<view class="project-progress">
					<progress class="progress" percent="44" activeColor="#FF6600" backgroundColor="#FFFF99" stroke-width="9" ></progress>
				</view>
				
				<!-- 项目投资进度 -->
				<view class="project-rate">
					<view class="project-rate-left">项目进度{{data.speeof}}%</view>
				<!-- 	<view class="project-rate-right">剩余可投金额{{data.surplusPro}}元</view> -->
				<view class="project-rate-right">剩余可投金额{{countMoney(data.surplusPro)}}元</view>
				</view>
				
				<!-- 投资要求 -->
				<view class="project-requirement-items">
					<view class="project-requirement-item">
						<view class="project-requirement-item-top">{{data.cycle}}个自然日</view>
						<view class="project-requirement-item-bottom">期限</view>
					</view>
					<view class="project-requirement-item">
						<view class="project-requirement-item-top">{{data.moneyUser}}元</view>
						<view class="project-requirement-item-bottom">起购金额</view>
					</view>
					<view class="project-requirement-item">
						<view class="project-requirement-item-top">{{data.scale/10000}}万元</view>
						<view class="project-requirement-item-bottom">项目规模</view>
					</view>
				</view>
			</view>
			
			<view class="split"></view>
			
			<!-- 项目安全担保1 -->
			<view class="warrants">
				<view class="warrant-item">
					<view class="warrant-item-label">还款方式</view>
					<view class="warrant-item-value warrant-item-value-orange">按日付收益，到期还本</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">最高投资</view>
					<view class="warrant-item-value warrant-item-value-orange">{{data.maxMoney + '元'}}</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">担保机构</view>
					<view class="warrant-item-value warrant-item-value-orange">{{data.danbao}}</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">安全保障</view>
					<view class="warrant-item-value">
						<image src="../../static/baox.png"></image>
						<image src="../../static/xian.png"></image>
						<image src="../../static/jian.png"></image>
					</view>
				</view>
			</view>
			
			<!-- 项目安全担保2 -->
			<view class="warrants2"> 
				<view class="warrants2-item">
					<image class="warrants2-item-image" src="../../static/int_ico01.png"></image>
					<view class="warrants2-item-title">安全保障</view>
					<view class="warrants2-item-info">本息保障</view>
				</view>
				<view class="warrants2-item">
					<image class="warrants2-item-image" src="../../static/int_ico02.png"></image>
					<view class="warrants2-item-title">第三方担保</view>
					<view class="warrants2-item-info">专业的风控团队</view>
				</view>
				<view class="warrants2-item">
					<image class="warrants2-item-image" src="../../static/int_ico03.png"></image>
					<view class="warrants2-item-title">收益更高</view>
					<view class="warrants2-item-info">2.62%-42.56%</view>
				</view>
			</view>
			
			<view class="split"></view>
			
			<view class="project-tabs">
				<view class="tab" :class="{'tab-check': tabCheck === 1}" @click="tabChange(1)">产品详情</view>
				<view class="tab" :class="{'tab-check': tabCheck === 2}" @click="tabChange(2)">购买记录</view>
			</view>
			
			<view class="project-details" v-if="tabCheck === 1">
				<view class="warrant-item">
					<view class="warrant-item-label">投资项目</view>
					<view class="warrant-item-value warrant-item-value-black">{{data.title}}</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">项目金额</view>
					<view class="warrant-item-value warrant-item-value-black">
						<span class="color-red">{{countMoney(data.scale)}}</span>
						元人民币
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">日收益率</view>
					<view class="warrant-item-value warrant-item-value-black">
						<span class="color-red">{{data.profit}}%</span>
						日化收益
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">起投金额</view>
					<view class="warrant-item-value warrant-item-value-black">
						<view class="color-red" v-if="data.type === '新手专区'">起投{{data.moneyUser}}元,不可复投</view>
						<view class="color-red" v-if="data.type !== '新手专区'">起投{{data.moneyUser}}元,可以复投</view>
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">项目期限</view>
					<view class="warrant-item-value warrant-item-value-black">
						<span class="color-red">{{data.cycle}}</span>
						个自然日
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">收益计算</view>
					<view class="warrant-item-value warrant-item-value-black">
						<span class="color-red">{{data.moneyUser}}元</span>*
						<span class="color-red">{{data.profit}}%</span>*
						<span class="color-red">{{data.cycle}}天</span>=总收益
						<span class="color-red">{{data.moneyUser * data.profit * data.cycle / 100}}元</span>
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">还款方式</view>
					<view class="warrant-item-value warrant-item-value-black">
						按日付收益，到期还本 节假日照常收益
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">结算时间</view>
					<view class="warrant-item-value warrant-item-value-black">
						当天投资，当天计息，满
						<span class="color-red">24小时自动结算</span>
						收益（例如在11:08成功投资，则在下个自然日11:08收到收益），系统将当日收益和产品本金一起返还到您的会员账号中
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">可投金额</view>
					<view class="warrant-item-value warrant-item-value-black">
						限投{{data.maxMoney}}元，
						<span v-if="data.type === '新手专区'">不可复投</span>
						<span v-if="data.type !== '新手专区'">可以复投</span>
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">资金用途</view>
					<view class="warrant-item-value warrant-item-value-black">
						每位认购者的认购资金由公司统一运作研发更多新型高科技产品，无限循环活跃市场。
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">安全保障</view>
					<view class="warrant-item-value warrant-item-value-black">
						担保机构对平台上的每一笔投资提供
						<span class="color-red">100%</span>
						本息保障，平台设立风险备用金，对本息承诺全额垫付；
					</view>
				</view>
				<view class="warrant-item">
					<view class="warrant-item-label">项目概述</view>
					<view class="warrant-item-value warrant-item-value-black">
						本项目筹集资金{{countMoney(data.scale)}}元人民币，投资本项目（按日付息收益为
						<span class="color-red">{{data.profit}}%/天</span>
						）项目周期为
						<span class="color-red">{{data.cycle}}</span>
						个自然日，所筹集资金用于该项目直投运作，作为用户收益固定且无任何风险，所操作一切风险都由公司与担保公司一律承担，用户不需要承担任何风险。
					</view>
				</view>
				
				<image :src="url1" mode="aspectFit" style="width: 100%;height: 400rpx;"></image>
				<!-- <image :src="url2" mode="aspectFit" style="width: 100%;height: 400rpx;"></image> -->
				
				<view style="padding: 30rpx;">{{data.content}}</view>
			</view>
			
			<view class="project-purchase-history" v-if="tabCheck === 2">
				<view>
					<t-table border-color="#dedede">
						<t-tr>
							<t-th>认购人</t-th>
							<t-th>认购金额(元)</t-th>
							<t-th>来源</t-th>
							<t-th>投标时间</t-th>
						</t-tr>
						<t-tr v-for="(item, index) in userData" :key="index">
							<t-td>{{ item.phone }}</t-td>
							<t-td>{{ item.money }}</t-td>
							<t-td>
								<image class="source" v-if="item.source===1" src="../../static/phone.png"></image>
								<image class="source" v-if="item.source===2" src="../../static/pc.png"></image>
							</t-td>
							<t-td>{{ item.timeD }}</t-td>
						</t-tr>
					</t-table>
				</view>

				<view class="project-purchase-history-tip">
					仅显示最新10条记录，({{data.title}})用户可到个人中心查看您的投资记录
				</view>
			</view>
		</scroll-view>
		
		<view class="bottom-btn" @click="toXieyi" v-if="token !== '' && token !== undefined">电子合同</view>
		<view class="bottom-btn" @click="tologin" v-if="!(token !== '' && token !== undefined)">登陆后再投资</view>
	</view>
</template>

<script>
	import tTable from '@/components/t-table/t-table.vue';
	import tTh from '@/components/t-table/t-th.vue';
	import tTr from '@/components/t-table/t-tr.vue';
	import tTd from '@/components/t-table/t-td.vue';
	
	let app;
	export default {
		components: {
			tTable,
			tTh,
			tTr,
			tTd
		},
		onLoad: function (option) {
			this.id = option.id
			this.rid = option.rid
		},
		data() {
			return {
				tabCheck: 1,
				id: 0,
				data: {},
				userData: [],
				token: '',
				url1: '',
				url2: ''
			}
		},
		methods: {
			projectDetails(){
				this.api.projectDetails(this.id)
				.then(res => {
					console.log("1", res)
					if(res.code === "0"){
						app.data = res.data
						app.url1 = 'http://103.39.16.122:80/' + app.data.url1
						app.url2 = 'http://103.39.16.122:80/' + app.data.url2
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			countMoney(num){
				let value = num/10000 + '万'
				return value
			},
			toXieyi(){
				uni.navigateTo({
				    url: '/pages/Xieyi/Xieyi?id=' + this.rid
				});
			},
			tologin(){
				uni.navigateTo({
				    url: '/pages/login/login'
				});
			},
			tabChange(value){
				this.tabCheck = value
			},
			topay(){
				uni.navigateTo({
				    url: '/pages/pay/pay?id=' + this.id
				});
			},
			// projectDetails(){
			// 	this.api.projectDetails(this.id)
			// 	.then(res => {
			// 		console.log("1", res)
			// 		if(res.code === "0"){
			// 			app.data = res.data
			// 		}else{
			// 			uni.showToast({
			// 			    title: res.msg,
			// 			    duration: 2000
			// 			});
			// 		}
			// 	})
			// },
			purchaseHistory(){
				this.api.purchaseHistory(this.id).then(res => {
					console.log("2", res)
					if(res.code === "0"){
						app.userData = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			}
		},
		onShow() {
			app = this
			this.projectDetails()
			this.purchaseHistory()
			
			uni.getStorage({
				key: 'token',
				success: function (res) {
					app.token = res.data
				},
				fail: function(){
					app.token = ''
				}
			})
			
		}
	}
</script>

<style>
.bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: linear-gradient(-269deg, #FF9906 0%, #FFC606 94%);color: white;}

.project-info{display: flex;flex-direction: column;background: url(../../static/product_banner.png);color: white;
padding: 25rpx 0 0;background-size: 100% 100%;}
.project-title{display: flex;justify-content: center;align-items: center;}
.project-title-icon{width: 50rpx;height: 50rpx;}
.project-title-text{font-size: 35upx;margin-left: 20rpx;}

.project-income{display: flex;justify-content: center;align-items: baseline;margin-top: 10rpx;}
.project-income .data{font-size: 120upx;}
.project-income .percent{font-size: 60upx;}

.prject-tip{display: flex;justify-content: center;align-items: center;}
.prject-tip >view{font-size: 25upx;padding: 5rpx 15px;border: 1px solid #FFD279;}

.project-progress{padding: 0 40rpx;margin-top: 30rpx;}
.project-rate{display: flex;justify-content: space-between;padding: 20rpx 40rpx 10rpx;font-size: 27upx;}

.project-requirement-items{font-size: 30upx;display: flex;padding: 0 40rpx;background-color: #C102CD;color: white;margin-top: 15rpx;}
.project-requirement-item{display: flex;flex: 1;justify-content: center;align-items: center;
padding: 25rpx 0;flex-direction: column;}
.project-requirement-item-bottom{margin-top: 10rpx;opacity: 0.8;}

.warrants{display: flex;flex-direction: column;}
.warrant-item{display: flex;align-items: center;padding: 30rpx 50rpx;border-bottom: 1px solid #F5F5F5}
.warrant-item-label{color: #9EA0A5;font-size: 30upx;}
.warrant-item-value{color: #9EA0A5;font-size: 30upx;margin-left: 30rpx;flex: 1; }
.warrant-item-value >image{height: 50rpx;width: 50rpx;}
.warrant-item-value >image:not(:first-child){margin-left: 15rpx;}
.warrant-item-value-orange{color: rgb(255, 102, 0);}
.warrant-item-value-black{color: #5B6067;}

.warrants2{display: flex;justify-content: space-between;padding: 30rpx 0;}
.warrants2-item{display: flex;flex-direction: column;flex: 1;justify-content: center;align-items: center;}
.warrants2-item-image{height: 100rpx;width: 100rpx;}
.warrants2-item-title{font-size: 30upx;color: #3B424C;margin-top: 15rpx;}
.warrants2-item-info{font-size: 25upx;color: #9EA0A5;}

.project-tabs{display: flex;justify-content: center;align-items: center;border-bottom: 1rpx solid #F5F5F5;}
.tab{flex: 1;text-align: center;color: #9EA0A5;padding: 20rpx 0;font-size: 35upx;}
.tab-check{border-bottom: 5rpx solid #FF9906;color: #3B424C;font-weight: bold;}

.color-red{color: red;}

.project-purchase-history{display: flex;flex-direction: column;}
.project-purchase-history-tip{padding: 20rpx;margin-top: 30rpx;border: 1rpx solid #dedede;font-size: 30upx;
color: #;}
.source{width: 40rpx;height: 40rpx;}
</style>
