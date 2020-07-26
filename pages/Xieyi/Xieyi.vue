<template>
	<view class="container">
		<view class="content">
			</br>
			<view style="font-size: 35rpx;">			
				甲方：{{data.userName}}</br></br>
				乙方：雲創科技 （香港） 有限公司</br></br>
				签署时间: {{data.ctrateTime}}</br></br>	
			</view>

			甲乙双方经过友好协商，本着平等互利、友好合作的原则，就甲方认购乙方5G产品事宜达成如下协议：</br>
			
			1、甲方与乙方签订本协议，按本协议约定认购带来的收益。</br>
			
			2、甲方确保自己符合相关法律法规规定的合格投资人标准， 并完全明白该项投资的性质和所涉及的风险，详细了解和审慎评估投资计划、风险评估及预期收益等基本情况，在审慎考虑后决定投资与自身风险承受能力和资产管理需求匹配的风险投资项目。甲方可随时通过乙方平台关注信息情况，及时获取相关信息。</br>
			
			3、甲方对乙方认购资金的使用，应在国家现行有关法律法规下，合法，合规运用，确保资金安全。在合同期限内，乙方有责任和义务对甲方的资金保值增值，并对甲方的个人财富，家庭情况等资料保密，不得对其他人泄漏。</br>
			
			4、本协议于甲方在5G云创认购期内，在乙方平台上点击确认并提交成功时成立并生效。按照本合同的约定向甲方分配本金和收益。</br>
			
			5、双方在合作的同时，维护好对方的信誉，禁止做出损害对方权益的言论和行为，由此给对方带来名誉、经济等方面的损失，受害方可终止合作并向对方追偿损失；乙方有权对甲方的投资资金自主使用和管理，但应克尽职守的管理、运作资金，以甲方最大利益为宗旨，谨慎管理、保护甲方的财产权益。</br>
			
			</br>
			<view style="font-size: 35rpx;">承诺和保证：</view>
			</br>
			
			1、 双方在此承诺和保证，其在本合同项下的承诺和保证为真实、准确的;</br>
			
			2、双方在此承诺和保证，其均系依据中国法律组建和有效存续的法人或其他组织，具有一定的风险承受能力;</br>
			
			3、双方在此承诺和保证，其将不从事任何有损于本投资计划的行为;</br>
			
			4、甲方在此承诺和保证其本金为其自有合法资金，并且投向本计划将不会违反任何法律法规的有关规定;</br>
			
			5、甲方在此承诺和保证符合其投资条件的业务发生时出资。</br>
			
			6、甲乙双方声明并承诺：甲乙双方一致同意并确认本协议采用电子合同形式制成，对双方均具有法律约束力。</br>
			
			</br>
			<view style="font-size: 35rpx;">合同的生效、变更与解除：</view>
			</br>
			
			1、本合同经甲方代表人或授权代理人和乙方法定代表人或负责人或授权代理人签章(签字或加盖名章)并加盖公章或合同专用章后生效。</br>
			
			2、本合同生效后，除本合同已有约定的外，甲乙任何一方均不得擅自变更或解除本合同;如确需变更或解除本合同，应经甲乙双方协商一致。</br>
			
			</br>
			<view style="font-size: 35rpx;">保密条款：</view>
			</br>
			
			双方保证对所有知晓的涉及对方商业机密文件、资料、数据、计划、商业意向等不得向第三方公开(乙方有要求的除外)。本协议解除或者终止后，双方仍应承担保密责任。</br>
			
			</br>
			<view style="font-size: 35rpx;">争议解决：</view>
			</br>
			
			凡因本合同发生的及与本合同有关的任何争议，甲乙双方可协商解决;协商不成的，双方均同意采取以下方式解决：</br>
			
			1；由本协议引起或与本协议有关的任何争议，甲乙双方应尽可能通过友好协商解决。如协商不成的，任何一方有权向所在地法院提起诉讼。</br>
			2：向所在地仲裁委员会申请仲裁。</br>
			
			本协议一式两份，双方各执一份，具有同等法律效力。</br>
			
			</br>
			<view style="font-size: 35rpx;">
				甲方（签字）：{{data.userName}}</br></br>
				<view style="display: flex;align-items: center;">乙方（签字）：雲創科技（香港） 有限公司	 				</view>
				<view style="display: flex;align-items: center;">乙方（盖章）：<image src="../../static/zhang.png" style="width: 160rpx;height: 100rpx;" mode="aspectFit"></image></view>
				到期时间: {{data.endTime}}</br></br>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		onLoad: function (option) {
			this.id = option.id
		},
		data() {
			return {
				data: {}
			}
		},
		methods: {
			htDetails(){
				console.log("this.id", this.id)
				if(this.id === undefined){
					return
				}
				
				this.api.htDetails(this.id).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						this.data = res.data
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
			this.htDetails()
		}
	}
</script>

<style>
	.content{padding: 30rpx;}
</style>
