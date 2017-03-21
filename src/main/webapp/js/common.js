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
			member = ajaxResult.data;
			//console.log(member);
			// 로그인 되었으면 로그인한 유저 정보로 헤더 초기화
			// *서버에 이미지가 없을시 엑박 대체할 이미지 필요함. 나중에 추가

			// 이름변경
			$('#login-name-div').css('position','relative').children().remove();
			$('<a>').attr('href','#').addClass('header-menu-a').addClass('dropdown-toggle')
				.attr('id','login-name-a').attr('data-toggle','dropdown')
				.attr('aria-haspopup','true').attr('aria-expanded','true')
				.text(member.name).css('color','#337ab7')
				.appendTo('#login-name-div');

			// 드롭박스 추가 및 클릭이벤트 추가
			var ul = $('<ul>').addClass('dropdown-menu').addClass('dropdown-menu')
				.attr('aria-labelledby','login-name-a').appendTo('#login-name-div');
			$('<li>').html('<a href="#" id="login-dropdown-mypage" class="header-menu-a">마이 페이지</a>')
				.appendTo(ul).click(function(e) {
					e.preventDefault();
					alert('임시로 찜 페이지에 넣음. 나중에 내정보수정 페이지로 변경'); 
					location.href = '/blingbling/mypage/favor.html';
				});
			if (member.type == 'ceo') {
				$('<li>').html('<a href="#" id="login-dropdown-corppage" class="header-menu-a">업체 관리자 페이지</a>')
					.appendTo(ul).click(function(e) {
						e.preventDefault();
						location.href = '/blingbling/corporate/basicinfo.html';
					});
			} else if (member.type == 'admin') {
				$('<li>').html('<a href="#" id="login-dropdown-adminpage" class="header-menu-a">운영자 페이지</a>')
					.appendTo(ul).click(function(e) {
						e.preventDefault();
						location.href = '/blingbling/admin/admin-qna.html';
					});
			}
			
			$('<li>').html('<a href="#" id="login-dropdown-logout" class="header-menu-a">로그 아웃</a>')
				.appendTo(ul).click(function(e) {
					e.preventDefault();
					$.getJSON('/blingbling/auth/logout.json', function(ajaxResult) {
					    location.reload();
					});
				});
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