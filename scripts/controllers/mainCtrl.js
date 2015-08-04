'use strict';
angular.module('ngdemoApp')
    .controller('MainCtrl', function ($scope, $location, QueryStringService, BookService) {

        // a simple filter object, with default filter values
        var default_filters = { author: '', title: '' };

        // read filters from the query string
        $scope.filters = QueryStringService.getFilters(default_filters);
                
        BookService.all($scope.filters).then(function(data) {
            $scope.books = data;
        });
    });
