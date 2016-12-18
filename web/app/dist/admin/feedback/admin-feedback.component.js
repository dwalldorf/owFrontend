System.register(['@angular/core', "../service/admin-feedback.service", "../../user/service/user.service", "./admin-feedback-detail.component", "../../core/util/time-format.util"], function(exports_1, context_1) {
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
    var core_1, admin_feedback_service_1, user_service_1, admin_feedback_detail_component_1, time_format_util_1;
    var DateTimeFormat, AdminFeedbackComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (admin_feedback_service_1_1) {
                admin_feedback_service_1 = admin_feedback_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (admin_feedback_detail_component_1_1) {
                admin_feedback_detail_component_1 = admin_feedback_detail_component_1_1;
            },
            function (time_format_util_1_1) {
                time_format_util_1 = time_format_util_1_1;
            }],
        execute: function() {
            AdminFeedbackComponent = (function () {
                function AdminFeedbackComponent(userService, adminFeedbackService) {
                    this.restFinished = false;
                    this.userService = userService;
                    this.adminFeedbackService = adminFeedbackService;
                }
                AdminFeedbackComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.restFinished = false;
                    this.userService.getCurrentUser().subscribe(function () {
                        _this.adminFeedbackService.getUserFeedback().subscribe(function (feedbackCollection) {
                            _this.restFinished = true;
                            _this.feedback = feedbackCollection;
                            for (var i = 0; i < _this.feedback.totalItems; i++) {
                                var currentFeedback = _this.feedback.items[i];
                                currentFeedback.displayDate = time_format_util_1.TimeFormatUtil.toDateTimeString(currentFeedback.createdTimestamp);
                                _this.feedback.items[i] = currentFeedback;
                            }
                        });
                    });
                };
                AdminFeedbackComponent.prototype.onSelect = function (selectedFeedback) {
                    if (this.selectedFeedback == selectedFeedback) {
                        this.selectedFeedback = null;
                    }
                    else {
                        this.selectedFeedback = selectedFeedback;
                    }
                };
                AdminFeedbackComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/admin/feedback/views/feedback.html',
                        directives: [admin_feedback_detail_component_1.AdminFeedbackDetailComponent],
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, admin_feedback_service_1.AdminFeedbackService])
                ], AdminFeedbackComponent);
                return AdminFeedbackComponent;
            }());
            exports_1("AdminFeedbackComponent", AdminFeedbackComponent);
        }
    }
});
//# sourceMappingURL=admin-feedback.component.js.map