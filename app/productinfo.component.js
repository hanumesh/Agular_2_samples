System.register(['@angular/core', './productinfo.model'], function(exports_1, context_1) {
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
    var core_1, productinfo_model_1;
    var ProductInfoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productinfo_model_1_1) {
                productinfo_model_1 = productinfo_model_1_1;
            }],
        execute: function() {
            ProductInfoComponent = (function () {
                function ProductInfoComponent() {
                    this.Message = "The prouct Information system";
                    this.product = new productinfo_model_1.ProductInfo(0, '', 0, '');
                    this.products = new Array();
                    this.categories = ['ECT', 'ETl', 'ETR', 'HR'];
                }
                ProductInfoComponent.prototype.save = function () {
                    this.products.push(this.product);
                };
                ProductInfoComponent.prototype.clear = function () {
                    this.product = new productinfo_model_1.ProductInfo(0, '', 0, '');
                };
                ProductInfoComponent.prototype.ngOnInit = function () { };
                ProductInfoComponent = __decorate([
                    core_1.Component({
                        selector: 'product-data',
                        templateUrl: './app/productinfo.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductInfoComponent);
                return ProductInfoComponent;
            }());
            exports_1("ProductInfoComponent", ProductInfoComponent);
        }
    }
});
