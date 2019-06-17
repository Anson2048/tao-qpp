var Http = {
//	HOST:'http://tb.besoft.top/api/amoy/',
//	HOST:'http://192.168.1.184/api/amoy/',
	HOST:'https://api.kuguayouhui.com/api/amoy/',
//	HOST:'http://www.taoma.my/api/amoy/',
	API_URL:{
		'WE-LOGIN':'auth/we-login',
		'NEW-LOGIN':'auth/new-login',
		'LOGIN':'auth/login',
		'REGISTER':'auth/register',
		'SMS-VERIFY':'auth/sms-verifycode',	/*短信验证码*/
//		'VALIDATE-SMS-CODE':'/api/amoy/auth/validate-sms-code',
		'':'auth/validate-sms-code',		
		'CAPTCHA':'auth/captcha',
		'USER':'user/user-info',
		'UPGRADE':'user/pay-info',
		'UPDATE-NICK':'user/update-nick',
		'UPDATE-MOBILE':'user/update-mobile',
		'GOODS-SHARE':'user/create-share',
		'QRCODE':'user/invite-code',
		'INVITE':'user/invite',
		'TEAM':'user/team',
		'COLLECT':'user/collection',             //收藏
		'INDEX':'taobao-buy/index',				//首页数据  淘宝 1  京东 21  拼多多31
		'INFO':'taobao-buy/item-info',			//商品详情
		'RM-COLL':'user/delete-collection',		//取消收藏
		'GET-QUAN':'user/get-url',				//淘宝获取优惠券
		'PDD-QUAN':'user/get-pdd-url',			//获取拼多多优惠券
		'JD-QUAN':'user/get-jd-url',		    //获取京东优惠券		
		'INCOME':'user/income-list',		    //收益详情
		'BIND-RECOMMEND':'user/bind-recommend', //绑定推荐码
		'CREATE-TPWD':'taobao-buy/create-tpwd', //创建淘口令
		'TOTAL-INCOME':'user/total-income',		//收益
		'CLT-LIST':'user/collection-list',		//收益列表
		'FANS-LIST':'user/team-info',			//粉丝列表
		'TAO-XUAN':'taobao-buy/featured-tb',	//淘宝精选
		'JD-XUAN':'taobao-buy/featured-jd',		//京东精选
		'PDD-SEARCH':'taobao-buy/featured-pdd', //拼多多精选  拼多多全网搜
		'ORDER':'user/order-list',				//订单列表
		'COUNT':'user/order-count',				//订单统计
		'RESET':'auth/reset',					//修改密码
		'WITHDRAW':'user/withdraw',				//获取提现账号信息
		'GETINFO':'user/get-info',				//获取绑定账号信息
		'DRAW-LIST':'user/withdraw-list',		//提现记录
		'MESSAGE':'user/message-list',			//消息记录
		'BIND':'user/bind-info',				//绑定提现账号
		'COM-LIST':'user/commission-list',		//分佣列表
		'TAO-SEARCH':'taobao-buy/get-search',	//淘宝全网搜
		'GETITEM':'taobao-buy/get-item',		//首页nav
		'LOGINOUT':'auth/login-out',			//退出登录 清除服务器token
		'UPDATE':'system/check',				//更新检测
		'UPDATE-T':'taobao-buy/update',			//更新
		'IMGSHARE':'user/create-share',			//创建分享图片
		'TAO-XUAN':'taobao-buy/featured-tb',	//淘宝精选
		'JD-XUAN':'taobao-buy/featured-jd',		//京东精选
		'PDD-XUAN':'taobao-buy/featured-pdd',	//拼多多精选
		//'CREART-URL':'taobao-buy/create-url',	//自动搜索粘贴板
		'CREART-URL':'taobao-buy/goods-item',	//自动搜索粘贴板
		'GET-MENU':'taobao-buy/menu',
		'GET-SHARE':'user/one-share',
		'GET-CUSTOM':'taobao-buy/get-custom',
		'GET-BONUS':'user/bonus',
		'BONUSLIST':'user/bonus-list',
		'TRANSFER':'user/transfer',
		'PRODUCTS':'user/product',
		'ADDORDER':'user/add-order',
		'CHECKCODE':'auth/check-invite-code',
		'JUTUAN':'taobao-buy/group-buy',
		'FINANCE':'user/finance',
		'ACTIVE':'user/active',
		'ACTIVE-LIST':'user/active-list',
		'DEL-ORDER':'user/del-order',
		'GET-RELATION':'user/get-user-info',
		'GUESS-LIKE':'taobao-buy/guess-like',
		'NIGTH':'taobao-buy/special-price'
	},
	post: function(params){
		
		var token = this.getToken();
		if(token){
			mui.ajax(this.HOST+this.API_URL[params.api],{
			data: params.data,
			type:'post', 
			timeout:10000, 
			headers:{'token':token},
			success: function(res){
				if(params.api == 'GOODS-SHARE'){
					params.pic && params.pic(res);
					return;
				}
				if(typeof res == "string"){
					res = JSON.parse(res)
				}
				
				if(res.code==1){
					if(params.msg != 'none'){
						//plus.nativeUI.toast(res.msg);
					}
					params.one && params.one(res)
				}else if(res.code==403){
					//plus.nativeUI.toast('您已掉线或未登录，请登录');
					plus.storage.clear('userInfo');
					params.lose && params.lose(res);
				}else if(res.code==0){
					params.success && params.success(res)
				}else if(res.code == 2){
					params.two && params.two(res)
				}
				
			},
		    error: function(xhr,type,errorThrown){
				params.error && params.error(xhr);
				//console.log(type);
				plus.nativeUI.closeWaiting()
				if(xhr.status==500){
					mui.toast(params.api);
				}
			}
		})
		}else{
			mui.ajax(this.HOST+this.API_URL[params.api],{
			data: params.data,
			type:'post', 
			success: function(res){
				
				if(params.api == 'GOODS-SHARE'){
					params.pic && params.pic(res);
					return;
				}
				if(typeof res == "string"){
					res = JSON.parse(res)
				}
				
				if(res.code==1){
					if(params.msg != 'none'){
						//plus.nativeUI.toast(res.msg);
					}
					params.one && params.one(res)
				}else if(res.code==403){
					//plus.nativeUI.toast('您已掉线或未登录，请登录');
					plus.storage.clear('userInfo');
					params.lose && params.lose(res);
				}else if(res.code==0){
					params.success && params.success(res)
				}else if(res.code == 2){
					params.two && params.two(res)
				}
				
			} ,
		    error: function(xhr,type,errorThrown){
				params.error && params.error(xhr);
				//console.log(type);
				plus.nativeUI.closeWaiting()
				if(xhr.status==500){
					mui.toast(params.api);
				}
			}
/* 			error: function(XMLHttpRequest, textStatus, errorThrown) {
 alert(XMLHttpRequest.status);
 alert(XMLHttpRequest.readyState);
 alert(textStatus);
console.log(errorThrown);
   },
   complete: function(XMLHttpRequest, textStatus) {
 this; // 调用本次AJAX请求时传递的options参数
   } */
		})
		}
		
	},
	get: function(params){
		var token = this.getToken();
		mui.ajax(this.HOST+this.API_URL[params.api],{
			data: params.data,
			type:'get',
			headers:{'Authorization':token},
			success: function(res){
				console.log('get>success') 
				 
				if(res.code==1){
					plus.nativeUI.toast(res.msg);
				}else if(res.code==0){
					params.success && params.success(res)
				}
			},
			error: function(xhr,type,errorThrown){
				if(xhr.status==500){
//					mui.toast('没有查询到对应宝贝，请换一种方式再试');
					console.log(500)
				}
			}
		})
	},
	getToken: function(){
		var userInfo = plus.storage.getItem('userInfo');
		if(userInfo){
			return JSON.parse(userInfo).token;
		}else {
			return '';
		}
	}
}
