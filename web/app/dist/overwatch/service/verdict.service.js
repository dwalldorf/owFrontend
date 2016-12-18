System.register(['@angular/core', "../../core/service/http.service", "../../user/service/user.service", "../../core/service/cache.service", "../../core/config/cache.identifiers"], function(exports_1, context_1) {
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
    var core_1, http_service_1, user_service_1, cache_service_1, cache_identifiers_1;
    var VerdictService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (cache_identifiers_1_1) {
                cache_identifiers_1 = cache_identifiers_1_1;
            }],
        execute: function() {
            VerdictService = (function () {
                function VerdictService(httpService, cacheService, userService) {
                    this.MAPPOOL_URI = '/overwatch/mappool';
                    this.USER_VERDICTS_URI = '/overwatch/verdicts/';
                    this.verdictAddedEventEmitter = new core_1.EventEmitter();
                    this.httpService = httpService;
                    this.cacheService = cacheService;
                    this.userService = userService;
                }
                VerdictService.prototype.getMapPool = function () {
                    var _this = this;
                    var eventEmitter = new core_1.EventEmitter(), cachedMapPool = this.cacheService.get(cache_identifiers_1.CacheIdentifiers.CACHE_ID_MAPPOOL);
                    if (cachedMapPool !== null) {
                        this.cacheService.emitCachedEvent(cachedMapPool, eventEmitter);
                    }
                    else {
                        this.httpService
                            .makeRequest(http_service_1.HttpService.METHOD_GET, this.MAPPOOL_URI)
                            .subscribe(function (res) {
                            _this.cacheService.cache(cache_identifiers_1.CacheIdentifiers.CACHE_ID_MAPPOOL, res, 60000);
                            eventEmitter.emit(res);
                        });
                    }
                    return eventEmitter;
                };
                VerdictService.prototype.getUserVerdicts = function (userId) {
                    var _this = this;
                    var eventEmitter = new core_1.EventEmitter(), cachedVerdicts = this.cacheService.get(cache_identifiers_1.CacheIdentifiers.CACHE_ID_USER_VERDICTS);
                    if (cachedVerdicts !== null) {
                        this.cacheService.emitCachedEvent(cachedVerdicts, eventEmitter);
                        return eventEmitter;
                    }
                    else {
                        this.httpService.makeRequest(http_service_1.HttpService.METHOD_GET, this.USER_VERDICTS_URI + userId)
                            .subscribe(function (res) {
                            _this.cacheService.cache(cache_identifiers_1.CacheIdentifiers.CACHE_ID_USER_VERDICTS, res, 10);
                            eventEmitter.emit(res);
                        });
                    }
                    return eventEmitter;
                };
                VerdictService.prototype.getHigherScores = function (userId, period, offset) {
                    if (offset === void 0) { offset = 0; }
                    var eventEmitter = new core_1.EventEmitter(), uri = this.buildQueryUri('higher', userId, period, offset);
                    this.httpService
                        .makeRequest(http_service_1.HttpService.METHOD_GET, uri)
                        .subscribe(function (res) { return eventEmitter.emit(res); });
                    return eventEmitter;
                };
                VerdictService.prototype.getLowerScores = function (userId, period, offset) {
                    if (offset === void 0) { offset = 0; }
                    var eventEmitter = new core_1.EventEmitter(), uri = this.buildQueryUri('lower', userId, period, offset);
                    this.httpService
                        .makeRequest(http_service_1.HttpService.METHOD_GET, uri)
                        .subscribe(function (res) { return eventEmitter.emit(res); });
                    return eventEmitter;
                };
                VerdictService.prototype.getUserScores = function (userId, period) {
                    var _this = this;
                    var eventEmitter = new core_1.EventEmitter(), cacheId = 'userScores:' + userId + ':' + period, cachedScores = this.cacheService.get(cacheId);
                    if (cachedScores !== null) {
                        this.cacheService.emitCachedEvent(cachedScores, eventEmitter);
                    }
                    else {
                        this.httpService.makeRequest(http_service_1.HttpService.METHOD_GET, '/overwatch/scores/' + userId + '?period=' + period)
                            .subscribe(function (res) {
                            res = res[0];
                            _this.cacheService.cache(cacheId, res, 60);
                            eventEmitter.emit(res);
                        }, function (err) { return eventEmitter.error(err); });
                    }
                    return eventEmitter;
                };
                VerdictService.prototype.submitVerdict = function (verdict) {
                    var _this = this;
                    var requestObservable = this.httpService.makeRequest(http_service_1.HttpService.METHOD_POST, '/overwatch/verdicts', verdict);
                    requestObservable.subscribe(function (verdict) {
                        _this.verdictAddedEventEmitter.emit(verdict);
                    });
                    return requestObservable;
                };
                VerdictService.prototype.getCacheId = function (prefix, userId, period) {
                    return prefix + ':' + userId + ':' + period;
                };
                VerdictService.prototype.buildQueryUri = function (lowerHigher, userId, period, offset) {
                    if (offset === void 0) { offset = 0; }
                    var uri = '/overwatch/scores/' + lowerHigher + '/' + userId + '/' + period;
                    if (offset > 0) {
                        uri += '?offset=' + offset;
                    }
                    return uri;
                };
                VerdictService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, cache_service_1.CacheService, user_service_1.UserService])
                ], VerdictService);
                return VerdictService;
            }());
            exports_1("VerdictService", VerdictService);
        }
    }
});
//# sourceMappingURL=verdict.service.js.map