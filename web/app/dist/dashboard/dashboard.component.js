System.register(['@angular/core', "../overwatch/service/verdict.service", "../user/service/user.service", "../core/model/item.collection", "../core/service/apploading.service", "../app.config"], function(exports_1, context_1) {
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
    var core_1, verdict_service_1, user_service_1, item_collection_1, apploading_service_1, app_config_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (verdict_service_1_1) {
                verdict_service_1 = verdict_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (item_collection_1_1) {
                item_collection_1 = item_collection_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(appLoadingService, verdictService, userService) {
                    this.MAX_ITEMS_PER_PAGE = 20;
                    this.userVerdicts = new item_collection_1.ItemCollection();
                    this.displayVerdicts = [];
                    this.restFinished = false;
                    this.numberOfPages = 0;
                    this.currentPage = 0;
                    this.appLoadingService = appLoadingService;
                    this.verdictService = verdictService;
                    this.userService = userService;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.fetchVerdicts();
                    this.verdictService.verdictAddedEventEmitter.subscribe(function (verdict) {
                        _this.userVerdicts.addItem(verdict);
                        _this.setUserVerdicts(_this.userVerdicts);
                    });
                };
                DashboardComponent.prototype.fetchVerdicts = function () {
                    var _this = this;
                    this.appLoadingService.setLoading(app_config_1.AppConfig.ROUTE_NAME_DASHBOARD);
                    this.userService.getCurrentUser().subscribe(function (user) {
                        _this.verdictService
                            .getUserVerdicts(user.id)
                            .subscribe(function (verdicts) { return _this.setUserVerdicts(verdicts); });
                    });
                };
                DashboardComponent.prototype.setUserVerdicts = function (verdictCollection) {
                    this.userVerdicts.setItems(verdictCollection.items);
                    var numberOfEntries = this.userVerdicts.totalItems;
                    if (numberOfEntries > 0) {
                        this.numberOfPages = Math.ceil(numberOfEntries / this.MAX_ITEMS_PER_PAGE);
                        this.paginate(0);
                    }
                    this.restFinished = true;
                    this.appLoadingService.finishedLoading(app_config_1.AppConfig.ROUTE_NAME_DASHBOARD);
                };
                DashboardComponent.prototype.paginate = function (page) {
                    var start = page * this.MAX_ITEMS_PER_PAGE, end = start + this.MAX_ITEMS_PER_PAGE;
                    this.displayVerdicts = this.userVerdicts.items.slice(start, end);
                    this.currentPage = page;
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/dashboard/views/dashboard.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, verdict_service_1.VerdictService, user_service_1.UserService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map