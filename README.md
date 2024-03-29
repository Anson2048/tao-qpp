## tab选项卡示例教程-nativeObj原生模式tab（含底部凸起大图标）
## 概述

这是一个利用原生view控件绘制底部选项卡的示例，有以下几个特点：
1.首页显示第一个tab项内容，其余tab项内容为首页的子窗口，相比创建四个子窗口，显示速度更快，占用内存更少，消耗性能更小。
2.操作简单：选项卡常用于App首页，为加快渲染，首页的原生底部选项卡是在manifest.json中通过plus -> launchwebview -> subNViews 节点配置的；
3.绘制内容支持字体，图片，矩形区域

4.开发者自定义选项卡点击事件
5.同样支持页内绘制原生 view 控件，也就是说在非首页也可以使用此方法，参考示例：底部选项卡中央凸起悬浮大图标的绘制

#### 说明：中央凸起悬浮大图标，因涉及屏幕分辨率动态计算和为给出开发者页内手动绘制的示例的原因，放在首页plusReady事件中实现绘制的。该悬浮大图标支持点击事件，开发者可定制实现对应的点击逻辑。

## 应用截图

![截图](http://img-cdn-qiniu.dcloud.net.cn/uploads/article/20170623/04c03ba9ad4afa7d11735e52c771cf94.png)

## 快速体验

[流应用app下载](http://liuyingyong.cn/) --> 扫描下方二维码快速体验

![二维码](images/ma.png)


## 使用教程

[教程参考](http://ask.dcloud.net.cn/article/12602)

14:49:36.646  窗口标识: __uniapp__nvue
14:49:36.671  当前Webview窗口：file:///var/containers/Bundle/Application/0FF2A355-5A19-4F67-8B0E-F696951F31FE/HBuilder.app/PandoraApi.bundle/dcloud3.dat?random=-1673315283
14:49:36.691  窗口标识: HBuilder
14:49:36.714  当前Webview窗口：file:///var/mobile/Containers/Data/Application/4948C073-B80F-4030-968C-4C2E6ECA4BD6/Documents/Pandora/apps/HBuilder/www/index.html
14:49:36.741  窗口标识: list-col
14:49:36.756  当前Webview窗口：
14:49:36.779  窗口标识: goods-webview.html
14:49:36.804  当前Webview窗口：
14:49:36.825  窗口标识: html/tab-nav-scroll.html
14:49:36.848  当前Webview窗口：
14:49:36.869  窗口标识: html/home-search.html
14:49:36.892  当前Webview窗口：
14:49:36.914  窗口标识: html/tab-webview-share.html
14:49:36.939  当前Webview窗口：
14:49:36.960  窗口标识: html/tab-webview-my.html
14:49:36.981  当前Webview窗口：
14:49:37.006  窗口标识: list-goods
14:49:37.027  当前Webview窗口：file:///var/mobile/Containers/Data/Application/4948C073-B80F-4030-968C-4C2E6ECA4BD6/Documents/Pandora/apps/HBuilder/www/html/list-goods.html
