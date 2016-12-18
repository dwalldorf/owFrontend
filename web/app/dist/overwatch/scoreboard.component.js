System.register(['@angular/core', "./service/verdict.service", "../user/service/user.service", "../core/service/apploading.service", "../app.config", "./model/scoreboard"], function(exports_1, context_1) {
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
    var core_1, verdict_service_1, user_service_1, apploading_service_1, app_config_1, scoreboard_1;
    var ScoreboardComponent;
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
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (scoreboard_1_1) {
                scoreboard_1 = scoreboard_1_1;
            }],
        execute: function() {
            ScoreboardComponent = (function () {
                function ScoreboardComponent(appLoadingService, verdictService, userService) {
                    this.LOADING_STATUS = app_config_1.AppConfig.ROUTE_NAME_SCOREBOARD;
                    this.LOADING_STATUS_HIGHER = this.LOADING_STATUS + ':higher';
                    this.LOADING_STATUS_LOWER = this.LOADING_STATUS + ':lower';
                    this.higherScoresFetched = false;
                    this.lowerScoresFetched = false;
                    this.userScoreFetched = false;
                    this.periods = [
                        {
                            p: 30,
                            name: 'monthly'
                        },
                        {
                            p: 7,
                            name: 'weekly'
                        },
                        {
                            p: 1,
                            name: 'daily'
                        },
                        {
                            p: 0,
                            name: 'all time'
                        }
                    ];
                    this.selectedPeriod = 7;
                    this.scoreboard = new scoreboard_1.Scoreboard();
                    this.appLoadingService = appLoadingService;
                    this.verdictService = verdictService;
                    this.userService = userService;
                }
                ScoreboardComponent.prototype.ngOnInit = function () {
                    this.getScoreboard(this.selectedPeriod);
                };
                ScoreboardComponent.prototype.restFinished = function () {
                    if (this.higherScoresFetched && this.lowerScoresFetched && this.userScoreFetched) {
                        this.appLoadingService.finishedLoading(app_config_1.AppConfig.ROUTE_NAME_SCOREBOARD);
                        return true;
                    }
                    return false;
                };
                ScoreboardComponent.prototype.noScoresPresent = function () {
                    if (!this.restFinished()) {
                        return false;
                    }
                    return (this.scoreboard.lower.totalItems == 0);
                };
                ScoreboardComponent.prototype.updatePeriod = function (period) {
                    this.selectedPeriod = period;
                    this.getScoreboard(this.selectedPeriod);
                };
                ScoreboardComponent.prototype.loadMoreHigher = function () {
                    var offset = this.scoreboard.higher.totalItems;
                    this.getHigherScores(this.selectedPeriod, offset);
                };
                ScoreboardComponent.prototype.loadMoreLower = function () {
                    var offset = this.scoreboard.lower.totalItems;
                    this.getLowerScores(this.selectedPeriod, offset);
                };
                ScoreboardComponent.prototype.getScoreboard = function (period) {
                    this.resetRestStatusFlags();
                    this.appLoadingService.setLoading(this.LOADING_STATUS);
                    this.getUserScore(period);
                    this.getHigherScores(period);
                    this.getLowerScores(period);
                };
                ScoreboardComponent.prototype.getUserScore = function (period) {
                    var _this = this;
                    this.userService.getCurrentUser()
                        .subscribe(function (user) {
                        _this.verdictService.getUserScores(user.id, period)
                            .subscribe(function (score) {
                            _this.scoreboard.self = score;
                            _this.userScoreFetched = true;
                        }, function () { return _this.userScoreFetched = true; });
                    });
                };
                ScoreboardComponent.prototype.getHigherScores = function (period, offset) {
                    var _this = this;
                    if (offset === void 0) { offset = 0; }
                    this.appLoadingService.setLoading(this.LOADING_STATUS_HIGHER);
                    this.userService.getCurrentUser()
                        .subscribe(function (user) {
                        _this.verdictService.getHigherScores(user.id, period, offset)
                            .subscribe(function (scores) {
                            _this.scoreboard.higher.addItems(scores.items);
                            _this.scoreboard.higher.hasMore = scores.hasMore;
                            _this.higherScoresFetched = true;
                            _this.appLoadingService.finishedLoading(_this.LOADING_STATUS_HIGHER);
                        });
                    });
                };
                ScoreboardComponent.prototype.getLowerScores = function (period, offset) {
                    var _this = this;
                    if (offset === void 0) { offset = 0; }
                    this.appLoadingService.setLoading(this.LOADING_STATUS_LOWER);
                    this.userService.getCurrentUser()
                        .subscribe(function (user) {
                        _this.verdictService.getLowerScores(user.id, period, offset)
                            .subscribe(function (scores) {
                            _this.scoreboard.lower.addItems(scores.items);
                            _this.scoreboard.lower.hasMore = scores.hasMore;
                            _this.lowerScoresFetched = true;
                            _this.appLoadingService.finishedLoading(_this.LOADING_STATUS_LOWER);
                        });
                    });
                };
                ScoreboardComponent.prototype.resetRestStatusFlags = function () {
                    this.higherScoresFetched = false;
                    this.lowerScoresFetched = false;
                    this.userScoreFetched = false;
                };
                ScoreboardComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/overwatch/views/scoreboard.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, verdict_service_1.VerdictService, user_service_1.UserService])
                ], ScoreboardComponent);
                return ScoreboardComponent;
            }());
            exports_1("ScoreboardComponent", ScoreboardComponent);
        }
    }
});
//# sourceMappingURL=scoreboard.component.js.map