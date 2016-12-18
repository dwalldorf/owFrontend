System.register(['@angular/core', "../core/service/flash.service", "../core/service/apploading.service", "./service/user.service", "./model/followSteamId", "../core/model/flash.message"], function(exports_1, context_1) {
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
    var core_1, flash_service_1, apploading_service_1, user_service_1, followSteamId_1, flash_message_1;
    var UserSettingsDialogComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flash_service_1_1) {
                flash_service_1 = flash_service_1_1;
            },
            function (apploading_service_1_1) {
                apploading_service_1 = apploading_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (followSteamId_1_1) {
                followSteamId_1 = followSteamId_1_1;
            },
            function (flash_message_1_1) {
                flash_message_1 = flash_message_1_1;
            }],
        execute: function() {
            UserSettingsDialogComponent = (function () {
                function UserSettingsDialogComponent(appLoadingService, flashService, userService) {
                    this.STATUS_ID = 'userSettings';
                    this._appLoadingService = appLoadingService;
                    this._flashService = flashService;
                    this._userService = userService;
                }
                UserSettingsDialogComponent.prototype.showDialog = function () {
                    var _this = this;
                    jQuery('#usersettings-dialog').modal('show');
                    this._userService.getCurrentUser().subscribe(function (user) {
                        _this._appLoadingService.finishedLoading(_this.STATUS_ID);
                        _this.user = user;
                        if (_this.user.userSettings.followSteamIds.length == 0) {
                            _this.user.userSettings.followSteamIds = [new followSteamId_1.FollowSteamId()];
                        }
                    });
                };
                UserSettingsDialogComponent.prototype.addSteamId = function () {
                    this.user.userSettings.followSteamIds.push(new followSteamId_1.FollowSteamId());
                };
                UserSettingsDialogComponent.prototype.save = function () {
                    var _this = this;
                    this._appLoadingService.setLoading(this.STATUS_ID);
                    var followSteamIds = [];
                    for (var i = 0; i < this.user.userSettings.followSteamIds.length; i++) {
                        if (this.user.userSettings.followSteamIds[i].id.length > 0) {
                            followSteamIds.push(this.user.userSettings.followSteamIds[i]);
                        }
                    }
                    this.user.userSettings.followSteamIds = followSteamIds;
                    this._userService.updateSettings(this.user).subscribe(function () {
                        _this.resetDialog();
                        _this._appLoadingService.finishedLoading(_this.STATUS_ID);
                        _this._flashService.addMessage(new flash_message_1.FlashMessage('User settings updated', flash_message_1.FlashMessage.SUCCESS));
                    });
                };
                UserSettingsDialogComponent.prototype.resetDialog = function () {
                    jQuery('#usersettings-dialog').modal('hide');
                };
                UserSettingsDialogComponent = __decorate([
                    core_1.Component({
                        selector: 'usersettings-dialog',
                        templateUrl: 'app/user/views/usersettings-dialog.html',
                    }), 
                    __metadata('design:paramtypes', [apploading_service_1.AppLoadingService, flash_service_1.FlashService, user_service_1.UserService])
                ], UserSettingsDialogComponent);
                return UserSettingsDialogComponent;
            }());
            exports_1("UserSettingsDialogComponent", UserSettingsDialogComponent);
        }
    }
});
//# sourceMappingURL=usersettings-dialog.component.js.map