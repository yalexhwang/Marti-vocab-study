vocabApp.controller('bankCtrl', function($scope, WordBankService) {
	$scope.grmmArr = ["명사(noun)", "대명사(pronoun)", "동사(verb)",  "형용사(adjective)", "부사(adverb)", "전치사(proposition)", "접속사(conjuction)", "감탄사(interjection)"];

	$scope.saved = 0;
	$scope.newWord = {};
	$scope.add = function() {
		console.log($scope.newWord);
		WordBankService.add($scope.newWord)
		.then(function success(rspns) {
			console.log(rspns);
			$scope.saved = 1;
			$scope.savedWord = rspns.data.doc;
			$scope.newWord.lng = "";
			$scope.newWord.word = "";
			$scope.newWord.part = "";
			$scope.newWord.def = "";
		}, function fail(rspns) {
			console.log(rspns);
		});
	};

	$scope.savedOK = function() {
		$scope.saved = 0;
		$scope.savedWord = "";
	}

});