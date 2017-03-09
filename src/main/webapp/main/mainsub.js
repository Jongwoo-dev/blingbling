


$('#btn_category button').click(function() {
	var btn = $(this);
			$('.btn.btn-default.content-default.selected').removeClass('selected');
			btn.addClass('selected');
	});
$('#content-headersub span').click(function() {
	var btn = $(this);
			$('.headersubsle.headersubsle.selected').removeClass('selected');
			btn.addClass('selected');
	});
