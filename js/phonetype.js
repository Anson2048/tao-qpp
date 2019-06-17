	(function(){
			var u = navigator.userAgent;
     if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
         //安卓手机
		 document.write('<meta name="viewport" content="target-densitydpi=286, width=640, user-scalable=no" />');
		 
	 } else if (u.indexOf('iPhone') > -1) {
         //苹果手机
		 document.write('<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">');
     } else if (u.indexOf('Windows Phone') > -1) {
         //winphone手机
		  document.write('<meta name="viewport" content="target-densitydpi=286, width=640, user-scalable=no" />');
     }

         
})();