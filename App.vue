<script>
export default {
	onLaunch: function() {
		uni.onTabBarMidButtonTap(()=>{
			console.log("点击了")
			// 这里可以根据 个人需求 做点击处理，
			// 本人需进行页面跳转。
			// uni.navigateTo({
			// 	url:"../new/new",
			// 	animationType:'slide-in-bottom'
			// })
		})
		console.log('App Launch');
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

@import "uview-ui/index.scss";

page {
	height: 100% !important;
	overflow: scroll !important;
}

uni-page-body, uni-page-refresh{
	height: 100% !important;
	overflow: scroll !important;
}

uni-input{
	width: 100%;
}

.container{
	height: 100% !important;
	display: flex !important;
	flex-direction: column !important;
	overflow: scroll !important;
	/* font-family: "Microsoft Yahei",Tahoma,Helvetica, "Lucida Grande", "Luxi Sans",Arial,sans-serif; */
}

.content{
	height: 100% !important;
	display: flex !important;
	flex-direction: column !important;
	overflow: scroll !important;
}

.uni-noticebar{
	margin-bottom: 0 !important;
}

.split{background-color: #F5F5F5;height: 10rpx;}

.bottom-btn{display: flex;height: 100rpx;justify-content: center;align-items: center;
background: rgb(216, 30, 6);color: white;}

.topbar{height: 100rpx;background-color: white;
border-bottom: 1rpx solid #dedede;position: relative;}
.topbar-center{height: 100rpx;width: 100%;display: flex;justify-content: center;align-items: center;font-size: 35rpx;}
.topbar-center-image{height: 80rpx;}
.topbar-right{right: 0;height: 100rpx;position: absolute;top: 0;display: flex;justify-content: center;align-items: center;
padding: 0 30rpx;}
.topbar-left{left: 0;height: 100rpx;position: absolute;top: 0;display: flex;justify-content: center;align-items: center;
padding: 0 30rpx;}
</style>
