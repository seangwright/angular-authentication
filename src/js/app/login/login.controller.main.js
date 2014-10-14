(function () {
    'use strict';
    
    var controllersModule = angular.module('app.login');
    
    controllersModule.controller('LoginMainController', LoginMainController);
    
    LoginMainController.$inject = [];
    
    function LoginMainController() {
        var vm = this;
    }
}());
