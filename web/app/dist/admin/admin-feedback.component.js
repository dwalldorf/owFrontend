System.register(['@angular/core', "./service/admin-feedback.service", "../user/service/user.service"], function(exports_1, context_1) {
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
    var core_1, admin_feedback_service_1, user_service_1;
    var AdminFeedbackComponent;
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
            }],
        execute: function() {
            AdminFeedbackComponent = (function () {
                function AdminFeedbackComponent(userService, adminFeedbackService) {
                    this.feedback = null;
                    this.restFinished = false;
                    this.userService = userService;
                    this.adminFeedbackService = adminFeedbackService;
                }
                AdminFeedbackComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.restFinished = false;
                    this.userService.getCurrentUser().subscribe(function () {
                        _this.adminFeedbackService.getUserFeedback().subscribe(function (feedbacks) {
                            _this.restFinished = true;
                            _this.feedback = feedbacks;
                        });
                    });
                };
                AdminFeedbackComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/admin/views/feedback.html',
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