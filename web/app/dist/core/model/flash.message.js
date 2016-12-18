System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FlashMessage;
    return {
        setters:[],
        execute: function() {
            FlashMessage = (function () {
                function FlashMessage(message, htmlClass) {
                    this.message = message;
                    this.layoutClass = htmlClass;
                }
                FlashMessage.SUCCESS = 'success';
                FlashMessage.ERROR = 'danger';
                return FlashMessage;
            }());
            exports_1("FlashMessage", FlashMessage);
        }
    }
});
//# sourceMappingURL=flash.message.js.map