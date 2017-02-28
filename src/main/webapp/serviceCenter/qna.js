//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	
// add처리
	$('.btn-lg').click(function() {
		var param = {
				memberNo : member.memberNo,
				category : '1대1질문',
				prefix : $('#question-prefixx').val(),
				title: $('#title-box').val(),
				reply:"",
				content: $('#content-text').val()
		}
		console.log(param);
		$.post('add.json', param, function(ajaxResult) {
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);
				return;
			}
			location.href = 'qna-list.html';
		}, 'json');
	});
});














