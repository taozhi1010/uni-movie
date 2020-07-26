<template>
	<view class="container">
		<view class="tabs">
			<view 
				class="tab" 
				:class="{'tab-check':item.type===check.type}" 
				v-for="(item,index) in tabs" 
				:key="index"
				@click="tabChange(item)"
			>{{item.text}}</view>
		</view>
		<scroll-view class="container" scroll-y="true">
			<view class="project-list">
				<app-project 
				v-for="(item, index) in data" 
				:key="index" 
				:data="item" 
				:showImage="false"
				:investClick="investClick"></app-project>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
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
				check: {text: "全部", type: 0}
			}
		},
		methods: {
			investClick(item){
				uni.navigateTo({
				    url: '/pages/project/project?id=' + item.id
				});
			},
			tabChange(tab){
				this.check = tab
				this.projectList()
			},
			projectList(){
				this.api.projectListType(0, 10, this.check.type).then(res => {
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
			},
			onShow(){
				this.projectList()
			}
		}
	}
</script>

<style>
.tabs{display: flex;background-color: white;font-size: 30upx;border-bottom: 1rpx solid #dedede;}
.tab{flex: 1;text-align: center;padding: 20rpx 0;}
.tab-check{color: red;border-bottom: 5rpx solid red;}
.project-list{display: flex;padding: 0 30rpx;flex-direction: column;background-color: white;padding-bottom: 15rpx;}
</style>
