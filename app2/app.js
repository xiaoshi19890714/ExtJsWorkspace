/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ExtApp2.Application',

    name: 'ExtApp2',

    requires: [
        // This will automatically load all classes in the ExtApp2 namespace
        // so that application classes do not need to require each other.
        'ExtApp2.*'
    ],

    // The name of the initial view to create.
    mainView: 'ExtApp2.view.main.Main'
});
