System.register(['@angular/core', '@angular/router-deprecated', "../../app.config", "../../core/service/http.service", "../../core/service/cache.service", "../../core/config/cache.identifiers", "../../core/service/apploading.service"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, app_config_1, http_service_1, cache_service_1, cache_identifiers_1, apploading_service_1;
    var UserService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (cache_identifiers_1_1) {
                cache_identifiers_1 = cache_identifiers_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(router, httpService, cacheService, appLoadingService) {
                    this.CURRENT_USER_URI = '/users/me';
                    this.LOGIN_URI = '/user/login';
                    this.LOGOUT_URI = '/user/logout';
                    this.USERS_URI = '/users';
                    this._router = router;
                    this._httpService = httpService;
                    this._cacheService = cacheService;
                    this._appLoadingService = appLoadingService;
                }
                UserService.prototype.getCurrentUser = function (preventRedirectToLogin) {
                    var _this = this;
                    if (preventRedirectToLogin === void 0) { preventRedirectToLogin = false; }
                    var eventEmitter = new core_1.EventEmitter(), cachedUser = this._cacheService.get(cache_identifiers_1.CacheIdentifiers.CACHE_ID_CURRENT_USER);
                    if (cachedUser !== null) {
                        this._cacheService.emitCachedEvent(cachedUser, eventEmitter);
                        return eventEmitter;
                    }
                    else {
                        eventEmitter = this._httpService.makeRequest(http_service_1.HttpService.METHOD_GET, this.CURRENT_USER_URI);
                        eventEmitter.subscribe(function (user) {
                            _this.currentUser = user;
                            _this._cacheService.cache(cache_identifiers_1.CacheIdentifiers.CACHE_ID_CURRENT_USER, _this.currentUser, 600);
                        }, function () { return _this.handleNotLoggedin(preventRedirectToLogin); });
                    }
                    return eventEmitter;
                };
                UserService.prototype.login = function (user) {
                    var _this = this;
                    var requestEventEmitter = this._httpService.makeRequest(http_service_1.HttpService.METHOD_POST, this.LOGIN_URI, user);
                    requestEventEmitter.subscribe(function (user) {
                        _this.currentUser = user;
                        _this._cacheService.cache(cache_identifiers_1.CacheIdentifiers.CACHE_ID_CURRENT_USER, _this.currentUser, 600);
                    });
                    return requestEventEmitter;
                };
                UserService.prototype.register = function (user) {
                    return this._httpService.makeRequest(http_service_1.HttpService.METHOD_POST, this.USERS_URI, user);
                };
                UserService.prototype.logout = function () {
                    this.currentUser = null;
                    this._cacheService.invalidate(cache_identifiers_1.CacheIdentifiers.CACHE_ID_CURRENT_USER);
                    return this._httpService.makeRequest(http_service_1.HttpService.METHOD_POST, this.LOGOUT_URI, null);
                };
                UserService.prototype.handleNotLoggedin = function (preventRedirectToLogin) {
                    if (preventRedirectToLogin === void 0) { preventRedirectToLogin = false; }
                    this._appLoadingService.resetAll();
                    if (!preventRedirectToLogin) {
                        this._router.navigate([app_config_1.AppConfig.ROUTE_NAME_LOGIN]);
                    }
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, http_service_1.HttpService, cache_service_1.CacheService, apploading_service_1.AppLoadingService])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=user.service.js.map