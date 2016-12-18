System.register(['@angular/core', '@angular/router-deprecated', "../app.config", "./admin-dashboard.component", "./feedback/admin-feedback.component", "./service/admin-feedback.service", "../user/service/user.service", "./service/admin-stat.service"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, app_config_1, admin_dashboard_component_1, admin_feedback_component_1, admin_feedback_service_1, user_service_1, admin_stat_service_1;
    var AdminComponent;
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
            function (admin_dashboard_component_1_1) {
                admin_dashboard_component_1 = admin_dashboard_component_1_1;
            },
            function (admin_feedback_component_1_1) {
                admin_feedback_component_1 = admin_feedback_component_1_1;
            },
            function (admin_feedback_service_1_1) {
                admin_feedback_service_1 = admin_feedback_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (admin_stat_service_1_1) {
                admin_stat_service_1 = admin_stat_service_1_1;
            }],
        execute: function() {
            AdminComponent = (function () {
                function AdminComponent(router, userService) {
                    this._router = router;
                    this._userService = userService;
                }
                AdminComponent.prototype.ngOnInit = function () {
                    this._userService.getCurrentUser();
                };
                AdminComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        {
                            path: 'dashboard',
                            name: app_config_1.AppConfig.ROUTE_NAME_ADMIN_DASHBOARD,
                            component: admin_dashboard_component_1.AdminDashboardComponent,
                        },
                        {
                            path: 'feedback',
                            name: app_config_1.AppConfig.ROUTE_NAME_ADMIN_FEEDBACK,
                            component: admin_feedback_component_1.AdminFeedbackComponent,
                        }
                    ]),
                    core_1.Component({
                        templateUrl: 'app/admin/views/admin-base.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                        providers: [admin_dashboard_component_1.AdminDashboardComponent, admin_feedback_component_1.AdminFeedbackComponent, admin_stat_service_1.AdminStatsService, admin_feedback_service_1.AdminFeedbackService],
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, user_service_1.UserService])
                ], AdminComponent);
                return AdminComponent;
            }());
            exports_1("AdminComponent", AdminComponent);
        }
    }
});
//# sourceMappingURL=admin.component.js.map