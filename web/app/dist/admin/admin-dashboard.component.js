System.register(['@angular/core', "./service/admin-stat.service"], function(exports_1, context_1) {
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
    var core_1, admin_stat_service_1;
    var AdminDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_stat_service_1_1) {
                admin_stat_service_1 = admin_stat_service_1_1;
            }],
        execute: function() {
            AdminDashboardComponent = (function () {
                function AdminDashboardComponent(adminStatsService) {
                    this.restFinished = false;
                    this.stats = [];
                    this.adminStatsService = adminStatsService;
                }
                AdminDashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.adminStatsService.getAdminStats()
                        .subscribe(function (stats) { return _this.setStats(stats); });
                };
                AdminDashboardComponent.prototype.setStats = function (stats) {
                    this.stats = stats;
                    this.restFinished = true;
                };
                AdminDashboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/admin/views/dashboard.html',
                    }), 
                    __metadata('design:paramtypes', [admin_stat_service_1.AdminStatsService])
                ], AdminDashboardComponent);
                return AdminDashboardComponent;
            }());
            exports_1("AdminDashboardComponent", AdminDashboardComponent);
        }
    }
});
//# sourceMappingURL=admin-dashboard.component.js.map