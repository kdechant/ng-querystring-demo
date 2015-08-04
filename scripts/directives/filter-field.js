'use strict';
app.directive('filterField', function () {
    return {
        restrict: 'E',
        scope: {
            filters: '=',
            field: '@'
        },
        template: '<input type="search" class="form-control" placeholder="filter" ng-model="filters[field]" ng-model-options="{ debounce: 250 }" ng-change="doFilter()">',
        controller: function ($scope, $location) {
            $scope.doFilter = function () {
                // update the query string
                if ($scope.filters[$scope.field] != '') {
                    $location.search($scope.field, $scope.filters[$scope.field]);
                } else {
                    // remove from query string if empty
                    $location.search($scope.field, null);
                }
            }
        }
    };
});
