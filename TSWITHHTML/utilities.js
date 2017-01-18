System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var mathUtil;
    return {
        setters:[],
        execute: function() {
            //this file will be exported
            mathUtil = (function () {
                function mathUtil() {
                }
                mathUtil.prototype.add = function (x, y) {
                    return x + y;
                };
                mathUtil.prototype.sub = function (x, y) {
                    return x - y;
                };
                return mathUtil;
            }());
            exports_1("mathUtil", mathUtil);
        }
    }
});
