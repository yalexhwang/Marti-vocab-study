var vocabApp = angular.module('vocabApp', ['ngRoute']);
vocabApp.controller('vocabCtrl', function($scope, $rootScope, $http) {
	$rootScope.currentView = "";
	$scope.test = "Works!";
});

vocabApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'vocabCtrl',
		templateUrl: 'templates/home.html'
	});

	$routeProvider.when('/quiz', {
		templateUrl: 'templates/quiz.html',
		controller: 'quizCtrl'
	});

	$routeProvider.when('/review', {
		templateUrl: 'templates/review.html',
		controller: 'reviewCtrl'
	});

	$routeProvider.when('/bank', {
		templateUrl: 'templates/bank.html',
		controller: 'bankCtrl'
	});


});

