System.register(["./user.score", "../../core/model/item.collection"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_score_1, item_collection_1;
    var Scoreboard;
    return {
        setters:[
            function (user_score_1_1) {
                user_score_1 = user_score_1_1;
            },
            function (item_collection_1_1) {
                item_collection_1 = item_collection_1_1;
            }],
        execute: function() {
            Scoreboard = (function () {
                function Scoreboard() {
                    this.higher = new item_collection_1.ItemCollection();
                    this.self = new user_score_1.UserScore();
                    this.lower = new item_collection_1.ItemCollection();
                }
                return Scoreboard;
            }());
            exports_1("Scoreboard", Scoreboard);
        }
    }
});
//# sourceMappingURL=scoreboard.js.map