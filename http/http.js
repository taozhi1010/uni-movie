import uni_request from 'js_sdk/yinchengnuo-req/uni_request/uni_request.js'

// let baseURL = "http://wy6a2uei0r.52http.net"
let baseURL = "http://103.39.16.122:8083"

const request = uni_request({ // 有效配置项只有三个
    baseURL: baseURL, //baseURL
    timeout: 60000, // 超时时间
    header: {} // 设置请求头，建议放在请求拦截器中
})

// request.interceptors.request.use(async (config, ...args) => {
// 	let token = ''
// 	uni.getStorage({
// 		key: 'token',
// 		success: function (res) {
// 			token = res.data
// 		}
// 	})
// 	// console.log(token)
// 	config.header.token = token// 修改请求头
// 	return config
// })
request.interceptors.request.use(async (config, ...args) => {
 let token = ''
 // uni.getStorage({
 //  key: 'token',
 //  success: function (res) {
 //   token = res.data
 //  }
 // })
 token = uni.getStorageSync('token');
 console.log(token)
 config.header.token = token// 修改请求头
 return config
})
request.interceptors.response.use((response, ...args) => { // 响应拦截器（可以设置多个, 同时可以也可以使用异步方法）
	const { data: res } = response 
	

	if (res.code === '3') {
		console.log('未登陆')
		uni.setStorage({
		    key: 'token',
			data: '',
		    success: function (res) {
				uni.reLaunch({
					url: '/pages/index/index?tabChecked=' + 1 + "&noToken=true"
				});
			}
		});
		return response
	}
	return response
})

// 请求失败统一处理方法（可以也可以使用异步方法）
request.onerror = async (...args) => { 
	uni.hideLoading()
	// uni.showToast({
	// 	icon: 'none',
	//     title: '网络请求失败',
	//     duration: 2000
	// });
}

async function post(url){
	return request.post(url)
}

async function get(url){
	return request.get(url)
}

