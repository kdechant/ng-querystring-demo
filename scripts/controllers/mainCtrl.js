'use strict';
angular.module('ngdemoApp')
    .controller('MainCtrl', function ($scope, $location, BookService) {

        // a simple filter object, with default filter values
        $scope.filters = { author: '', title: '' };

        // read filters from the query string, and use them to
        // replace the default filters
        var qs = $location.search();
        for (var fld in $scope.filters) {
            if (fld in qs) {
                $scope.filters[fld] = qs[fld];
            }
        }
        
        $scope.update = function(fld) {
            // update the query string with the new filters
            if ($scope.filters[fld] != '') {
                $location.search(fld, $scope.filters[fld]);
            } else {
                // remove empty filters
                $location.search(fld, null);
            }
        }
        
        BookService.all($scope.filters).then(function(data) {
            $scope.books = data;
        });
    });
