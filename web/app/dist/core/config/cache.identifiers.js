System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var CacheIdentifiers;
    return {
        setters:[],
        execute: function() {
            CacheIdentifiers = (function () {
                function CacheIdentifiers() {
                }
                CacheIdentifiers.CACHE_ID_CURRENT_USER = 'currentUser';
                CacheIdentifiers.CACHE_ID_USER_VERDICTS = 'currentUserVerdicts';
                CacheIdentifiers.CACHE_ID_MAPPOOL = 'mappool';
                return CacheIdentifiers;
            }());
            exports_1("CacheIdentifiers", CacheIdentifiers);
        }
    }
});
//# sourceMappingURL=cache.identifiers.js.map