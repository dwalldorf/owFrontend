System.register(['@angular/core', "./service/feedback.service", "./model/feedback", "../core/service/flash.service", "../core/model/flash.message", "../core/service/apploading.service"], function(exports_1, context_1) {
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
    var core_1, feedback_service_1, feedback_1, flash_service_1, flash_message_1, apploading_service_1;
    var FeedbackDialogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feedback_service_1_1) {
                feedback_service_1 = feedback_service_1_1;
            },
            function (feedback_1_1) {
                feedback_1 = feedback_1_1;
            },
            function (flash_service_1_1) {
                flash_service_1 = flash_service_1_1;
            },
            function (flash_message_1_1) {
                flash_message_1 = flash_message_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            }],
        execute: function() {
            FeedbackDialogComponent = (function () {
                function FeedbackDialogComponent(appLoadingService, flashService, feedbackService) {
                    this.STATUS_ID = 'feedback';
                    this.appLoadingService = appLoadingService;
                    this.flashService = flashService;
                    this.feedbackService = feedbackService;
                }
                FeedbackDialogComponent.prototype.ngOnInit = function () {
                    this.resetFeedback();
                };
                FeedbackDialogComponent.prototype.submitFeedback = function () {
                    var _this = this;
                    this.appLoadingService.setLoading(this.STATUS_ID);
                    this.feedbackService.submitFeedback(this.feedback)
                        .subscribe(function () {
                        _this.appLoadingService.finishedLoading(_this.STATUS_ID);
                        _this.resetDialog();
                        _this.flashService.addMessage(new flash_message_1.FlashMessage('Your feedback was submitted!', flash_message_1.FlashMessage.SUCCESS));
                    });
                };
                FeedbackDialogComponent.prototype.showDialog = function () {
                    jQuery('#feedback-dialog').modal('show');
                };
                FeedbackDialogComponent.prototype.resetDialog = function () {
                    jQuery('#feedback-dialog').modal('hide');
                    this.resetFeedback();
                };
                FeedbackDialogComponent.prototype.resetFeedback = function () {
                    this.feedback = new feedback_1.Feedback();
                };
                FeedbackDialogComponent = __decorate([
                    core_1.Component({
                        selector: 'feedback-dialog',
                        templateUrl: 'app/feedback/views/feedback-dialog.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, flash_service_1.FlashService, feedback_service_1.FeedbackService])
                ], FeedbackDialogComponent);
                return FeedbackDialogComponent;
            }());
            exports_1("FeedbackDialogComponent", FeedbackDialogComponent);
        }
    }
});
//# sourceMappingURL=feedback-dialog.component.js.map