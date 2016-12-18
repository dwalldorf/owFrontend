System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Feedback;
    return {
        setters:[],
        execute: function() {
            Feedback = (function () {
                function Feedback() {
                    this.feedback = {
                        like: true,
                        fixplease: '',
                        featureplease: '',
                        freetext: '',
                    };
                }
                return Feedback;
            }());
            exports_1("Feedback", Feedback);
        }
    }
});
//# sourceMappingURL=feedback.js.map