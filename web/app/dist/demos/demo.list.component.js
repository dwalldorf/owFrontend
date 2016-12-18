System.register(['@angular/core', "../core/service/apploading.service", "../app.config", "./service/demo.service", '@angular/router-deprecated'], function(exports_1, context_1) {
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
    var core_1, apploading_service_1, app_config_1, demo_service_1, router_deprecated_1;
    var DemoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            }],
        execute: function() {
            DemoListComponent = (function () {
                function DemoListComponent(appLoadingService, router, demoService) {
                    this.LOADING_STATUS = app_config_1.AppConfig.ROUTE_NAME_DEMOS;
                    this.restFinished = false;
                    this._appLoadingService = appLoadingService;
                    this._router = router;
                    this._demoService = demoService;
                }
                DemoListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log('demo list init');
                    this._appLoadingService.setLoading(this.LOADING_STATUS);
                    this._demoService.getDemos().subscribe(function (demos) {
                        _this.demos = demos;
                        _this._appLoadingService.finishedLoading(_this.LOADING_STATUS);
                        _this.restFinished = true;
                    });
                };
                DemoListComponent.prototype.showDetail = function (id) {
                    this._router.navigate(['DemoDetails', { id: id }]);
                };
                DemoListComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/demos/views/demo-list.html',
                        directives: [router_deprecated_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, router_deprecated_1.Router, demo_service_1.DemoService])
                ], DemoListComponent);
                return DemoListComponent;
            }());
            exports_1("DemoListComponent", DemoListComponent);
        }
    }
});
//# sourceMappingURL=demo.list.component.js.map