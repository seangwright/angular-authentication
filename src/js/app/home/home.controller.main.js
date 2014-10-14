(function () {
    'use strict';
    
    var controllersModule = angular.module('app.home');
    
    controllersModule.controller('HomeMainController', HomeMainController);
    
    HomeMainController.$inject = [];
    
    function HomeMainController() {
        var vm = this;
    }
}());
