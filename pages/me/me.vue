<template>
	<scroll-view class="container" scroll-y="true">
		
		<view class="cash">
			<view class="cash-card">
				<!-- 用户资金总额 -->
				<view class="total-capital">{{data.money}}</view>
				<view class="hide">
					<view>资产总额(元)</view>
					<image src="../../static/show.png"></image>
				</view>
				
				<!-- 用户资金数据 -->
				<view class="income-data">
					<view class="income-data-item">
						<view class="income-data-item-content income-data-split">
							<view class="data">{{data.tobMoney}}</view>
							<view class="label">待收本金(元)</view>
						</view>
					</view>
					<view class="income-data-item">
						<view class="income-data-item-content income-data-split">
							<view class="data">{{data.interest}}</view>
							<view class="label">待收收益(元)</view>
						</view>
					</view>
					<view class="income-data-item">
						<view class="income-data-item-content">
							<view class="data">{{data.sumMoney}}</view>
							<view class="label">赚钱总额</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 资金操作 -->
		<view class="operate">
			<view class="operate-title">本息保障 赚得安心</view>
			<view class="operate-items">
				<view class="operate-item" @click="toCharge">
					<image src="../../static/invest-icon.png"></image>
					<view >充值</view>
				</view>
				<view class="operate-item" @click="toCashout">
					<image src="../../static/redom-icon.png"></image>
					<view >提现</view>
				</view>
				<view class="operate-item"  @click="signIn">
					<image src="../../static/sign-icon.png"></image>
					<view>签到</view>
				</view>
			</view>
		</view>
		<view class="split"></view>
		
		<!-- app为我赚的钱 -->
		<view class="profit">
			<view class="profit-left">
				<view class="profit-left-title">
					<view>雲創科技为我赚了这么多</view>
					<image src="../../static/mark.png"></image>
				</view>
				<view class="profit-left-describe">投资赚钱两不误，喜出望外</view>
			</view>
			<view class="profit-right">{{data.money}}元</view>
		</view>
		<view class="split"></view>
		
		<!-- 用户操作 -->
		<view class="user-operates">
			<app-item :showBottomBorder="false" :data="userData.data"></app-item>
			<view class="split"></view>
			<app-item :itemClick="toPage" v-for="(item, index) in items" :data="item.data" :showGo="item.showGo" :showBottomBorder="item.showBottomBorder" :key="index"></app-item>
		</view>
	</scroll-view>
</template>

<script language="javascript" src="http://dbt.zoosnet.net/JS/LsJS.aspx?siteid=DBT41494082&float=1&lng=cn"></script>
<script>
	export default {
		data() {
			return {
				showMoney: false,
				userData: {data: {icon: '../../static/wallet.png', title: '账户余额', describe: '0.00元'}},
				data: {
					money: 0.00,
					tobMoney: 0.00,
					interest: 0.00,
					sumMoney: 0.00,
					level: 0,
				},
				items: [
					{data: {icon: '../../static/wallet.png', title: '会员等级', describe: "V0"}, showGo: false},
					{data: {icon: '../../static/yhk.png', title: '我的银行卡', url: '/pages/banks/banks'}},
					{data: {icon: '../../static/sjx.png', title: '收件箱', describe: '未读0条', url: '/pages/mailbox/mailbox'}},
					{data: {icon: '../../static/lsjl.png', title: '资金流水记录', url: '/pages/capitalflow/capitalflow'}},
					{data: {icon: '../../static/wdtz1.png', title: '我的投资',}},
					{data: {icon: '../../static/txjl.png', title: '提现记录', url: '/pages/investrecord/investrecord'}},
					{data: {icon: '../../static/txjl.png', title: '余额宝', url: '/pages/yuebao/yuebao'}},
					{data: {icon: '../../static/yqyl.png', title: '邀请有礼',describe: '推荐拿佣金', url: '/pages/inviteCourtesy/inviteCourtesy'}},
					{data: {icon: '../../static/wallet.png', title: '设置', url: '/pages/setting/setting'}},
					{data: {icon: '../../static/wallet.png', title: '退出登陆', url: '/pages/quit/quit'}},
				]
			}
		},
		methods: {
			toCashout(){
				uni.navigateTo({
				    url: '/pages/cashout/cashout'
				});
			},
			toCharge(){
				uni.navigateTo({
				    url: '/pages/charge/charge'
				});
			},
			toPage(item){
				if(item.url !== undefined){
					// 如果是退出登陆就拦截
					if(url === '/pages/quit/quit'){
						this.quit()
						return
					}
					
					uni.navigateTo({
					    url: item.url
					});
				}
			},
			quit(){
				console.log(1)
			},
			signIn(){
				this.api.signIn().then(res => {
					if(res.code === "0"){
						uni.showToast({
						    title: '签到成功',
						    duration: 2000
						});
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			getUserCore(){
				this.api.userCore().then(res => {
					console.log(res.data)
					if(res.code === "0"){
						this.data = res.data
						this.userData.data.describe = this.data.money + "元"
						this.items[0].data.describe = "V" + this.data.level
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
.cash{background-color: #55595F;padding: 30rpx 30rpx 0 30rpx;}
.cash-card{background: url(../../static/uesrbg.png);color: white;display: flex;flex-direction: column;background-size: 100% 100%;}
.total-capital{font-size: 80upx;text-align: center;margin-top: 20rpx;}
.hide{display: flex;justify-content: center;align-items: center;}
.hide >view{font-size: 30upx;}
.hide >image{width: 40rpx;height: 40rpx;margin-left: 10rpx;}

.income-data{display: flex;margin-top: 30rpx;}
.income-data-item{flex: 1;font-size: 30upx;padding: 40rpx 0;}
.income-data-item-content{display: flex;justify-content: center;align-items: center;flex-direction: column;}
.income-data-split{border-right: 1rpx solid rgba(255,255,255, 0.5);}

.operate{display: flex;background: url(../../static/operatebg.jpg);background-size: 100% 100%;flex-direction: column;padding: 30rpx 0;font-size: 35upx;}
.operate-title{text-align: center;color: #3B424C;}
.operate-items{display: flex;justify-content: space-between;padding: 0 80rpx;margin-top: 20rpx;color: #3B424C;}
.operate-item{display: flex;justify-content: center;align-items: center;padding: 5rpx 20rpx;border: 1rpx solid #dedede;border-radius: 5rpx;}
.operate-item >image{width: 60rpx;height: 60rpx;}
.operate-item >view{margin-left: 10rpx;}

.split{background-color: #F5F5F5;height: 10rpx;}

.profit{background: url(../../static/profit_box.png);background-size: 100% 100%;padding: 35rpx 30rpx;display: flex;justify-content: space-between;}
.profit-left-title{color: #3B424C;font-size: 35upx;display: flex;align-items: center;}
.profit-left-title >image{width: 35rpx;height: 35rpx;margin-left: 15rpx;}
.profit-left-describe{color: #9EA0A5;font-size: 25upx;margin-top: 10rpx;}
.profit-right{color: #F19E3A;font-weight: bold;display: flex;align-items: center;}

</style>