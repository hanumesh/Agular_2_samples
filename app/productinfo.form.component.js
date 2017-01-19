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
    var ProductInfoFormComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (productinfo_model_1_1) {
                productinfo_model_1 = productinfo_model_1_1;
            }],
        execute: function() {
            ProductInfoFormComponent = (function () {
                function ProductInfoFormComponent() {
                    this.Message = "The prouct Information system";
                    this.product = new productinfo_model_1.ProductInfo(0, '', 0, '');
                    this.products = new Array();
                    this.categories = ['ECT', 'ETl', 'ETR', 'HR'];
                    this.isSubmited = false;
                }
                ProductInfoFormComponent.prototype.save = function () {
                    this.products.push(this.product);
                    this.isSubmited = true;
                };
                ProductInfoFormComponent.prototype.clear = function () {
                    this.product = new productinfo_model_1.ProductInfo(0, '', 0, '');
                };
                ProductInfoFormComponent.prototype.loadForm = function () {
                    this.product = new productinfo_model_1.ProductInfo(0, '', 0, '');
                    this.isSubmited = false;
                };
                ProductInfoFormComponent.prototype.ngOnInit = function () { };
                ProductInfoFormComponent = __decorate([
                    core_1.Component({
                        selector: 'product-form',
                        templateUrl: './app/productinfoform.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], ProductInfoFormComponent);
                return ProductInfoFormComponent;
            }());
            exports_1("ProductInfoFormComponent", ProductInfoFormComponent);
        }
    }
});
