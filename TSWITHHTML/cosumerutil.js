System.register(['./utilities'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var utilities_1;
    var consumer, obj;
    return {
        setters:[
            function (utilities_1_1) {
                utilities_1 = utilities_1_1;
            }],
        execute: function() {
            consumer = (function () {
                function consumer() {
                }
                consumer.prototype.dispalyResult = function () {
                    var math = new utilities_1.mathUtil();
                    console.log(math.add(1, 2));
                    console.log(math.sub(1, 2));
                };
                return consumer;
            }());
            obj = new consumer();
            obj.dispalyResult();
        }
    }
});
