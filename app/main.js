System.register(['@angular/core', '@angular/platform-browser-dynamic', '@angular/platform-browser', './simple.component', './productinfo.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_dynamic_1, platform_browser_1, simple_component_1, productinfo_component_1;
    var NameModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (simple_component_1_1) {
                simple_component_1 = simple_component_1_1;
            },
            function (productinfo_component_1_1) {
                productinfo_component_1 = productinfo_component_1_1;
            }],
        execute: function() {
            // Registration of imported classs in bootstrap
            NameModule = (function () {
                function NameModule() {
                }
                NameModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule],
                        exports: [],
                        declarations: [simple_component_1.SimpleComponent, productinfo_component_1.ProductInfoComponent],
                        bootstrap: [simple_component_1.SimpleComponent, productinfo_component_1.ProductInfoComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NameModule);
                return NameModule;
            }());
            exports_1("NameModule", NameModule);
            // The call to Bootstrapper for all declarations / providers
            platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(NameModule);
        }
    }
});
