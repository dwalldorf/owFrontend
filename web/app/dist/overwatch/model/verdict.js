System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Verdict;
    return {
        setters:[],
        execute: function() {
            Verdict = (function () {
                function Verdict() {
                    this.map = 'de_dust2';
                    this.aimAssist = false;
                    this.visionAssist = false;
                    this.otherAssist = false;
                    this.griefing = false;
                }
                return Verdict;
            }());
            exports_1("Verdict", Verdict);
        }
    }
});
//# sourceMappingURL=verdict.js.map