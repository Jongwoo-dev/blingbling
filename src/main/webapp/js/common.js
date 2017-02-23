var member

$(function() {

	// header.html을 가져와서 붙인다.
	$.get('../header.html', function(result) {
		$('#header').html(result);
		
		$('#login-link').click(function(){
			location.href = '../auth/testlogin.html';
		});
	});
});

$(function() {
	// footer.html을 가져와서 붙인다.
	$.get('../footer.html', function(result) {
		$('#footer').html(result);
	});
});