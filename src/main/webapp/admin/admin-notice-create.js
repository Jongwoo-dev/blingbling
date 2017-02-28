//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	
// add처리
	$('.btn-lg2').click(function() {
		var param = {
				memberNo : member.memberNo,
				category : '공지사항',
				prefix : $('#faq-prefix').val(),
				title: $('#title-box').val(),
				content: $('#content-text').val()
		}
		console.log(param);
		$.post('add.json', param, function(ajaxResult) {
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);
				return;
			}
			location.href = 'admin-notice.html';
		}, 'json');
	});
});











// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg1').click(function() {
	location.href = 'admin-notice.html';
});






