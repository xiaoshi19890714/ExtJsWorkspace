/**
 * This class is the controller for the main view for the application. It is
 * specified as the "controller" of the Main view class.
 */
Ext.define('ExtApp1.view.main.MainController', {
	extend : 'Ext.app.ViewController',

	alias : 'controller.main',

	onItemSelected : function(sender, record) {
		alert(User.static_id);
		alert(User.inheritableStatics_id);
		alert(Person.static_id);
		Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
	},

	onConfirm : function(choice) {
		if (choice === 'yes') {
			//
		}
	}
});
