# ExtJsWorkspace
演示ExtJs Workspace, Package, 多App集成

准备工作:

	extjs6.5.1 sdk

	java
	
	sencha

将代码下载到本地:

git clone git@github.com:xiaoshi19890714/ExtJsWorkspace.git

按顺序执行:

	cd ExtJsWorkspace
  
	sencha workspace install --framework=/path/ext-6.5.1
	
	cd extApps/app1
	
	sencha app build (目的是初始化代码,生成bootstrap.js)
	
	cd ../app2
	
	sencha app build (目的是初始化代码,生成bootstrap.js)
	
此时准备初始化工作已经完毕

进入到app1或app2任一目录,执行:
	
	sencha app watch
	
在浏览器中访问:
	http://localhost:1841
