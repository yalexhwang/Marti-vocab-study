vocabApp.controller('reviewCtrl', function($scope) {
	$scope.flashCardMode = false;
	var index = 0; 
	$scope.wordBankMode = false;

	$scope.reviewBank = koreanBank;
	console.log($scope.reviewBank);

	$scope.showFlashCard = function() {
		$scope.flashCardMode = true;
		$scope.wordBankMode = false;
		
		$scope.fcWord = $scope.reviewBank[index].word; 
		$scope.fcGrmm = $scope.reviewBank[index].grmm; 
		$scope.fcMeaning = $scope.reviewBank[index].meaning; 
	};

	$scope.showWordBank = function() {
		$scope.wordBankMode = true;
		$scope.flashCardMode = false;
	};

	$scope.prev = function() {
		if (index > 0) {
			index--;
			$scope.fcWord = $scope.reviewBank[index].word; 
			$scope.fcGrmm = $scope.reviewBank[index].grmm; 
			$scope.fcMeaning = $scope.reviewBank[index].meaning; 
		} else {
			console.log("This is the first card.");
		}
	};

	$scope.next = function() {
		if (index === $scope.reviewBank.length - 1) {
			console.log("This is the last card.");
		} else {
			index++;
			$scope.fcWord = $scope.reviewBank[index].word; 
			$scope.fcGrmm = $scope.reviewBank[index].grmm; 
			$scope.fcMeaning = $scope.reviewBank[index].meaning; 
		}
	};


});