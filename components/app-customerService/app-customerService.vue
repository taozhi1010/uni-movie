<template>
	<view class="container">
		<web-view :webview-styles="webviewStyles" src="http://103.39.16.122:8083/getrich/model/loginHtml"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
