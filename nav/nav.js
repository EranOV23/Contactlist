// Using a separate controller and view for the navgation bar
// to demonstrate separation in a larger and more complex projects

// Navgation bar controller.
angular.module('contactList').component('nav', {
	templateUrl: '/nav/nav.html',
	controller: function() {
	}
});