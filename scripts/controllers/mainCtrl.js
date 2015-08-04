'use strict';
angular.module('ngdemoApp')
    .controller('MainCtrl', function ($scope) {

        // some data for the table
        $scope.books = [
            {author: 'J.R.R. Tolkien', title: 'The Hobbit'},
            {author: 'Douglas Adams', title: "Hitchhiker's Guide to the Galaxy"},
            {author: 'Herman Melville', title: 'Moby Dick'},
        ];

    });
