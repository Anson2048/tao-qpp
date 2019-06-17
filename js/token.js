function(){
		var userInfo = plus.storage.getItem('userInfo');
		console.log(userInfo);
		if(!userInfo){
			/* var all= plus.webview.all();
			var launch=plus.webview.getWebviewById('login');
			for(var i=0;i<all.length;i++)
			{
				//console.log(all[i]+","+launch);
				if(all[i]==launch||all[i]==plus.webview.getLaunchWebview())
				continue;
				all[i].close();
				all[i].clear();
			} */
			
			var login = plus.webview.getWebviewById('login');
			if(!login)
			{
				login = plus.webview.create('../auth/login.html', 'login');
				login.show();
			}
		}
	}