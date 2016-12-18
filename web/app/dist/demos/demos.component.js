System.register(['@angular/core', "../core/service/apploading.service", "../app.config", "./service/demo.service"], function(exports_1, context_1) {
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
    var core_1, apploading_service_1, app_config_1, demo_service_1;
    var DemosComponent;
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
            }],
        execute: function() {
            DemosComponent = (function () {
                function DemosComponent(appLoadingService, demoService) {
                    this.LOADING_STATUS = app_config_1.AppConfig.ROUTE_NAME_DEMOS;
                    this.restFinished = false;
                    this._appLoadingService = appLoadingService;
                    this._demoService = demoService;
                }
                DemosComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._appLoadingService.setLoading(this.LOADING_STATUS);
                    this._demoService.getDemos().subscribe(function (demos) {
                        _this.demos = demos;
                        console.log(_this.demos);
                        _this._appLoadingService.finishedLoading(_this.LOADING_STATUS);
                        _this.restFinished = true;
                    });
                };
                DemosComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/demos/views/demos.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, demo_service_1.DemoService])
                ], DemosComponent);
                return DemosComponent;
            }());
            exports_1("DemosComponent", DemosComponent);
        }
    }
});
//# sourceMappingURL=demos.component.js.map