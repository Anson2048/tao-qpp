function sendMeta(){
			var wvB=plus.webview.currentWebview();          //获取当前窗口的WebviewObject对象，即B  
            var wvA=wvB.opener();                           //获取当前窗口的创建者，即A  
            wvA.evalJS("showAG('"+document.title+"')");        //执行父窗口中的方法  A中的showAG方法  
          
}