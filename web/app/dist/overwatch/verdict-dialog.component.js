System.register(['@angular/core', "./model/verdict", "../core/service/http.service", "./service/verdict.service", "../core/service/apploading.service"], function(exports_1, context_1) {
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
    var core_1, verdict_1, http_service_1, verdict_service_1, apploading_service_1;
    var VerdictDialogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (verdict_1_1) {
                verdict_1 = verdict_1_1;
            },
            function (http_service_1_1) {
                http_service_1 = http_service_1_1;
            },
            function (verdict_service_1_1) {
                verdict_service_1 = verdict_service_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            }],
        execute: function() {
            VerdictDialogComponent = (function () {
                function VerdictDialogComponent(verdictService, httpService, appLoadingService) {
                    this.STATUS_ID = 'verdictDialog';
                    this.restFinished = false;
                    this.mapPool = [];
                    this.verdictService = verdictService;
                    this.httpService = httpService;
                    this.appLoadingService = appLoadingService;
                    this.resetVerdict();
                }
                VerdictDialogComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.appLoadingService.setLoading(this.STATUS_ID);
                    this.verdictService
                        .getMapPool()
                        .subscribe(function (maps) { return _this.setMapPool(maps); });
                };
                VerdictDialogComponent.prototype.submitVerdict = function () {
                    var _this = this;
                    this.restFinished = false;
                    this.verdictService.submitVerdict(this.verdict)
                        .subscribe(function () {
                        _this.restFinished = true;
                        _this.closeDialog();
                    });
                };
                VerdictDialogComponent.prototype.showDialog = function () {
                    jQuery('#verdict-dialog').modal('show');
                };
                VerdictDialogComponent.prototype.closeDialog = function () {
                    jQuery('#verdict-dialog').modal('hide');
                    this.resetVerdict();
                };
                VerdictDialogComponent.prototype.setMapPool = function (maps) {
                    this.mapPool = maps;
                    this.restFinished = true;
                    this.appLoadingService.finishedLoading(this.STATUS_ID);
                };
                VerdictDialogComponent.prototype.resetVerdict = function () {
                    this.verdict = new verdict_1.Verdict();
                    this.verdict.overwatchDate = this.formatDate(new Date());
                };
                VerdictDialogComponent.prototype.formatDate = function (date) {
                    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;
                    return [year, month, day].join('-');
                };
                VerdictDialogComponent = __decorate([
                    core_1.Component({
                        selector: 'verdict-dialog',
                        templateUrl: 'app/overwatch/views/verdict-dialog.html',
                    }), 
                    __metadata('design:paramtypes', [verdict_service_1.VerdictService, http_service_1.HttpService, apploading_service_1.AppLoadingService])
                ], VerdictDialogComponent);
                return VerdictDialogComponent;
            }());
            exports_1("VerdictDialogComponent", VerdictDialogComponent);
        }
    }
});
//# sourceMappingURL=verdict-dialog.component.js.map