(function () {
    'use strict';
    
    var directivesModule = angular.module('app.common');
    
    directivesModule.directive('appCommonLogout', appCommonLogout);
    
    appCommonLogout.$inject = [];
    
    function appCommonLogout() {
        return {
            restrict: 'A',
            templateUrl: 'js/app/common/common.directive.logout.html',
            replace: false,
            priority: 0,
            transclude: false,
            scope: false,
            terminal: false,
            require: false,
            controller: controller,
            controllerAs: 'vm',
            link: link
        };
        
        function link(scope, elem, attrs, ctrl) {
            
        }
        
        function controller($scope, $element, $attrs, $transclude) {
            var vm = this;
            
            vm.logout = logout;
            
            function logout() {
                console.log("You have been logged out");
            }
        }
    }
}());
