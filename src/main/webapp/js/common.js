var member

$(function() {

	// header.html을 가져와서 붙인다.
	$.get('../header.html', function(result) {
		$('#header').html(result);
		
		/*$('#login-link').click(function(){
			location.href = '../auth/testlogin.html';
		});*/
		
		$('#service-center-link').click(function(event) {
			event.preventDefault();
			location.href='../serviceCenter/notice.html';
		});
		
		$('#titleimg').click(function(event) {
			location.href='/blingbling/';
		});
		
		// 로그인 유저 체크
		$.getJSON('../auth/loginUser.json', function(ajaxResult) {
			if (ajaxResult.status != 'success') {
				// 로그인 안되었으면 헤더 초기화
				$('#login-img-div').children().remove();
				$('#login-img-div')
					.html('<span class="glyphicon glyphicon-user" aria-hidden="true"></span>');
				
				$('#login-name-div').children().remove();
				$('#login-name-div')
					.html("<a href='#' class='header-menu-a' data-toggle='modal' data-target='#myModal'>로그인</a>");
				return;
			}
			// 로그인 되었으면 로그인한 유저 정보로 헤더 초기화
			// *서버에 이미지가 없을시 엑박 대체할 이미지 필요함. 나중에 추가
			
			
			
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