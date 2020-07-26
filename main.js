import Vue from 'vue'
import App from './App'
import {request, api} from './http/http.js'
import uView from "uview-ui";
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"
import MescrollUni from "@/components/mescroll-uni/mescroll-uni.vue"

Vue.use(uView);
Vue.component('mescroll-body', MescrollBody)
Vue.component('mescroll-uni', MescrollUni)	

Vue.config.productionTip = false
Vue.prototype.request = request;
Vue.prototype.api = api;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()

