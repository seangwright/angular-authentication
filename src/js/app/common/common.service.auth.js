(function () {
    'use strict';

    var serviceModule = angular.module('app.common');

    serviceModule.factory('commonAuth', commonAuth);

    commonAuth.$inject = [];

    function commonAuth($q, CommonRoles, CommonRouteErrors) {
        var service = {},
            currentUser {
                isAuthenticated: false,
                role: {
                    roleName: '',
                    roleLevel: 0
                }
            };

        service.currentUserHasRole = currentUserHasRole;
        service.currentUserIsAuthenticated = currentUserIsAuthenticated;
        service.resolveAuthorization = resolveAuthorization;
        service.resolveUnAuthentication = resolveUnAuthentication;

        $rootScope.$on("$routeChangeError", function (event, current, previous, rejectionError) {
            var returnUrl;
            
            if (rejectionError === CommonRouteErrors["401"]) {
                if (rejectionError.reRoutePath) {
                    $location.path(rejectionError.reRoutePath);
                    return;
                } else if (rejectionError.requiresAuthentication === true) {
                    /*
                    returnUrl = $location.url();
                    $log.log('returnUrl=' + returnUrl);
                    $location.path('/login').search({
                        returnUrl: returnUrl
                    });
                    return;
                    */
                }
            }
        });

        return service;

        function currentUserHasRole(role) {
            if (currentUser.role.roleLevel >= role.roleLevel) {
                return true;
            }
            return false;
        }

        function currentUserIsAuthenticated() {
            return true;
        }

        function resolveAuthorization(requiredRole) {
            var defer = $q.defer();

            if (currentUserHasRole(requiredRole)) {
                defer.resolve();
            } else {
                defer.reject(AppRouteErrors["403"]);
            }
            return defer.promise;
        }

        function resolveUnAuthentication() {
            var defer = $q.defer();

            if (!currentUserIsAuthenticated()) {
                defer.resolve();
            } else {
                defer.reject(AppRouteErrors["440"]);
            }
            return defer.promise;
        }
    }
}());