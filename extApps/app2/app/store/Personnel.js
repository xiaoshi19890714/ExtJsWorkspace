Ext.define('ExtApp2.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel-app2',

    model: 'ExtApp2.model.Personnel',

    data: { items: [
        { name: 'Jean Luc-app2', email: "jeanluc.picard@enterprise.com", phone: "555-111-1111" },
        { name: 'Worf-app2',     email: "worf.moghsson@enterprise.com",  phone: "555-222-2222" },
        { name: 'Deanna-app2',   email: "deanna.troi@enterprise.com",    phone: "555-333-3333" },
        { name: 'Data-app2',     email: "mr.data@enterprise.com",        phone: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
