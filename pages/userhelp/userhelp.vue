<template>
	<view class="container">
		<scroll-view class="content" scroll-y="true">
			<view class="title1">新手帮助</view>
			<view class="question">一、如何进行注册呢？</view>
			<view class="answer">在网站的右上方有（登陆/注册）字样，点击注册后输入相关信息就可以完成注册，注册时需要填写QQ微信,请如实填写。</view>
		
		<!-- 	<view class="question">二、手机没有收到验证码怎么办？</view>
			<view class="answer">1、请检查您的手机号码是否输入正确；</view>
			<view class="answer">2、如号码无误，请重新获取验证码；</view>
			<view class="answer">3、有可能是因为您过于频繁点击获取验证码，请1小时以后再尝试获取。</view>
		 -->
			<view class="question">二、为什么会登录失败？</view>
			<view class="answer">1、请检查您的用户名(或手机号码)及密码是否输入正确；如果忘记密码，您可以联系在线客服"重新设置；</view>
			<view class="answer">2、浏览器点击工具——Internet选项——Internet临时文件下：删除cookies、删除文件，点"确定"。关闭浏览器，再重新登陆；</view>
			<view class="answer">3、如果以上操作后，仍然无法登录，请与在线客服联系。</view>
						
			<view class="question">三、为什么我的实名认证无法通过？</view>
			<view class="answer">1、请检查您的姓名、身份证号码是否输入正确；</view>
			<view class="answer">2、请检查您的身份证号码是否已在其他用户名上做过实名认证；</view>
			<view class="answer">3、如果还是认证不通过，请联系在线客服进行处理。</view>
			
			<view class="question">四、认证成功后，身份证号码可以更换吗？</view>
			<view class="answer">不可以更换，为保障用户账号安全，实名认证通过后不能修改。</view>
			
			<view class="question">五、可以绑定多张银行卡吗？</view>
			<view class="answer">不可以，每次提现只能使用绑定的单张银行卡进行提现。</view>
			
			<view class="question">六、在雲創科技平台认购是否需要费用？</view>
			<view class="answer">平台对投资而言是没有任何费用的，注册免费，充值，均无需手续费，且不收取任何资金管理费。</view>
			
			<view class="question">七、充值是否有上限？</view>
			<view class="answer">雲創科技对充值金额无限制，短信验证码充值银行有支付限额，使用网银盾或电子密码器充值单笔最高上限50000元，充值额度请参照各大银行标准，您可以咨询在线客服或拨打银行客服电话查询。</view>
		
			<view class="question">八、提现多长时间可以到账？</view>
			<view class="answer">在您做出提现申请后提现到账时间是1-10分钟，具体时间以银行到账为准。（只限工作时间08:00-22:00内，22:00以后提交，顺延至下个工作日到账。）</view>
		
			<view class="question">九、投资金额有限制吗？</view>
			<view class="answer">雲創科技平台最低起投金额为100元，投资金额为1的整倍数，上不封底。</view>
		
			<view class="question">十、充值后没有参与投资可以提现吗？</view>
			<view class="answer">不可以，为了防止个别用户恶意套现,充值成功之后未进行投资不得提现。</view>
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
