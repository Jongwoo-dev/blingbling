
$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('로그인 하세요! 다음에 인터셉트로 걸러내게끔 변경\n임시로 로그인페이지로 이동');
			location.href=clientRoot+'/auth/testlogin.html';
			return;
		}
		loginMember = ajaxResult.data;
		
		initInfo();
	});
});

var initInfo = function() {
	/*$.getJSON('../corporate/detail.json?memberNo='+loginMember.memberNo, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('업체가 아닙니다.');
			return;
		}
		
		var corporate = ajaxResult.data;
		$('#infoEditor').summernote('code', corporate.priceTime);
	});*/
	
}

