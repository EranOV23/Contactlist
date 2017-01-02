var app = angular.module('contactList', ['ui.router']);

app.config(function($stateProvider) {
  $stateProvider

	// Homepage.
	.state('home', {
		url: '/',
		controller: 'HomeController',
		templateUrl: '/home/home.html',
		resolve: {

			// Waiting for the list of contacts.
			contacts: function (dataService) {
				return dataService.getAllContacts();
			}
		}
	});
});
