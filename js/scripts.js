var vocabApp = angular.module('vocabApp', ['ngRoute']);
vocabApp.controller('vocabCtrl', function($scope, $http) {
	$scope.test = "Works!";
});

vocabApp.config(function($routeProvider) {
	$routeProvider.when('/quiz', {
		templateUrl: 'templates/quiz.html',
		controller: 'quizCtrl'
	});

	$routeProvider.when('/review', {
		templateUrl: 'templates/review.html',
		controller: 'reviewCtrl'
	});

});

