System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductInfo;
    return {
        setters:[],
        execute: function() {
            ProductInfo = (function () {
                function ProductInfo(ProductId, ProductName, Price, Category) {
                    this.ProductId = ProductId;
                    this.ProductName = ProductName;
                    this.Price = Price;
                    this.Category = Category;
                }
                return ProductInfo;
            }());
            exports_1("ProductInfo", ProductInfo);
        }
    }
});
