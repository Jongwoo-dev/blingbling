
$('.btn-lg2').click(function() {
	var param = {
		category : 'FAQ',
		prefix : $('#faq-prefix').val(),
	    title: $('#title-box').val(),
		content: $('#content-text').val(),
      
	}
	console.log(param);
	$.post('add.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
		location.href = 'admin-faq.html';
	}, 'json');
});






// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg1').click(function() {
	location.href = 'admin-faq.html';
});






