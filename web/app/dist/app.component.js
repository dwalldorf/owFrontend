System.register(['@angular/core', '@angular/router-deprecated', "./app.config", "./core/service/http.service", './user/login.component', './user/register.component', "./dashboard/dashboard.component", "./overwatch/scoreboard.component", './user/service/user.service', "./overwatch/service/verdict.service", "./core/service/cache.service", "./feedback/feedback-dialog.component", "./feedback/service/feedback.service", "./overwatch/verdict-dialog.component", "./core/service/flash.service", "./core/flash.component", "./admin/admin.component", "./core/apploading.component", "./core/service/apploading.service", "./admin/service/admin-stat.service", "./core/navigation.component", "./core/service/navigation.service", "./admin/service/admin-feedback.service", "./demoupload/demo-upload.component", "./demoupload/service/demo-upload.service", "./demos/service/demo.service", "./demos/demo.list.component", "./demos/demo.detail.component"], function(exports_1, context_1) {
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
    var core_1, router_deprecated_1, app_config_1, http_service_1, login_component_1, register_component_1, dashboard_component_1, scoreboard_component_1, user_service_1, verdict_service_1, cache_service_1, feedback_dialog_component_1, feedback_service_1, verdict_dialog_component_1, flash_service_1, flash_component_1, admin_component_1, apploading_component_1, apploading_service_1, admin_stat_service_1, navigation_component_1, navigation_service_1, admin_feedback_service_1, demo_upload_component_1, demo_upload_service_1, demo_service_1, demo_list_component_1, demo_detail_component_1;
    var AppComponent;
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
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (scoreboard_component_1_1) {
                scoreboard_component_1 = scoreboard_component_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (verdict_service_1_1) {
                verdict_service_1 = verdict_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (feedback_dialog_component_1_1) {
                feedback_dialog_component_1 = feedback_dialog_component_1_1;
            },
            function (feedback_service_1_1) {
                feedback_service_1 = feedback_service_1_1;
            },
            function (verdict_dialog_component_1_1) {
                verdict_dialog_component_1 = verdict_dialog_component_1_1;
            },
            function (flash_service_1_1) {
                flash_service_1 = flash_service_1_1;
            },
            function (flash_component_1_1) {
                flash_component_1 = flash_component_1_1;
            },
            function (admin_component_1_1) {
                admin_component_1 = admin_component_1_1;
            },
            function (apploading_component_1_1) {
                apploading_component_1 = apploading_component_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            },
            function (admin_stat_service_1_1) {
                admin_stat_service_1 = admin_stat_service_1_1;
            },
            function (navigation_component_1_1) {
                navigation_component_1 = navigation_component_1_1;
            },
            function (navigation_service_1_1) {
                navigation_service_1 = navigation_service_1_1;
            },
            function (admin_feedback_service_1_1) {
                admin_feedback_service_1 = admin_feedback_service_1_1;
            },
            function (demo_upload_component_1_1) {
                demo_upload_component_1 = demo_upload_component_1_1;
            },
            function (demo_upload_service_1_1) {
                demo_upload_service_1 = demo_upload_service_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (demo_list_component_1_1) {
                demo_list_component_1 = demo_list_component_1_1;
            },
            function (demo_detail_component_1_1) {
                demo_detail_component_1 = demo_detail_component_1_1;
            }],
        execute: function() {
            core_1.enableProdMode();
            AppComponent = (function () {
                function AppComponent(router, appLoadingService, navigationService, userService) {
                    this._allowedRoutesWithoutLogin = [
                        app_config_1.AppConfig.ROUTE_NAME_LOGIN,
                        app_config_1.AppConfig.ROUTE_NAME_REGISTER,
                    ];
                    this.restFinished = false;
                    this.showDemoUploadOverlay = false;
                    this._router = router;
                    this._appLoadingService = appLoadingService;
                    this._navigationService = navigationService;
                    this._userService = userService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._appLoadingService.setLoading('app');
                    this._userService.getCurrentUser().subscribe(function () { return _this.handleLoggedIn(); }, function () { return _this.handleNotLoggedIn(); });
                };
                AppComponent.prototype.handleLoggedIn = function () {
                    this._appLoadingService.finishedLoading('app');
                    this.restFinished = true;
                };
                AppComponent.prototype.handleNotLoggedIn = function () {
                    this._appLoadingService.finishedLoading('app');
                    this.restFinished = true;
                    var currentRouteAllowedWithoutLogin = false;
                    for (var _i = 0, _a = this._allowedRoutesWithoutLogin; _i < _a.length; _i++) {
                        var routeName = _a[_i];
                        var route = this._router.generate([routeName]);
                        if (this._router.isRouteActive(route)) {
                            currentRouteAllowedWithoutLogin = true;
                            break;
                        }
                    }
                    if (!currentRouteAllowedWithoutLogin) {
                        this._router.navigate([app_config_1.AppConfig.ROUTE_NAME_LOGIN]);
                    }
                };
                AppComponent.prototype.isLoggedIn = function () {
                    var currentUser = this._userService.currentUser;
                    if (currentUser && currentUser.hasOwnProperty('id')) {
                        return currentUser.id.length == 24;
                    }
                    return false;
                };
                AppComponent.prototype.logout = function () {
                    var _this = this;
                    this._userService.logout().subscribe(function () { return _this.handleNotLoggedIn(); });
                };
                AppComponent.prototype.toggleShowDemoUpload = function () {
                    this.showDemoUploadOverlay = !this.showDemoUploadOverlay;
                };
                AppComponent.prototype.displayAdminMenu = function () {
                    return this._navigationService.isRouteActive(app_config_1.AppConfig.ROUTE_NAME_ADMIN);
                };
                AppComponent = __decorate([
                    router_deprecated_1.RouteConfig([
                        {
                            path: '/login',
                            name: app_config_1.AppConfig.ROUTE_NAME_LOGIN,
                            component: login_component_1.LoginComponent,
                        },
                        {
                            path: '/register',
                            name: app_config_1.AppConfig.ROUTE_NAME_REGISTER,
                            component: register_component_1.RegisterComponent,
                        },
                        {
                            path: '/',
                            name: app_config_1.AppConfig.ROUTE_NAME_DASHBOARD,
                            component: dashboard_component_1.DashboardComponent,
                        },
                        {
                            path: '/scores',
                            name: app_config_1.AppConfig.ROUTE_NAME_SCOREBOARD,
                            component: scoreboard_component_1.ScoreboardComponent,
                        },
                        {
                            path: '/demos',
                            name: app_config_1.AppConfig.ROUTE_NAME_DEMOS,
                            component: demo_list_component_1.DemoListComponent,
                        },
                        {
                            path: '/demo/:id',
                            name: app_config_1.AppConfig.ROUTE_NAME_DEMO_DETAILS,
                            component: demo_detail_component_1.DemoDetailComponent,
                        },
                        {
                            path: '/admin/...',
                            component: admin_component_1.AdminComponent,
                        },
                        {
                            path: '/**',
                            redirectTo: [app_config_1.AppConfig.ROUTE_NAME_DASHBOARD],
                        },
                    ]),
                    core_1.Component({
                        selector: 'owt-app',
                        templateUrl: 'app/views/base.html',
                        directives: [
                            router_deprecated_1.ROUTER_DIRECTIVES,
                            apploading_component_1.AppLoadingComponent,
                            flash_component_1.FlashComponent,
                            navigation_component_1.NavigationComponent,
                            verdict_dialog_component_1.VerdictDialogComponent,
                            feedback_dialog_component_1.FeedbackDialogComponent,
                            demo_list_component_1.DemoListComponent,
                            demo_detail_component_1.DemoDetailComponent,
                            demo_upload_component_1.DemoUploadComponent,
                            admin_component_1.AdminComponent,
                        ],
                        providers: [
                            apploading_service_1.AppLoadingService,
                            http_service_1.HttpService,
                            cache_service_1.CacheService,
                            navigation_service_1.NavigationService,
                            flash_service_1.FlashService,
                            user_service_1.UserService,
                            verdict_service_1.VerdictService,
                            feedback_service_1.FeedbackService,
                            demo_service_1.DemoService,
                            demo_upload_service_1.DemoUploadService,
                            admin_component_1.AdminComponent,
                            admin_feedback_service_1.AdminFeedbackService,
                            admin_stat_service_1.AdminStatsService
                        ],
                    }), 
                    __metadata('design:paramtypes', [router_deprecated_1.Router, apploading_service_1.AppLoadingService, navigation_service_1.NavigationService, user_service_1.UserService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map