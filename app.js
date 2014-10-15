angular.module('mim', ['ngRoute'])
	
	.config(function($routeProvider, $locationProvider) {

		$routeProvider
			.when('/', {
				templateUrl : 'partials/home.html'
			})
			.when('/home', {
				redirectTo : '/'
			})

			.when('/work', {
				templateUrl : 'partials/work.html'
			})
			.when('/work/:id', {
				templateUrl : 'partials/work-detail.html'
			})

			.otherwise({
				redirectTo : '/'
			});
	
		// use the HTML5 History API
		// $locationProvider.html5Mode(true);
	});