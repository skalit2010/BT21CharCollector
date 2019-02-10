$(document).ready(function() {
	var magicNumber;
	var totalScore = 0;
	var wins = 0;
	var losses = 0;
	var char1Num;
	var char2Num;
	var char3Num;
	var char4Num;

	function newNumbers() {
		magicNumber = Math.floor(Math.random() * 110) + 20;
		char1Num = Math.ceil(Math.random() * 12);
		char2Num = Math.ceil(Math.random() * 12);
		char3Num = Math.ceil(Math.random() * 12);
		char4Num = Math.ceil(Math.random() * 12);
	}

	function newGame() {
		newNumbers();
		totalScore = 0;
		$("#magicNumber").text(magicNumber);
		$("#totalScore").text(totalScore);
		$("#char1").attr("data-charactervalue", char1Num);
		$("#char2").attr("data-charactervalue", char2Num);
		$("#char3").attr("data-charactervalue", char3Num);
		$("#char4").attr("data-charactervalue", char4Num);
		$("#wins").text(wins);
		$("#losses").text(losses);
		$("#winOrLose").text("");

		//console.log(char1Num, char2Num, char3Num, char4Num);
	}

	function youWin() {
		$("#winOrLose").text("YOU WIN!");
		wins++;
		$("#wins").text(wins);
	}

	function youLose() {
		$("#winOrLose").text("YOU LOSE");
		losses++;
		$("#losses").text(losses);
	}

	newGame();

	$(".charimg").hover(function() {
		$(this).css({opacity: 0.3});
	},
	function() {
		$(this).css({opacity: 1});
	});

	// Function to add the character values together
	$(".charimg").on("click", function() {
		if (totalScore >= magicNumber) {
			return;
		}

		var characterValue = $(this).attr("data-charactervalue");
		characterValue = parseInt(characterValue);
		totalScore += characterValue;
		$("#totalScore").text(totalScore);

		if (totalScore === magicNumber) {
			youWin();
		} else if (totalScore > magicNumber) {
			youLose();
		}
	});

	$(".btn").on("click", function() {
		newGame();
	});

});