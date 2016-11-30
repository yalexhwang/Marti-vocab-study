var vocabApp = angular.module('vocabApp', ['ngRoute']);
var url = "http://localhost:3000";

function shuffleArray(arr) {
	for (let i = arr.length; i; i--) {
		let j = Math.floor(Math.random() * i);
		[arr[i - 1], arr[j]] = [arr[j], arr[i - 1]];
	}
	return arr;
}

function convertPartName(num) {
	switch(num) {
		case 0:
			return "명사(noun)";
		case 1:
			return "대명사(pronoun)";
		case 2:
			return "동사(verb)";
		case 3:
			return "형용사(adjective)";
		case 4:
			return "부사(adverb)";
		case 5:
			return "전치사(proposition)";
		case 6:
			return "접속사(conjuction)";
		case 7:
			return "감탄사(interjection)";
		default: 
			return "N/A"
	}
}

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

	this.getFullList = function() {
		var def = $q.defer();
		$http.post(url + '/get_full_list')
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

