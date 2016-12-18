System.register(['@angular/core', '@angular/common', 'ng2-file-upload/ng2-file-upload', "./service/demo-upload.service", "../core/service/flash.service"], function(exports_1, context_1) {
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
    var core_1, common_1, ng2_file_upload_1, demo_upload_service_1, flash_service_1;
    var DemoUploadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (ng2_file_upload_1_1) {
                ng2_file_upload_1 = ng2_file_upload_1_1;
            },
            function (demo_upload_service_1_1) {
                demo_upload_service_1 = demo_upload_service_1_1;
            },
            function (flash_service_1_1) {
                flash_service_1 = flash_service_1_1;
            }],
        execute: function() {
            DemoUploadComponent = (function () {
                function DemoUploadComponent(flashService, demoUploadService) {
                    this.hasBaseDropZoneOver = false;
                    this.uploader = new ng2_file_upload_1.FileUploader({ url: '/api/demo' });
                    this._flashService = flashService;
                    this._demoUploadService = demoUploadService;
                }
                DemoUploadComponent.prototype.fileOverBase = function (e) {
                    this.hasBaseDropZoneOver = e;
                };
                DemoUploadComponent.prototype.openUploadDialog = function () {
                    this._flashService.showDemoUpload();
                };
                DemoUploadComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-upload',
                        templateUrl: 'app/demoupload/views/demo-upload.html',
                        directives: [ng2_file_upload_1.FILE_UPLOAD_DIRECTIVES, common_1.NgClass, common_1.NgStyle, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES, ng2_file_upload_1.FileSelectDirective],
                    }), 
                    __metadata('design:paramtypes', [flash_service_1.FlashService, demo_upload_service_1.DemoUploadService])
                ], DemoUploadComponent);
                return DemoUploadComponent;
            }());
            exports_1("DemoUploadComponent", DemoUploadComponent);
        }
    }
});
//# sourceMappingURL=demo-upload.component.js.map