'use strict';
angular.module('ngdemoApp')
    .controller('MainCtrl', function ($scope, BookService) {

        // a simple filter object, with default filter values
        $scope.filters = { author: '', title: '' };

        
        $scope.update = function() {
            BookService.all($scope.filters).then(function(data) {
                $scope.books = data;
            });
        }
        $scope.update();
    });
