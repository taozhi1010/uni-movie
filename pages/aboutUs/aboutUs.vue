<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<!-- <view class="title1 " style="place-content: ;">了解我们</view>
			<view class="title1">总部</view> -->
			<view class="text">雲創科技 （香港） 有限公司成立于2011年10月6日 </view>
			<view class="text">英文名称：3C TECHNOLOGY CO., LIMITED </view>
			<view class="text " >董事长  ：周毅诚</view>
			<view class="text">公司编号：1669817</view>
			<view class="text">公司地址：香港特别行政区油尖旺区港威大夏-6座</view>
			
			<view class="title1" style="margin-top: 20rpx;"><!-- 客服电话 --></view>
			<view class="text"><!-- 雲創科技 （香港） 有限公司成立于2011-10-06年 -->雲創科技 （香港） 有限公司注册资金8085万元，是获“高新科研技术企业”认定的科研企业。雲創科技一直致力于立足中国，放眼全球的产业布局。立足中国，世界将是最大的市场；放眼全球，将是世界最大的研发生产基地。我们始终以CSR（企业社会责任）为核心，秉承 中国科研“创”及全球 的研发理念，致力于全球性尖端5G科技的研发与应用。</view>
			
			<view class="title1" style="margin-top: 20rpx;"><!-- 企业客服QQ --></view>
			<view class="text">技术，是企业发展的重要依托。雲創科技 （香港） 有限公司建有5G高新技术研发中心和5G工程技术研发中心。雲創科技 （香港） 有限公司研发中心下设八百多个研发部、专业办公室及试验中心，是高新技术研究、高新技术产品开发、科技成果转化等为一体的5G科研开发部门。雲創科技 （香港） 有限公司现有4500多名员工，其中拥有各类工程技术人员1360多人，中高级管理人员400多人，一线科技研发人员2800多人。坚持以科技研发为导；始终围绕“人无我有，人有我优”的研发精神。 </view>
		<!-- 	<view class="text">财务客服：729966553 </view>
			<view class="text">工作时间：08:00-22:00 <!-- (工作曰）09:00-18:00 (节假日） </view>-->
	<!-- 		<view class="text">在线帮助：http://www.zcgt88.com/about/?xsbz</view>
			 -->
			<view class="title1" style="margin-top: 20rpx;"><!-- 媒体采访 --></view>
			<view class="text">
奉行“向用户提供具有竞争优势的产品”这一战略思想；借助科学、严谨的研发管理模式，自动化、专业、高效的研发团队，形成雲創科技 （香港） 有限公司的研发管理体系，造就先进优质的5G科研产品。在研发管理上，由研发中心根据企业发展需求，制定项目开发计划，确保研发产品的先进性和实用性；项目评审委员会对申报的项目进行全面的分析和研究，确定项目开发的可行性；在产品研发过程中，严格贯彻执行质量保证体系，进行新品研发的过程控制和跟踪，确保新品的研发质量和效率；新品研发结束后，由项目鉴定委员会进行多方面详细的审核，确定产品的鉴定和投产工作。</view>
			
		<!-- 	<view class="title1" style="margin-top: 20rpx;">商务合作</view>
			<view class="text">如果贵公司希望与我丨门建立商务合作关系，形 成优势互补，请将合作意向进行简要描述并发 送邮件至：</view>
			<view class="text">web@zcgt88.com，我们会尽快与您联系。</view>
			<view class="text">备注：雲創科技目前暂时没有线下加盟/线下开 店等商务合作模式，谢谢关注。</view> -->
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
