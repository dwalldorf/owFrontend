System.register(['@angular/core', '@angular/http', "../../app.config"], function(exports_1, context_1) {
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
    var core_1, http_1, app_config_1;
    var HttpService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            }],
        execute: function() {
            HttpService = (function () {
                function HttpService(http) {
                    this.http = http;
                    this.headers = new http_1.Headers();
                    this.headers.append('Content-Type', 'application/json');
                    this.headers.append('Accept', 'application/json');
                    this.requestsInProgress = [];
                }
                HttpService.prototype.makeRequest = function (method, url, payload) {
                    var _this = this;
                    if (payload === void 0) { payload = null; }
                    if (!this.isValidMethod(method)) {
                        throw new Error('invalid http method: ' + method);
                    }
                    url = app_config_1.AppConfig.API_PREFIX + url;
                    var requestEventEmitter = new core_1.EventEmitter(), requestHash = this.getRequestHash(method, url);
                    if (this.hasRequestInProgress(requestHash)) {
                        return this.getRequestInProgress(requestHash);
                    }
                    payload = JSON.stringify(payload);
                    var observable;
                    switch (method) {
                        case HttpService.METHOD_GET:
                            observable = this.http.get(url, this.headers);
                            break;
                        case HttpService.METHOD_POST:
                            observable = this.http.post(url, payload, this.headers);
                            break;
                        case HttpService.METHOD_PUT:
                            observable = this.http.put(url, payload, this.headers);
                            break;
                        case HttpService.METHOD_DELETE:
                            observable = this.http.delete(url, this.headers);
                            break;
                    }
                    this.requestsInProgress[requestHash] = requestEventEmitter;
                    observable.subscribe(function (res) {
                        var emitVal = true;
                        try {
                            emitVal = res.json();
                        }
                        catch (error) {
                        }
                        requestEventEmitter.emit(emitVal);
                        _this.finishRequest(requestHash);
                    }, function (err) {
                        requestEventEmitter.error(err);
                        _this.finishRequest(requestHash);
                    }, function () {
                        _this.finishRequest(requestHash);
                    });
                    return requestEventEmitter;
                };
                HttpService.prototype.isValidMethod = function (method) {
                    return (HttpService.ALLOWED_METHODS.indexOf(method) >= 0);
                };
                HttpService.prototype.isRequestInProgress = function (method, url) {
                    var hash = this.getRequestHash(method, url), res = false;
                    if (this.requestsInProgress.hasOwnProperty(hash)) {
                        res = this.requestsInProgress[hash];
                    }
                    return res;
                };
                HttpService.prototype.hasRequestInProgress = function (requestHash) {
                    return this.requestsInProgress.hasOwnProperty(requestHash);
                };
                HttpService.prototype.getRequestInProgress = function (requestHash) {
                    if (!this.hasRequestInProgress(requestHash)) {
                        throw new Error('no such request in progress: ' + requestHash);
                    }
                    return this.requestsInProgress[requestHash];
                };
                HttpService.prototype.finishRequest = function (requestHash) {
                    delete this.requestsInProgress[requestHash];
                };
                HttpService.prototype.handleRequest = function (method, url, request) {
                    var requestEventEmitter = new core_1.EventEmitter();
                    request.subscribe(function (res) { return requestEventEmitter.emit(res.json()); });
                    this.requestsInProgress[this.getRequestHash(method, url)] = requestEventEmitter;
                    return requestEventEmitter;
                };
                HttpService.prototype.getRequestHash = function (method, url) {
                    return method + ':' + url;
                };
                HttpService.METHOD_GET = 'get';
                HttpService.METHOD_POST = 'post';
                HttpService.METHOD_DELETE = 'delete';
                HttpService.METHOD_PUT = 'put';
                HttpService.ALLOWED_METHODS = [
                    HttpService.METHOD_GET,
                    HttpService.METHOD_POST,
                    HttpService.METHOD_DELETE,
                    HttpService.METHOD_PUT
                ];
                HttpService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpService);
                return HttpService;
            }());
            exports_1("HttpService", HttpService);
        }
    }
});
//# sourceMappingURL=http.service.js.map