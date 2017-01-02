// Home page controller.
(function () {
angular.module('contactList')
	.controller('HomeController', 
		['$scope',
		'contacts', 

		// Set the contacts data to allContacts
		function HomeController ($scope, contacts) {
			$scope.allContacts = contacts;
		}
	]);
}());