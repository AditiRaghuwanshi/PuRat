$(document).ready(function(){

	$('button[type=submit]').attr('disabled','disabled');

	var randomNum1;
	var randomNum2;

	//set the largeest number to display

	var maxNum = 20;
	var total;

	randomNum1 = Math.ceil(Math.random()*maxNum);
	randomNum2 = Math.ceil(Math.random()*maxNum);
	total =randomNum1 + randomNum2;

	$( "#question" ).prepend( randomNum1 + " + " + randomNum2 + "=" );

	// When users input the value

	$( "#ans" ).keyup(function() {

		var input = $(this).val();
		var slideSpeed = 200;

		$('#message').hide();

		if (input == total) {

			$('button[type=submit]').removeAttr('disabled');
			$('#success').slideDown(slideSpeed);
			$('#fail').slideUp(slideSpeed);

		}

		else {

			$('button[type=submit]').attr('disabled','disabled');
			$('#fail').slideDown(slideSpeed);
			$('#success').slideUp(slideSpeed);

		}

	});

	// Wheen "reset button" click, generating new randomNum1 & randomNum2

});