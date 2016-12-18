System.register(['@angular/core', "./service/apploading.service"], function(exports_1, context_1) {
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
    var core_1, apploading_service_1;
    var AppLoadingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            }],
        execute: function() {
            AppLoadingComponent = (function () {
                function AppLoadingComponent(appLoadingService) {
                    this.isLoading = false;
                    this.appLoadingService = appLoadingService;
                }
                AppLoadingComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.appLoadingService.loadingEventEmitter
                        .subscribe(function (loadingStatus) { return _this.setLoadingStatus(loadingStatus); });
                };
                AppLoadingComponent.prototype.setLoadingStatus = function (loadingStatus) {
                    this.isLoading = loadingStatus;
                };
                AppLoadingComponent = __decorate([
                    core_1.Component({
                        selector: 'app-loading',
                        templateUrl: 'app/core/views/app-loading.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService])
                ], AppLoadingComponent);
                return AppLoadingComponent;
            }());
            exports_1("AppLoadingComponent", AppLoadingComponent);
        }
    }
});
//# sourceMappingURL=apploading.component.js.map