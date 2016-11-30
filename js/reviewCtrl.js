vocabApp.controller('reviewCtrl', function($scope, WordBankService) {

	WordBankService.getFullList()
	.then(function success(rspns) {
		console.log(rspns);
		$scope.fullList = rspns.data.doc;
	}, function fail(rspns) {
		console.log(rspns);
	});

	$scope.flashCardMode = false;
	$scope.wordBankMode = false;

	var index = 0; 
	$scope.showFlashCard = function() {
		$scope.flashCardList = shuffleArray($scope.fullList);
		console.log($scope.flashCardList);
 		$scope.fcWord = $scope.flashCardList[index].word;
		$scope.fcGrmm = convertPartName($scope.flashCardList[index].part);
		$scope.fcMeaning = $scope.flashCardList[index].definition;

		$scope.flashCardMode = true;
		$scope.wordBankMode = false;
	};

	$scope.prev = function() {
		if (index > 0) {
			index--;
			$scope.fcWord = $scope.flashCardList[index].word; 
			$scope.fcGrmm = convertPartName($scope.flashCardList[index].part); 
			$scope.fcMeaning = $scope.flashCardList[index].definition; 
		} else {
			console.log("This is the first card.");
			$scope.noPrev = 'stop';
			// var prevBtn = angular.element(document.querySelector('.flashcard-left'))[0];
			// console.log(prevBtn);
			// prevBtn.addClass('stop');
		}
	};

	$scope.next = function() {
		if (index === $scope.flashCardList.length - 1) {
			console.log("This is the last card.");
		} else {
			index++;
			$scope.fcWord = $scope.flashCardList[index].word; 
			$scope.fcGrmm = convertPartName($scope.flashCardList[index].part); 
			$scope.fcMeaning = $scope.flashCardList[index].definition; 
		}
	};

	$scope.showWordBank = function() {
		for (let i = 0; i < $scope.fullList.length; i++) {
			$scope.fullList[i].partName = convertPartName($scope.fullList[i].part);
		}
		console.log($scope.fullList);
		$scope.wordBankMode = true;
		$scope.flashCardMode = false;
	};

});