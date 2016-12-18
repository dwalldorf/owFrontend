System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AppConfig;
    return {
        setters:[],
        execute: function() {
            AppConfig = (function () {
                function AppConfig() {
                }
                AppConfig.API_PREFIX = '/app_dev.php/api';
                AppConfig.ROUTE_NAME_REGISTER = 'Register';
                AppConfig.ROUTE_NAME_LOGIN = 'Login';
                AppConfig.ROUTE_NAME_DASHBOARD = 'Dashboard';
                AppConfig.ROUTE_NAME_SCOREBOARD = 'Scoreboard';
                AppConfig.ROUTE_NAME_DEMOS = 'Demos';
                AppConfig.ROUTE_NAME_DEMO_DETAILS = 'DemoDetails';
                AppConfig.ROUTE_NAME_ADMIN = 'Admin';
                AppConfig.ROUTE_NAME_ADMIN_DASHBOARD = 'AdminDashboard';
                AppConfig.ROUTE_NAME_ADMIN_FEEDBACK = 'AdminFeedback';
                return AppConfig;
            }());
            exports_1("AppConfig", AppConfig);
        }
    }
});
//# sourceMappingURL=app.config.js.map