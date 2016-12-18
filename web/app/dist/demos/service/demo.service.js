System.register(['@angular/core', "../../user/service/user.service", "../../core/service/http.service", "../../core/service/cache.service"], function(exports_1, context_1) {
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
    var core_1, user_service_1, http_service_1, cache_service_1;
    var DemoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            }],
        execute: function() {
            DemoService = (function () {
                function DemoService(httpService, cacheService, userService) {
                    this.DEMOS_URI = '/demos';
                    this._httpService = httpService;
                    this._cacheService = cacheService;
                    this._userService = userService;
                }
                DemoService.prototype.getDemos = function () {
                    var _this = this;
                    var eventEmitter = new core_1.EventEmitter();
                    this._userService.getCurrentUser().subscribe(function (user) {
                        _this._httpService.makeRequest(http_service_1.HttpService.METHOD_GET, '/demos/user/' + user.id)
                            .subscribe(function (res) {
                            eventEmitter.emit(res);
                        });
                    });
                    return eventEmitter;
                };
                DemoService.prototype.getDemo = function (id) {
                    var eventEmitter = new core_1.EventEmitter();
                    this._httpService.makeRequest(http_service_1.HttpService.METHOD_GET, '/demos/' + id)
                        .subscribe(function (res) {
                        eventEmitter.emit(res);
                    });
                    return eventEmitter;
                };
                DemoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_service_1.HttpService, cache_service_1.CacheService, user_service_1.UserService])
                ], DemoService);
                return DemoService;
            }());
            exports_1("DemoService", DemoService);
        }
    }
});
//# sourceMappingURL=demo.service.js.map