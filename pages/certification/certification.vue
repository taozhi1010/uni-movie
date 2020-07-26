<template>
	<view class="container">
		<view class="content">
			<view class="items">
				<u-cell-group>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="statusValue"
						label="状态"
						:disabled="status"
					>
					</u-field>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="form.name"
						label="姓名"
						placeholder="请填写姓名"
						:disabled="status"
					>
					</u-field>
					<u-field
						style="border-bottom: 1rpx solid #dedede;"
						v-model="form.number"
						label="身份证"
						placeholder="请填写身份证号码"
						:disabled="status"
					>
					</u-field>
				</u-cell-group>
			</view>
		</view>
		<view class="bottom-btn" @click="certification" v-if="!status">实名认证</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: true,
				statusValue: '已实名',
				form: {
					name: '',
					number: ''
				}
			}
		},
		methods: {
			getStatus(){
				this.api.userName().then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						if(res.data.status === 0){
							this.status = true
							this.statusValue = '已实名'
							this.form = res.data
						}else{
							this.status = false
							this.statusValue = '未实名'
						}
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
				.catch(e => {
					console.log(e)
					uni.hideLoading()
					uni.showToast({
					    title: '请求错误',
					    duration: 2000
					});
				})
			},
			certification(){
				uni.showLoading({
					title: '认证中...',
					mask: true
				});
				
				this.api.certification(this.form).then(res => {
				    console.log(res)
					uni.hideLoading()
					if(res.code === "0"){
						uni.showToast({
						    title: '认证成功',
						    duration: 2000
						});
						this.status = true
						this.statusValue = '已实名'
					}else{
						uni.showToast({
						    title: res.msg,
						    duration: 2000
						});
					}
				})
				.catch(e => {
					console.log(e)
					uni.hideLoading()
					uni.showToast({
					    title: '请求错误',
					    duration: 2000
					});
				})
			}
		},
		created(){
			this.getStatus()
		}
	}
</script>

<style>
.items{display: flex;flex-direction: column;font-size: 30upx;}
</style>
