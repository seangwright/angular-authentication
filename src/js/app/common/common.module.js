(function () {
    'use strict';

    var module = angular.module('app.common', []);

    module.constant('CommonRoles', {
        user: {
            roleName: 'User',
            roleLevel: 10
        },
        superUser: {
            roleName: 'Super User',
            roleLevel: 20
        },
        admin: {
            roleName: 'Administrator',
            roleLevel: 30
        },
        globalAdmin: {
            roleName: 'Global Administrator',
            roleLevel: 100
        }
    });

    module.constant('CommonRouteErrors', {
        401: { reRoutePath: "/login" },
        403: { reRoutePath: "" },
        404: { reRoutePath: "/home" },
        440: { reRoutePath: "/home" }
    });
}());