const api = {
	// 登陆
	login: (username, password)=>{return request.post('/getrich/login?username=' + username + '&password=' + password)},
	// 注册
	register: (username, password, mobile, pid, code)=>{
		let url = '/getrich/add?username=' + username + '&password=' + password + '&mobile=' + mobile + '&code=' + code
		if(pid !== undefined){
			url = url + '&pid=' + pid
		}
		return request.post(url)
	},
	// 投资项目查询接口
	projectList: (offset, limit, type)=> {return request.post('/getrich/system/project/list?offset=' + offset + "&limit=" + limit)},
	// 投资项目查询接口,带类型
	projectListType: (offset, limit, type)=> {return request.post('/getrich/system/project/list?offset=' + offset + "&limit=" + limit + '&type=' + type)},
	// 项目详情
	projectDetails: (id)=> {return request.get('/getrich/system/project/details?id=' + id)},
	// 购买记录
	purchaseHistory: (id)=> {return request.get('/getrich/system/project/recordList?id=' + id)},
	// 绑定银行卡
	updateBank: (form)=> {return request.get('/getrich/updateBank?bankName=' + form.bankName + '&bankCode=' + form.bankCode + '&bankCity=' + form.bankCity)},
	// 实名认证
	certification: (form)=> {return request.get('/getrich/updateName?name=' + form.name + '&number=' + form.number)},
	// 用户是否已实名认证
	userName: ()=> {return request.get('/getrich/userName')},
	// 查询用户银行卡
	userBank: ()=> {return request.get('/getrich/userBank')},
	// 支付接口
	pajectUserSave: (form)=> {return post('/getrich/system/pajectUser/save?proectId=' + form.proectId + "&money=" + form.money + "&moneyPassword=" + form.moneyPassword)},
	// 个人中心接口
	userCore: ()=> {return post('/getrich/userCore')},
	// 充值接口
	recharge: (form)=> {return post('/getrich/system/recharge/save?type=' + form.type + '&money=' + form.money)},
	// 充值code
	rechargeCode: ()=> {return get('/getrich/system/moneyChongzhi/list')},
	// 提现接口
	cashout: (form)=> {return post('/getrich/system/withdrawal/save?moneyPassWord=' + form.moneyPassWord + '&money=' + form.money)},
	// 签到接口
	signIn: (form)=> {return post('/getrich/singin/userSingin')},
	// 资金流水接口
	pajectMoneyLog: (form)=> {return get('/getrich/system/pajectMoneyLog/list?offset=' + form.offset + '&limit=' + form.limit + (form.type!==undefined?'&type='+form.type: ''))},
	// 修改登陆密码
	updatePassword: (form)=> {return get('/getrich/updatePassword?password=' + form.password + '&newPassword=' + form.newPassword)},
	// 修改支付密码
	moneyPassword: (form)=> {return get('/getrich/moneyPassword?moneyPass=' + form.moneyPass + '&newMoneyPassword=' + form.newMoneyPassword)},
	// 余额宝信息查看
	balanceDe: ()=> {return get('/getrich/system/balance/balanceDe')},
	// 余额宝转入
	yuebaoSave: (form)=> {return post('/getrich/system/balance/save?moneyPassWord=' + form.moneyPassWord + '&money=' + form.money)},
	// 余额宝转出
	yuebaoOut: (form)=> {return post('/getrich/system/balance/userSave?moneyPassWord=' + form.moneyPassWord + '&money=' + form.money)},
	// 退出登陆
	quit: ()=> {return get('/getrich/userLoginOut')},
	// 收件箱列表
	mailList: ()=> {return get('/getrich/system/inbox/list')},
	// 收件箱详情
	mail: (id)=> {return get('/getrich/system/inbox/details?id=' + id)},
	// 投资记录
	recordList: (offset, limit, type)=> {return get('/getrich/system/pajectUser/list?offset=' + offset + '&limit=' + limit + '&type=' + type)},
	// 获取二维码
	getCode: ()=> {return get('/getrich/codeImg')},
	// 获取充值列表接口
	getChargeType: ()=> {return get('/getrich/system/moneyChongzhi/list')},
	// 公告查询
	notice: ()=> {return get('/getrich/system/notice/noticeList')},
	// 提现记录
	withdrawal: (offset, limit)=> {return get('/getrich/system/withdrawal/list?offset=' + offset + '&limit=' + limit)},
	// 充值记录
	rechargeRecord: (offset, limit)=> {return get('/getrich/system/recharge/list?offset=' + offset + '&limit=' + limit)},
	// 团队列表
	teamList: (offset, limit)=> {return post('/getrich/system/team/list?offset=' + offset + '&limit=' + limit)},
	// 送现金额度查询
	addUserMoney: ()=> {return post('/getrich/system/dict/addUserMoney')},
	// 我的投资详情
	pajectDetails: (proectId)=> {return post('/getrich/system/pajectUser/details?proectId=' + proectId)},
	// 合同信息
	htDetails: (proectId)=> {return post('/getrich/system/pajectUser/userPajectdetails?proectId=' + proectId)},
	// 充值页面信息
	describe: (proectId)=> {return get('/getrich/system/moneyChongzhi/describe')},
	// 发送短信验证码
	sendUserAdd: (mobile)=> {return post('/getrich/sendUserAdd?mobile=' + mobile)},
	// 修改密码短信验证码
	sendUpdate: (mobile)=> {return post('/getrich/sendUpdate?mobile=' + mobile)},
	// 修改密码
	updatePassSend: (mobile, code, password)=> {return post('/getrich/updatePassSend?mobile=' + mobile + '&code=' + code + '&password=' + password)},
	// 积分商城列表
	jfshopList: ()=> {return get('/system/comm/list')},
	// 立即兑换
	commUserSave: (form)=> {return post('/system/commUser/save?commId=' + form.commId + '&moneyComm=' + form.moneyComm + '&moneyPass=' + form.moneyPass)},
	// 兑换记录
	commUserList: (form)=> {return get('/system/commUser/list')},
	userInvitation: (form)=> {return post('/getrich/userInvitation')},
}

export {request, api, baseURL}