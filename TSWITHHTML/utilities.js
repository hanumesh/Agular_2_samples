"use strict";
var mathUtil = (function () {
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
exports.mathUtil = mathUtil;
