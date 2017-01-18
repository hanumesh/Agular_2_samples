"use strict";
var utilities_1 = require("./utilities");
var consumer = (function () {
    function consumer() {
    }
    consumer.prototype.dispalyResult = function () {
        var math = new utilities_1.mathUtil();
        console.log(math.add(1, 2));
        console.log(math.sub(1, 2));
    };
    return consumer;
}());
var obj = new consumer();
obj.dispalyResult();
