System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ItemCollection;
    return {
        setters:[],
        execute: function() {
            ItemCollection = (function () {
                function ItemCollection() {
                    this.items = [];
                    this.totalItems = 0;
                    this.hasMore = false;
                }
                ItemCollection.prototype.addItem = function (item) {
                    this.items.unshift(item);
                    this.totalItems = this.items.length;
                };
                ItemCollection.prototype.addItems = function (items) {
                    this.items = this.items.concat(items);
                    this.totalItems = this.items.length;
                };
                ItemCollection.prototype.setItems = function (items) {
                    if (!items) {
                        items = [];
                    }
                    this.items = items;
                    this.totalItems = this.items.length;
                };
                return ItemCollection;
            }());
            exports_1("ItemCollection", ItemCollection);
        }
    }
});
//# sourceMappingURL=item.collection.js.map