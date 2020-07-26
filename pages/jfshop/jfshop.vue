<template>
	<view class="container">
<!-- 		<view class="tabs">
			<view 
				class="tab" 
				:class="{'tab-check':item.type===check.type}" 
				v-for="(item,index) in tabs" 
				:key="index"
				@click="tabChange(item)"
			>{{item.text}}</view>
		</view> -->
		<scroll-view class="container" scroll-y="true">
			<view class="project-list">
				<app-goods 
				v-for="(item, index) in data" 
				:key="index" 
				:data="item" 
				:showImage="true"
				:investClick="investClick"></app-goods>
			</view>
		</scroll-view>
		
		<u-modal v-model="showPay"
			:mask-close-able="true" 
			:content-slot="true" 
			title="兑换" 
			confirm-text="兑换" 
			@confirm="toPay">
			<view class="slot-content">
				<u-cell-group>
					<u-field
						v-model="form.moneyPass"
						label="密码"
						placeholder="请填写密码"
						:password="true">
					</u-field>
				</u-cell-group>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		props: {
			changeTab: {
				type: Function,
				default: function(){}
			},
		},
		data() {
			return {
				// 项目数据
				data: [],
				tabs: [
					{text: "全部", type: 0},
					{text: "新手专区", type: 1},
					{text: "稳健专区", type: 2},
					{text: "长期专区", type: 3},
				],
				check: {text: "全部", type: 0},
				showPay: false,
				item: {},
				form: {
					moneyPass: ''
				}
			}
		},
		methods: {
			toPay(){
				console.log("this.item", this.item)
				
				this.form.commId = this.item.id
				this.form.moneyComm = this.item.moneyComm
				
				this.api.commUserSave(this.form).then(res => {
					console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '兑换成功',
						    duration: 2000
						});
						// this.data = res.data
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
			},
			investClick(item){
				this.item = item
				this.showPay = true
			},
			tabChange(tab){
				this.check = tab
				this.projectList()
			},
			projectList(){
				this.api.jfshopList().then(res => {
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
			this.projectList()
		}
	}
</script>

<style>
.tabs{display: flex;background-color: white;font-size: 30upx;border-bottom: 1rpx solid #dedede;}
.tab{flex: 1;text-align: center;padding: 20rpx 0;}
.tab-check{color: red;border-bottom: 5rpx solid red;}
.project-list{display: flex;padding: 0 30rpx;flex-direction: column;background-color: white;padding-bottom: 15rpx;}
</style>
