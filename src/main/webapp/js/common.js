var member

$(function() {

	// header.html을 가져와서 붙인다.
	$.get('../header.html', function(result) {
		$('#header').html(result);
		
		$('#login-link').click(function(){
			location.href = '../auth/testlogin.html';
		});
		
		$('#service-center-link').click(function(event) {
			event.preventDefault();
			location.href='../serviceCenter/notice.html';
		});
		
		$('#titleimg').click(function(event) {
			location.href='/blingbling/';
		});
			
	});
});

$(function() {
	// footer.html을 가져와서 붙인다.
	$.get('../footer.html', function(result) {
		$('#footer').html(result);
	});
});

var jqueryArrayToJson = function(list) {
	var result = '';
	for (var i = 0; i < list.length; i++) {
		if (i != 0) {
			result += ',';
		}
		result += list.eq(i).val();
	}
	result += '';
	return result;
}

var arrayToJson = function(list) {
	var result = '';
	for (var i = 0; i < list.length; i++) {
		if (i != 0) {
			result += ',';
		}
		result += list[i];
	}
	result += '';
	return result;
}