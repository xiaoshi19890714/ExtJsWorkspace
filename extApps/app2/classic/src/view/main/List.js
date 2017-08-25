/**
 * This view is an example list of people.
 */
Ext.define('ExtApp2.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist-app2',

    requires: [
        'ExtApp2.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel-app1'
    },

    columns: [
        { text: 'Name',  dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
