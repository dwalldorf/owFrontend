System.register(['@angular/core', "../model/cached.object"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cached_object_1;
    var CacheService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cached_object_1_1) {
                cached_object_1 = cached_object_1_1;
            }],
        execute: function() {
            CacheService = (function () {
                function CacheService() {
                    this.storage = [];
                }
                CacheService.prototype.cache = function (identifier, data, ttl) {
                    if (ttl === void 0) { ttl = 10; }
                    this.invalidate(identifier);
                    var cache = new cached_object_1.CachedObject();
                    cache.identifier = identifier;
                    cache.ttl = ttl;
                    cache.timestamp = this.getTimestamp();
                    cache.object = data;
                    this.storage[identifier] = cache;
                };
                CacheService.prototype.get = function (identifier) {
                    if (!this.storage.hasOwnProperty(identifier)) {
                        return null;
                    }
                    var cache = this.storage[identifier];
                    if (cache.timestamp + cache.ttl >= this.getTimestamp()) {
                        return cache.object;
                    }
                    this.invalidate(identifier);
                    return null;
                };
                CacheService.prototype.invalidate = function (identifier) {
                    delete this.storage[identifier];
                };
                CacheService.prototype.emitCachedEvent = function (data, eventEmitter) {
                    setTimeout(function () {
                        eventEmitter.emit(data);
                    }, 20);
                };
                ;
                CacheService.prototype.getTimestamp = function () {
                    return Math.floor(Date.now() / 1000);
                };
                CacheService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CacheService);
                return CacheService;
            }());
            exports_1("CacheService", CacheService);
        }
    }
});
//# sourceMappingURL=cache.service.js.map