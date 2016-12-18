System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var AppLoadingService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppLoadingService = (function () {
                function AppLoadingService() {
                    this.loading = [];
                    this.loadingEventEmitter = new core_1.EventEmitter();
                }
                AppLoadingService.prototype.setLoading = function (component) {
                    this.loading[component] = true;
                    this.fireLoadingStatusChanged();
                };
                AppLoadingService.prototype.finishedLoading = function (component) {
                    if (component in this.loading) {
                        delete this.loading[component];
                        this.fireLoadingStatusChanged();
                    }
                };
                AppLoadingService.prototype.resetAll = function () {
                    this.loading = [];
                    this.fireLoadingStatusChanged();
                };
                AppLoadingService.prototype.fireLoadingStatusChanged = function () {
                    this.loadingEventEmitter.emit(this.hasLoadingComponents());
                };
                AppLoadingService.prototype.hasLoadingComponents = function () {
                    for (var key in this.loading) {
                        if (this.loading[key] == true) {
                            return true;
                        }
                    }
                    return false;
                };
                AppLoadingService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], AppLoadingService);
                return AppLoadingService;
            }());
            exports_1("AppLoadingService", AppLoadingService);
        }
    }
});
//# sourceMappingURL=apploading.service.js.map