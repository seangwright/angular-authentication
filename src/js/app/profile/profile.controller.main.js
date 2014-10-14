(function () {
    'use strict';
    
    var controllersModule = angular.module('app.profile');
    
    controllersModule.controller('ProfileMainController', ProfileMainController);
    
    ProfileMainController.$inject = [];
    
    function ProfileMainController() {
        var vm = this;
    }
}());
