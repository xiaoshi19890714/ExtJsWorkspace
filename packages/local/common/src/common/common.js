Ext.define('Person', {
	config : {
		name : '张三'
	},
	statics : {// 静态的方法或属性
		static_id : '我是Person的id,不能被子类所继承!!'
	},
	inheritableStatics : { // 静态的方法或属性
		inheritableStatics_id : '我是Person的id,我可以被子类继承!!'
	},
	constructor : function(config) {
		var me = this;
		me.initConfig(config);
	}
});

Ext.define('User', {
	extend : 'Person',
	config : {
		age : 23
	}
});