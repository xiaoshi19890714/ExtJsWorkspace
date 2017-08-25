/**
 * This view is an example list of people.
 */
Ext.define('ExtApp1.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist-app1',

    requires: [
        'ExtApp1.store.Personnel'
    ],

    title: 'Personnel',

    store: {
        type: 'personnel-common'
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
