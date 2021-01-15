$('button').click(function(){

	// Get value 
	let name = $('#name').val();
	let email = $('#email').val();
	let cell = $('#cell').val();
	let pass = $('#pass').val();


	$('.reg img').show();


	let start = setInterval(function(){

		$('.reg img').hide();

		if( name == '' ){
			$('p#name').html('<span style="color:red;">* Required</span>');
		}else {
			$('p#name').html('');
		}


		if( email == '' ){
			$('p#email').html('<span style="color:red;">* Required</span>');
		}else {
			$('p#email').html('');
		}

		if( cell == '' ){
			$('p#cell').html('<span style="color:red;">* Required</span>');
		}else {
			$('p#cell').html('');
		}

		if( pass == '' ){
			$('p#pass').html('<span style="color:red;">* Required</span>');
		}else {
			$('p#pass').html('');
		}


		if( name == '' || email == '' || cell == '' || pass == ''  ){

			$('h3').html('<span style="color:red;">All fields are required !</span>');

		}else {
			$('h3').html('<span style="color:green;">Data stable !</span>');
		}

		clearInterval(start);

	}, 3000);



});