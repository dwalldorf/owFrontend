System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavigationElement;
    return {
        setters:[],
        execute: function() {
            NavigationElement = (function () {
                function NavigationElement(label, title, link, route, customClasses) {
                    if (route === void 0) { route = null; }
                    if (customClasses === void 0) { customClasses = ''; }
                    this.label = label;
                    this.title = title;
                    this.link = link;
                    this.route = route;
                    this.customClasses = customClasses;
                }
                return NavigationElement;
            }());
            exports_1("NavigationElement", NavigationElement);
        }
    }
});
//# sourceMappingURL=navigation.element.js.map