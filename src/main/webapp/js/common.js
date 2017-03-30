var member
var searchbar;
var whole = '';
var masa = '';
var aes = '';
var nali = '';
var wax = '';
var searchselect = '';
var searchclk;



$(function() {
	function search() {
		searchbar = $('#searchbarinput').val();
	  	event.preventDefault();
	  	console.log(searchbar);
	  	location.href = '../main/mainsearch.html?searchbar='+ searchbar;
	}
	
	// header.html을 가져와서 붙인다.
	$.get('../header.html', function(result) {
		$('#header').html(result);
		
		/*$('#login-link').click(function(){
			location.href = '../auth/testlogin.html';
		});*/
		
		$('.btn.btn-link').click(function(event) {
			/*searchbar = $('#searchbarinput').val();
		  	event.preventDefault();
		  	console.log(searchbar);
		  	location.href = '../main/mainsearch.html?searchbar='+ searchbar;*/
			search();
		  	
		});
		
		$('#whole').click(function() {
			var catbtn = $(this);
			if(catbtn.attr('aria-pressed') == "true" ){
				whole = '';
				
			}
			else{
				whole = '마사지 에스테틱 네일아트 왁싱';
				masa = '';
				aes = '';
				nali = '';
				wax = '';
				
			}
			
			getSearchStr();
			
			
		});
		
		$('#masa').click(function() {
			var catbtn = $(this);
			if(catbtn.attr('aria-pressed') == "true" ){
				masa = '';
			}
			else{
				masa = '마사지';
			}
			getSearchStr();
			
			
			
		});
		
		$('#aes').click(function() {
			var catbtn = $(this);
			if(catbtn.attr('aria-pressed') == "true" ){
				aes = '';
			}
			else{
				aes = '에스테틱'
			}
			getSearchStr();
			
			
			
		});
		
		$('#nail').click(function() {
			var catbtn = $(this);
			if(catbtn.attr('aria-pressed') == "true" ){
				nali = '';
			}
			else{
				nali = '네일아트';
			}
		
			getSearchStr();
			
			
			
		});
		
		$('#wax').click(function() {
			var catbtn = $(this);
			if(catbtn.attr('aria-pressed') == "true" ){
				wax = '';
			}
			else{
				wax = '왁싱'
			}
			getSearchStr();
			
			
		});
		
		$('#ariabtn button').click(function(event) {
			
			searchclk = $(this).text();
			$('#ariabtn').children().remove();
			
			if(searchselect == ''){
				searchselect = '마사지 에스테틱 네일아트 왁싱';
			 	event.preventDefault();
				
				location.href = '../main/mainheadersear.html?searchbar='+searchclk +' '+searchselect;
			}
			else{
				event.preventDefault();
			  	location.href = '../main/mainheadersear.html?searchbar='+searchclk +' '+searchselect;
			}
				
		  	
		});
		
		$('#service-center-link').click(function(event) {
			event.preventDefault();
			location.href='../serviceCenter/notice.html';
		});
		
		$('#titleimg').click(function(event) {
			location.href='/blingbling/main/main.html';
		});
		
		$('#searchbarinput').on('keyup',function() {
			if (window.event.keyCode == 13) {
				search();
	        }
		})
		
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
					location.href = '/blingbling/mypage/detail.html';
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
			
			// 예약내역 링크 처리
			$('#buyinfo-link').click(function(event) {
				event.preventDefault();
				location.href = '/blingbling/mypage/reservationHistory.html';
			});
			
			
		});
		
		// 회원가입모달 클릭 이벤트
		$('#signup-submit-btn').click(function() {
			
			// 빈칸 없는지 체크
			if($('#signup-username').val().length == 0){
				$('#signup-username').popover('show');
				return;
			}else if($('#signup-email').val().length == 0){
				$('#signup-email').popover('show');
				return;
			}else if($('#signup-tel').val().length == 0){
				$('#signup-tel').popover('show');
				return;
	         }
			
			$('.signup-input').popover('hide');
			var param = {
					name  : $('#signup-username').val(),
					email : $('#signup-email').val(),
					tel   : $('#signup-tel').val()
			}
			console.log(param);
			$.post('/blingbling/member/add.json', param, function(ajaxResult) {
				$('#signUpModal').modal('hide');
				if (ajaxResult.status != "success") {
					swal('실패',ajaxResult.data,'error');
					//alert(ajaxResult.data);
					return;
				}
			
				// 회원가입 후 자동 로그인
				$.post('/blingbling/auth/login.json', param, function(ajaxResult) {
					//console.log(ajaxResult);
					if (ajaxResult.status != "success") {
						//alert(ajaxResult.data);
						return;
					}
					location.reload();
				}, 'json');
				
			}, 'json');
		});
		
		$('#signup-cancel-btn').click(function() {
			$('.signup-input').popover('hide');
		});
		
	});
	
	$.getScript("/blingbling/auth/facebook.js", function() {
		// 버튼등록
		registerFacebookBtn('#facebookLoginBtn');
	});
	
	$.getScript('/blingbling/auth/kakao.js', function() {
		$.getScript('/blingbling/auth/fuckingkakao.js',function(){
			$('#kakaoLoginBtn').click(function() {
				kakaoLogin();
			});
		})
	})
	
	
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

function processLogin(email, username="", id="") {
	$('#myModal').modal('hide');
	
	if (!email) {
		return;
	}
	// 홈페이지 로그인 처리
	var param = {
			email : email
	}
	
	// 서버에 회원이 있는지 체크하는 요청
	$.getJSON('/blingbling/auth/checkUser.json',param, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			// 회원이 없으면 가입처리
			// 가입 모달 띄우고 받은 정보로 초기화 
			$('#signUpModal').modal('show');
			$('#signup-email').val(email);
			$('#signup-username').val(username);
			
			return;
		}
		// 회원이 있으면 로그인처리
		$.post('/blingbling/auth/login.json', param, function(ajaxResult) {
			//console.log(ajaxResult);
			if (ajaxResult.status != "success") {
				//alert(ajaxResult.data);
				return;
			}
			location.reload();
		}, 'json');
	});
	

}

searchbar = $('#searchbarinput').val();

function getSearchStr() {
	
	
	if (whole == null) {
		whole = '';
	}
	if (masa == null) {
		masa = '';
	}
	if (aes == null) {
		aes = '';
	}
	if (nali == null) {
		nali = '';
	}
	if (wax == null) {
		wax = '';
	}
	searchselect = whole+' '+masa+' '+aes+' '+nali+ ' '+wax;

}

function sendSMS(recvNum, sendMsg) {
	var param = {
			message    : sendMsg,
			receiver   : recvNum.replace(/-/gi, "")
	}
	
	console.log(param);
	
	//alert('받는사람 : '+recvNum+'\n내용 : '+sendMsg+'\n최종본때 이거 지우고 문자보내는 코드 주석해제')
	
	$.post('/blingbling/common/sendSMS.json', param, function(ajaxResult) {
	    
	    console.log(ajaxResult);
	}, 'json');
	
}