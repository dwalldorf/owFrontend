System.register(['@angular/core', '@angular/router-deprecated', "../app.config", "./service/user.service", "./model/user"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, app_config_1, user_service_1, user_1;
    var LoginComponent;
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
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(userService, router) {
                    this.loginError = null;
                    this.userService = userService;
                    this.router = router;
                    this.resetUser();
                }
                LoginComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getCurrentUser().subscribe(function (user) { return _this.goToDashBoard(); });
                };
                LoginComponent.prototype.resetUser = function () {
                    this.user = new user_1.User();
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    this.userService.login(this.user)
                        .subscribe(function () { return _this.handleLogin(); }, function () { return _this.handleLoginError(); });
                };
                LoginComponent.prototype.handleLogin = function () {
                    this.loginError = null;
                    this.goToDashBoard();
                };
                LoginComponent.prototype.handleLoginError = function () {
                    this.loginError = 'Login failed.';
                };
                LoginComponent.prototype.goToRegistration = function () {
                    this.resetUser();
                    this.router.navigate([app_config_1.AppConfig.ROUTE_NAME_REGISTER]);
                };
                LoginComponent.prototype.goToDashBoard = function () {
                    this.resetUser();
                    this.router.navigate([app_config_1.AppConfig.ROUTE_NAME_DASHBOARD]);
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user/views/login.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map