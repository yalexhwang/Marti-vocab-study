var vocabApp = angular.module('vocabApp', ['ngRoute']);
var url = "http://localhost:3000";

vocabApp.service('WordBankService', function($http, $q) {
	this.add = function(newWord) {
		var def = $q.defer();
		$http.post(url + '/add', newWord)
		.then(function success(rspns) {
			def.resolve(rspns);
		}, function fail(rspns) {
			def.reject(rspns);
		});
		return def.promise;
	};

});

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

