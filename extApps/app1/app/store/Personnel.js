Ext.define('ExtApp1.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel-app1',

    model: 'ExtApp1.model.Personnel',

    data: { items: [
        { name: 'Jean Lucp-app1', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf-app1',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna-app1',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data-app1',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
