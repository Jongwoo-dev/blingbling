$(function() {
	// header.html을 가져와서 붙인다.
	$.get('../header.html', function(result) {
		$('#header').html(result);
	});
});

$(function() {
	// footer.html을 가져와서 붙인다.
	$.get('../footer.html', function(result) {
		$('#footer').html(result);
	});
});