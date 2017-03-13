var loginMember;
var corporateNo;

try {
	var splitParam = location.href.split('?')[1].split('=');
	if (splitParam[0] == 'corporateNo') {
		corporateNo = splitParam[1].replace(/#/gi, '');
	} else {
		corporateNo = -1;
	}
} catch (error) {
	var corporateNo = -1;
}

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
	$.getJSON('/blingbling/comment/list.json?corporateNo='+corporateNo, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			swal('오류!', ajaxResult.data, 'error')
			return;
		}
		
		var list = ajaxResult.data;
		console.log(list);
		
		var comment = new Array();
		/*var reply = new Array();*/
		var contentDiv = $('#content');
		
		var commentTemplate = Handlebars.compile($('#commentBoxTemplate').html());
		var replyTemplate = Handlebars.compile($('#replyBoxTemplate').html());
		var writeTemplate = Handlebars.compile($('#writeBoxTemplate').html());
		
		$('<div>')
			.addClass('comment-box')
			.html(writeTemplate(loginMember))
			.appendTo(contentDiv);
		
		for (var i in list) {
			if (list[i].level == 1) {
				$('#content').append(commentTemplate(list[i])).appendTo(contentDiv);
				comment[list[i].group] = $('.comment-box').last();
			} else {
				comment[list[i].group].append(replyTemplate(list[i]));
			}
		}
		console.log(comment);
	});
}

