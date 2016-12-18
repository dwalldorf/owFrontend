System.register(['@angular/core', '@angular/router-deprecated', "../user/service/user.service", "./model/navigation.element", "../app.config", "./service/navigation.service"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, user_service_1, navigation_element_1, app_config_1, navigation_service_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (navigation_element_1_1) {
                navigation_element_1 = navigation_element_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent(navigationService, userService) {
                    this._navigationService = navigationService;
                    this._userService = userService;
                }
                NavigationComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.navigationElements = [
                        new navigation_element_1.NavigationElement('', 'Dashboard', '/dashboard', app_config_1.AppConfig.ROUTE_NAME_DASHBOARD, 'glyphicon glyphicon-home'),
                        new navigation_element_1.NavigationElement('Scoreboard', 'Scoreboard', '/scores', app_config_1.AppConfig.ROUTE_NAME_SCOREBOARD),
                        new navigation_element_1.NavigationElement('My demos', 'Demos', '/demos', app_config_1.AppConfig.ROUTE_NAME_DEMOS),
                    ];
                    this._userService.getCurrentUser()
                        .subscribe(function (user) {
                        if (user.userSettings.isAdmin) {
                            _this.navigationElements.push(new navigation_element_1.NavigationElement('Admin', 'Admin', '/admin/dashboard', app_config_1.AppConfig.ROUTE_NAME_ADMIN));
                        }
                    });
                };
                NavigationComponent.prototype.navigate = function (link) {
                    this._navigationService.navigate(link);
                };
                NavigationComponent.prototype.isActive = function (route) {
                    return this._navigationService.isRouteActive(route);
                };
                NavigationComponent = __decorate([
                    core_1.Component({
                        'selector': 'navigation',
                        templateUrl: 'app/core/views/navigation.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [navigation_service_1.NavigationService, user_service_1.UserService])
                ], NavigationComponent);
                return NavigationComponent;
            }());
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map