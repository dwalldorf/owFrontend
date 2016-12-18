System.register(['@angular/core', '@angular/router-deprecated', "../../app.config"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, app_config_1;
    var NavigationService;
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
            }],
        execute: function() {
            NavigationService = (function () {
                function NavigationService(router) {
                    this._router = router;
                }
                NavigationService.prototype.navigate = function (link) {
                    this._router.navigate([link]);
                };
                NavigationService.prototype.isRouteActive = function (routeInQuestion) {
                    if (routeInQuestion == null) {
                        return false;
                    }
                    if (routeInQuestion == app_config_1.AppConfig.ROUTE_NAME_ADMIN) {
                        var currentInstruction = this._router.currentInstruction;
                        if (currentInstruction == null) {
                            return false;
                        }
                        return currentInstruction.component.urlPath == 'admin';
                    }
                    try {
                        return this._router.isRouteActive(this._router.generate([routeInQuestion]));
                    }
                    catch (ex) {
                        return false;
                    }
                };
                NavigationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router])
                ], NavigationService);
                return NavigationService;
            }());
            exports_1("NavigationService", NavigationService);
        }
    }
});
//# sourceMappingURL=navigation.service.js.map