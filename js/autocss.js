//自适应布局iphone
! function(a) {
			
					a.HB_DISABLE_AJAX_FORCE_HTTPS = !0;
			
					function b() {
						a.rem = f.getBoundingClientRect().width / 16, f.style.fontSize = a.rem + "px"
					}
					//console.log(a.devicePixelRatio);
					//var c, d = a.navigator.appVersion.match(/iphone/gi) ? a.devicePixelRatio : 1.77777,
					var c, d = a.navigator.appVersion.match(/iphone/gi) ? 642/document.body.clientWidth : 1,
						//var c, d =640/document.body.clientWidth;
						//var c, d =1.777777777;
						e =1 / d,
						f = document.documentElement,
						g = document.createElement("meta");
					if (a.dpr = d, a.addEventListener("resize", function() {
							clearTimeout(c), c = setTimeout(b, 200)
						}, !1), a.addEventListener("pageshow", function(a) {
							a.persisted && (clearTimeout(c), c = setTimeout(b, 200))
						}, !1), f.setAttribute("data-dpr", d), g.setAttribute("name", "viewport"), g.setAttribute("content",
							"initial-scale=" + 1 + ", maximum-scale=" + e+ ", minimum-scale=" + e + ", user-scalable=no, viewport-fit=cover"
						), f.firstElementChild) f.firstElementChild.appendChild(g);
					else {
						var h = document.createElement("div");
						h.appendChild(g), document.write(h.innerHTML)
					}
					b()
				}(window);