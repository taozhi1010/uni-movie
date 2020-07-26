<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
				<view class="title1">收益分析</view>
			<view class="text">用户通过认购雲创科技相关的5G高科技产品，每日产生相对应的收益。</view>
		
		<!-- 	<view class="title1">收益分析</view> -->
			<view class="title1">例：刷脸支付：</view>
			<view class="text">刷脸支付盈利点一：流水返佣
			只需商户运用刷脸支付产品收益，就能够取得流水返佣，商户量能够累积，商户越多，买卖流水越大，返佣越多。
		 刷脸支付盈利点二：软件收益
			
			
			 技术效劳提供的小程序、会员管理等系统软件，能够收取相应的运用费用。
			
			  刷脸支付盈利点三：广告收益
			 刷脸支付设备在支付完成后会有弹窗广告，每次支付完成就会有广告曝光，广告曝光量会有相应的收益。
			 刷脸支付盈利点四:下级代理推广员
			  能够招募下级代理加盟商，收取加盟费用。</view>
			
			<view class="title1">  例：5G VR</view>
			<view class="text">  5GVR的营收渠道可以通过拍摄全景出售来盈利，一个拍摄下来几千，大的上万，单位时间收益上来说是非常快的。
			
			 VR可以从拍摄，可以付费也可以免费，付费就直接收拍摄费。
			  免费拍摄的可以通过后期建立全景库，通过广告，为商家提供服务，如接入支付，提供广告宣传等来增加巨大的盈利。</view>
			
			<view class="text">  VR显示体验馆，人们付费体验虚拟现实，将会带来巨大收益，由于播放的是短片，一个座舱的设备一天就可接待超过一百人，假如每人的收费率是三十元，一天的营收额就达到了三千元。一百个店，一千个店，一万个店所带来的盈利额是非常巨大的。</view>
			<view class="title1">  例：城市智能杆：</view>
			
			<view class="text">  城市智能杆增加收益有：充电导航，充电预约、计费，支付、充电费用查询及统计;
增值服务:如停车位信息查询与预约。提供电动汽车充电数据及充电设施 与用户等大数据统计分析服务。司机端手机APP缴费, 地图定位车位，导航。
信息发布:在公共场所，行人往来频繁或人群集中地，发布受众面广的公告或公益广告等，比如“黄色暴雨预警”、“公益广告”、“园区指南”等。
个别地点可结合招商引资或商业推广应用:根据区域特点、路段人流密度，投放招商类或商业推广类广告信息，服务区域发展需要、等等收费方式。
</view>
			<view class="title1"> 例5G基站：</view>
			<view class="text">收益来自于通过基站上网或者打电话、发短信的用户话费。一个基站下打电话的用户越多，上网的用户越多，这个基站收益所带来的收益是非常巨大的。

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
.title2{text-align: center;font-size: 35upx;padding: 10px 0;}
.content{padding: 35rpx 35rpx 0;width: auto !important;}
.text{color: rgb(91, 96, 103);font-size: 30upx;line-height: 60rpx;}
.color1{color: #ff6600;}
.mimage{width: 100%;margin-top: 40rpx;}

.question{color: #ff6600;font-size: 35upx;padding: 10rpx 0;}
.answer{font-size: 30upx;line-height: 55rpx;}
</style>
