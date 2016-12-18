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
    var RegisterComponent;
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
            RegisterComponent = (function () {
                function RegisterComponent(userService, router) {
                    this.formErrors = [];
                    this.router = router;
                    this.userService = userService;
                    this.user = new user_1.User();
                }
                RegisterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userService.getCurrentUser(true).subscribe(function () { return _this.goToLogin(); });
                };
                RegisterComponent.prototype.register = function () {
                    var _this = this;
                    this.userService.register(this.user).subscribe(function () { return _this.handleRegisterSuccess(); }, function (err) { return _this.handleRegisterError(err.json()); });
                };
                RegisterComponent.prototype.goToLogin = function () {
                    this.router.navigate([app_config_1.AppConfig.ROUTE_NAME_LOGIN]);
                };
                RegisterComponent.prototype.handleRegisterSuccess = function () {
                    this.formErrors = [];
                    this.goToLogin();
                };
                RegisterComponent.prototype.handleRegisterError = function (err) {
                    this.formErrors = [];
                    if (err.hasOwnProperty('errors')) {
                        var errors = err.errors;
                        for (var key in errors) {
                            this.formErrors[key] = errors[key];
                        }
                    }
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/user/views/register.html'
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});
//# sourceMappingURL=register.component.js.map