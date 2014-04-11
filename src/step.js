angular.module('mgo-angular-wizard').directive('wzStep', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {
            wzTitle: '@',
            title: '@'
        },
        require: ['^wizard', '^form'],
        templateUrl: function(element, attributes) {
          return attributes.template || "step.html";
        },
        link: function($scope, $element, $attrs, ctrls) {
            $scope.title = $scope.title || $scope.wzTitle;
            var form = ctrls[1];
            $scope.form = form;
            var wizard = ctrls[0];
            wizard.addStep($scope);
        }
    }
});
