'use strict';

// This service reads data from the query string into a filter object.
app.service('QueryStringService', function ($location) {

    this.getFilters = function(filterObj) {
        var qs = $location.search();
        for (var param in filterObj) {
            if (param in qs) {
                filterObj[param] = qs[param];
            }
        }
        return filterObj;
    };
    
});
