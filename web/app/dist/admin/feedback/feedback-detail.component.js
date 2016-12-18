System.register(['@angular/core', "../../feedback/model/feedback"], function(exports_1, context_1) {
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
    var core_1, feedback_1;
    var AdminFeedbackDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (feedback_1_1) {
                feedback_1 = feedback_1_1;
            }],
        execute: function() {
            AdminFeedbackDetailComponent = (function () {
                function AdminFeedbackDetailComponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', feedback_1.Feedback)
                ], AdminFeedbackDetailComponent.prototype, "feedback", void 0);
                AdminFeedbackDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-feedback-detail',
                        templateUrl: 'app/admin/feedback/views/feedback-detail.html',
                    }), 
                    __metadata('design:paramtypes', [])
                ], AdminFeedbackDetailComponent);
                return AdminFeedbackDetailComponent;
            }());
            exports_1("AdminFeedbackDetailComponent", AdminFeedbackDetailComponent);
        }
    }
});
//# sourceMappingURL=feedback-detail.component.js.map