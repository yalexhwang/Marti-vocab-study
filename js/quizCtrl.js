vocabApp.controller('quizCtrl', function($scope) {
	$scope.nextButton = "Next";

	$scope.multipleChoice = 4;
	var multipleChoiceNum = $scope.multipleChoice - 1;

	$scope.numQ = koreanBank.length; // num of available questions
	$scope.qNum = 1; // question number, starting at 1

	$scope.score = 0;
	//generated from shuffled bank for every time a quiz starts
	$scope.questionSource = []; 
	$scope.answersSource = [];
	$scope.qWord = ""; // the question word
	$scope.qWordAnswer = ""; // the correct answer
	$scope.qAnswers = []; // array of wrong answer options to be placed
	
	var correctAnswerIndex; //used in 'submitForNext()'
	var questionIndex = 1; //starting after the initial question

	$scope.startQuiz = function() {
		//shuffle the bank and have the arrays ready
		shuffleBank();
		//make the first question (question word and its answer)
		$scope.qWord = $scope.questionSource[0].word;
		$scope.qWordAnswer = $scope.answersSource[0];
		console.log($scope.qWord, $scope.qWordAnswer);
		placeAnswerOptions();
		$scope.hideStartBtn = true;
	};

	$scope.submitForNext = function() {
		if ($scope.qNum < $scope.numQ) {
			if ($scope.qNum + 1 === $scope.numQ) {
				$scope.nextButton = "DONE";
				console.log("Q15. switch the button.");
			}
			//check the score
			//HOW???
			console.log("score: " + $scope.score);
		
			//clear the buttons
			var radioBtn = document.getElementsByClassName('q-answer');
			for (var i = 0; i < radioBtn.length; i++) {
				radioBtn[i].checked = false;
			}
			
			//set the question and place options
			$scope.qWord = $scope.questionSource[questionIndex].word;
			$scope.qWordAnswer = $scope.answersSource[questionIndex];
			$scope.qAnswers = [];
			console.log($scope.qWord, $scope.qWordAnswer);
			questionIndex++; //update the index for the next question
			$scope.qNum++;
			placeAnswerOptions();	
			
		} else {
			//End the quiz
			console.log("Done!");
		}
		
	};



	//------------functions defined-----------------//

	function placeAnswerOptions() {
		//add the correct answer to the array $scope.qAnswers
		$scope.qAnswers.push($scope.qWordAnswer);
		//make a temp array to hold other answer options
		var availableAnswerOptions = [];
		for (var i = 0; i < $scope.answersSource.length; i++) {
			availableAnswerOptions.push($scope.answersSource[i]);
		}
		//remove the correct answer (the first of the array)
		availableAnswerOptions.shift();
		console.log(availableAnswerOptions);
		//shuffle the temp array for answer options, push the first 3 to $scope.aQnswers
		var arrLength = 15; // 16(current # of word objects) - 1 (initial question)
		for (var i = 0; i < 100; i++) {
			var pick1 = Math.floor(Math.random() * arrLength);
			var pick2 = Math.floor(Math.random() * arrLength);
			var a1 = availableAnswerOptions[pick1];
			var a2 = availableAnswerOptions[pick2];
			availableAnswerOptions[pick1] = a2;
			availableAnswerOptions[pick2] = a1;
		}
		console.log(availableAnswerOptions);
		for (var i = 0; i < multipleChoiceNum; i++) {
			$scope.qAnswers.push(availableAnswerOptions[i]);
		}

		//shuffle $scope.qAnswers (for random answer option placement)
		for (var i = 0; i < $scope.qAnswers.length; i++) {
			var pick1 = Math.floor(Math.random() * $scope.qAnswers.length);
			var pick2 = Math.floor(Math.random() * $scope.qAnswers.length);
			var a1 = $scope.qAnswers[pick1];
			var a2 = $scope.qAnswers[pick2];
			$scope.qAnswers[pick1] = a2;
			$scope.qAnswers[pick2] = a1;
		}
		console.log($scope.qAnswers);
		correctAnswerIndex = $scope.qAnswers.indexOf($scope.qWordAnswer);
		console.log(correctAnswerIndex);
	}

	function shuffleBank() {
		for (var i = 0; i < koreanBank.length; i++) {
			var pick1 = Math.floor(Math.random() * koreanBank.length);	
			var pick2 = Math.floor(Math.random() * koreanBank.length);
			var w1 = koreanBank[pick1];
			var w2 = koreanBank[pick2];
			koreanBank[pick1] = w2;
			koreanBank[pick2] = w1;
		}
		for (var i = 0; i < koreanBank.length; i++) {
			$scope.questionSource.push(koreanBank[i]);
			$scope.answersSource.push(koreanBank[i].meaning);
		}
		console.log($scope.questionSource);
		console.log($scope.answersSource);
	}
});