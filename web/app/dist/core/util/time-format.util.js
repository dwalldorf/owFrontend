System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TimeFormatUtil;
    return {
        setters:[],
        execute: function() {
            TimeFormatUtil = (function () {
                function TimeFormatUtil() {
                }
                TimeFormatUtil.toDateTimeString = function (time) {
                    var date = new Date(time * 1000);
                    return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate() + ': ' + date.getHours() + ':' + date.getMinutes();
                };
                return TimeFormatUtil;
            }());
            exports_1("TimeFormatUtil", TimeFormatUtil);
        }
    }
});
//# sourceMappingURL=time-format.util.js.map