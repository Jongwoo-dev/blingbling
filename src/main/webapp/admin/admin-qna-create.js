//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	
// add처리
	$('.btn-lg2').click(function() {
		var param = {
				memberNo : member.memberNo,
				category : '1대1질문',
				prefix : $('#faq-prefix').val(),
				title: "",
				content: $('#content-text').val()
		}
		console.log(param);
		$.post('add.json', param, function(ajaxResult) {
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);
				return;
			}
			location.href = 'admin-qna.html?serviceCenterNo' + serviceCenterNo;
		}, 'json');
	});
});











// 취소 버튼 
$('.btn-lg1').click(function() {
	location.href = 'admin-qna.html';
});

/*// 등록 버튼 
$('.btn-lg2').click(function() {
	location.href = 'admin-qna.html?serviceCenterNo=' + serviceCenterNo;
});
*/




