'use strict'
define(['app'], function (app) {
    app.directive('hideInIframe', [function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                if (self != top){
                    element.addClass('ng-hide');
                }
            }
        };
    }]);
});