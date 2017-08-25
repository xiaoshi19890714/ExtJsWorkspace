/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
//Ext.Loader.setConfig({
//        paths: {
//            'Common': '../packages/local/common'
//        }
//    });
Ext.application({
    extend: 'ExtApp1.Application',

    name: 'ExtApp1',

    requires: [
        // This will automatically load all classes in the ExtApp1 namespace
        // so that application classes do not need to require each other.
        'ExtApp1.*'
    ],
    
    // The name of the initial view to create.
    mainView: 'ExtApp1.view.main.Main'
});

