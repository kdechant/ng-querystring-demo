'use strict';
app.service('BookService', function ($q) {

    // some data for the table
    this.books = [
        {author: 'J.R.R. Tolkien', title: 'The Fellowship of the Ring'},
        {author: 'J.R.R. Tolkien', title: 'The Two Towers'},
        {author: 'J.R.R. Tolkien', title: 'The Return of the King'},
        {author: 'Douglas Adams', title: "Hitchhiker's Guide to the Galaxy"},
        {author: 'Herman Melville', title: 'Moby Dick'},
    ];

    this.all = function (filterObject) {

        // This service acts like it called $http.get and returned the resulting
        // proimse. Really it just builds a promise around some mock data.
        var defer = $q.defer();
        
        var result = [];
        for (var i = 0; i < this.books.length; i++) {
            if (filterObject.author != '' && this.books[i].author.toLowerCase().indexOf(filterObject.author.toLowerCase()) == -1) {
                continue;
            }
            if (filterObject.title != '' && this.books[i].title.toLowerCase().indexOf(filterObject.title.toLowerCase()) == -1) {
                continue;
            }
            result.push(this.books[i]);
        }
        defer.resolve(result);

        return defer.promise;
    };

});
