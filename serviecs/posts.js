(function () {

    angular.module('contactList')
        .factory('dataService', ['$http', '$q', '$log', dataService]);

    /**
     * Loading the contacts list from HoneyBook API.
     */
    function dataService($http, $q, $log) {

        // The Backend's domain. 
        // We're using a separate const for this, so that it'll be easier to 
        // inject it from the environment (production/staging/dev), when we 
        // decide to move it to production.
        var BACKEND_URL = 'https://candidate-test.herokuapp.com',
        CONTACTS_API = '/contacts',
        URL = BACKEND_URL+CONTACTS_API

        return {
               getAllContacts: getAllContacts,
        };

        function getAllContacts() {

            // Get the data from the API.
            return $http.get( URL )

                // If successful, return the data.
                .then(function(response) {
                    return response.data;
                })

                // If error, print to log and reject the promise.
                .catch(function(response) {
                    $log.error('Error retrieving Contacts: ' + response.statusText);
                    return $q.reject('Error retrieving Contacts.');
                });
        };

    };

}());