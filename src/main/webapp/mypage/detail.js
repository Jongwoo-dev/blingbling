$(function() {
	// 로그인 멤버 넘버 추출
	$.getJSON('../auth/loginUser.json', function (ajaxResult){
		if (ajaxResult.status != "success")
			return;
		var member = ajaxResult.data;
		var memberNo = member.memberNo;
		
		$.getJSON('../mypagepl/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
			var status = ajaxResult.status;
			if (status != "success")
				return;
			
			var list = ajaxResult.data;
			
			var totallike = $('#Totallike');
			$('<span>').addClass('item value').text(list[0].likeNum+'개').appendTo(totallike);
			
			var totalstamp = $('#Totalstamp');
			$('<span>').addClass('item value').text(list[0].stampNum+'개').appendTo(totalstamp);
			
			var totalprepurchase = $('#Totalprepurchase');
			$('<span>').addClass('item value').text(list[0].prepurchaseNum+'개').appendTo(totalprepurchase);
			
			var profilename =$('#profilename');
			$('<span>').addClass('profile name').text(member.name).appendTo(profilename);
		});
		
		$('#name-text').text(member.name);
		$('#tel-text').text(member.tel);
		if (member.confirmTel) {
			$('#confirm-text').text('인증완료');
		} else {
			$('#confirm-text').text('인증필요');
		}
	});
	
	$('#name-update').click(function() {
		$('#userinfo-modal-label').text('닉네임 변경');
		$('#userinfo-modal-input').val(member.name);
		$('#userinfo-modal').modal('show');
		
		$('#userinfo-modal-submit')
			.unbind('click')
			.click(function() {
				var param = member;
				param.name = $('#userinfo-modal-input').val()
				$('#userinfo-modal').modal('hide');
				$.post('/blingbling/member/update.json', param, function(ajaxResult) {
					if (ajaxResult.status != "success") {
						return;
					}
					$.getJSON('/blingbling/auth/refresh.json', function(ajaxResult) {
						$('#name-text').text(param.name);
						$('#login-name-a').text(param.name);
					});
				}, 'json');
			});
	})
	
	$('#tel-update').click(function() {
		$('#userinfo-modal-label').text('전화번호 변경');
		$('#userinfo-modal-input').val(member.tel);
		$('#userinfo-modal').modal('show');
		
		$('#userinfo-modal-submit')
			.unbind('click')
			.click(function() {
				var param = member;
				param.tel = $('#userinfo-modal-input').val()
				$('#userinfo-modal').modal('hide');
				$.post('/blingbling/member/update.json', param, function(ajaxResult) {
					if (ajaxResult.status != "success") {
						return;
					}
					$.getJSON('/blingbling/auth/refresh.json', function(ajaxResult) {
						$('#tel-text').text(param.tel);
					});
				}, 'json');
				
			});
	})
})






