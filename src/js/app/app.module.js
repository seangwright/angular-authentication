(function () {
    'use strict';

    var appModule = angular.module('app', ['ngRoute', 'app.common', 'app.home', 'app.login', 'app.profile']);

    appModule.config(config);
    appModule.run(run);

    /* @ngInject */
    function config($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $routeProvider
            .when('/', {
                redirectTo: '/home'
            })
            .when('/login', {
                controller: 'LoginMainController',
                controllerAs: 'vm',
                templateUrl: 'js/app/login/login.controller.main.html',
                resolve: {
                    isNotAuthenticated: function (commonAuth) {
                        return commonAuth.resolveUnAuthentication();
                    }
                }
            })
            .when('/home', {
                controller: 'HomeMainController',
                controllerAs: 'vm',
                templateUrl: 'js/app/home/home.controller.main.html',
                resolve: {
                    isAuthorized: function (commonAuth, CommonAppRoles) {
                        return commonAuth.resolveAuthorization(CommonAppRoles.user);
                    }
                }
            })
            .when('/profile', {
                controller: 'ProfileMainController',
                controllerAs: 'vm',
                templateUrl: 'js/app/profile/profile.controller.main.html',
                resolve: {
                    isAuthorized: function (commonAuth, CommonAppRoles) {
                        return commonAuth.resolveAuthorization(CommonAppRoles.superUser);
                    }
                }
            })
            .otherwise('/');
    }

    /* @ngInject */
    function run($rootScope) {
        
    }

    angular.element(document).ready(function () {
        angular.bootstrap(document, ['app']);
    });
}());