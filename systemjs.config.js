var map = {
    "rxjs": "node_modules/rxjs",
    "@angular/common": "node_modules/@angular/common",
    "@angular/compiler": "node_modules/@angular/compiler",
    "@angular/core": "node_modules/@angular/core",
    "@angular/forms": "node_modules/@angular/forms",
    "@angular/platform-browser": "node_modules/@angular/platform-browser",
    "@angular/platform-browser-dynamic": "node_modules/@angular/platformbrowser-dynamic"
};
var packages = {
    "rxjs": { "defaultExtension": "js" },
    "@angular/common": {
        "main": "bundles/common.umd.js",
        "defaultExtension": "js"
    },
    "@angular/compiler": {
        "main": "bundles/compiler.umd.js",
        "defaultExtension": "js"
    },
    "@angular/core": { "main": "bundles/core.umd.js", "defaultExtension": "js" },
    "@angular/forms": { "main": "bundles/forms.umd.js", "defaultExtension": "js" },
    "@angular/platform-browser": { "main": "bundles/platformbrowser.umd.js", "defaultExtension": "js" },
    "@angular/platform-browser-dynamic": { "main": "bundles/platformbrowser-dynamic.umd.js", "defaultExtension": "js" },
    "app": {
        format: 'register',
        defaultExtension: 'js'
    }
};
var config = {
    map: map,
    packages: packages
};
System.config(config);