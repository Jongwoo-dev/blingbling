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
		
		var commentContainer = $('#comment-container');

		commentContainer.children().remove();
		
		var list = ajaxResult.data;
		/*console.log(list);*/
		
		var comment = new Array();
		/*var reply = new Array();*/
		
		var commentTemplate = Handlebars.compile($('#commentBoxTemplate').html());
		var deletedCommentTemplate = Handlebars.compile($('#deletedCommentBoxTemplate').html());
		var replyTemplate = Handlebars.compile($('#replyBoxTemplate').html());
		var writeTemplate = Handlebars.compile($('#writeBoxTemplate').html());
		
		$('<div>')
			.addClass('comment-box')
			.html(writeTemplate(loginMember))
			.appendTo(commentContainer);
		
		var writeBtn = $('.comment-write-btn');
		
		writeBtnRegister(writeBtn);
		
		var commentList = $('<div>')
			.addClass('comment-list')
			.appendTo(commentContainer);
		
		var boxHtml;
		
		for (var i in list) {
			if (list[i].level == 1) {
				if (list[i].deleted) {
					commentList
					.prepend(deletedCommentTemplate(list[i]));
					$('.comment-list > .comment-box').first().addClass('deleted');
				} else {
					commentList
					.prepend(commentTemplate(list[i])); 
				}
				comment[list[i].group] = $('.comment-list > .comment-box').first();
				comment[list[i].group].children('.writer-interaction').children('.comment-reply').click(function() {
					// *사용자 속성 확인해보고 추가할지 없엘지 
					if ($(this).parent().parent().hasClass('active-write')) {
						$(this).parent().parent().children('.write-box-container').children().remove();
						$(this).parent().parent().removeClass('active-write');
					} else {
						$('.write-box-container').children().remove();
						$('.comment-box').removeClass('active-write');
						$(this).parent().parent().children('.write-box-container').append(writeTemplate(loginMember));
						$(this).parent().parent().addClass('active-write');
						
						writeBtn = $(this).parent().parent().children('.write-box-container').children('.comment-write-box').children('.comment-write-btn');
						writeBtnRegister(writeBtn, $(this).parent().attr('data-no'), 2, $(this).parent().parent().children('.reply').length+1);
						
					}
					//console.log(comment[list[i].group].children('.comment-box.reply'));//**여기해야함 안됨
					/*writeBtn = comment[list[i].group].children('.comment-write-btn');
					writeBtnRegister(writeBtn);*/
				}) // click()
				
				comment[list[i].group].children('.writer-interaction').children('.comment-update').click(function() {
					
				}); // click()
				
				comment[list[i].group].children('.writer-interaction').children('.comment-delete').click(function() {
					var param = {
							commentNo : $(this).parent().attr('data-no'),
					}
					$.post('/blingbling/comment/delete.json', param, function(ajaxResult) {
						if (ajaxResult.status != 'success') {
							swal('에러',ajaxResult.data,'error');
						}
						/*console.log(ajaxResult);*/
						initInfo();
					});
				}); // click()
			} else {
				comment[list[i].group].append(replyTemplate(list[i]));
				if (!list[i].deleted) {
					if (comment[list[i].group].hasClass('deleted')) {
						comment[list[i].group].css('display','block');					
					}
					comment[list[i].group].children('.comment-box.reply').last()
						.css('display','block');
					comment[list[i].group].children('.comment-box.reply').last()
						.children('.writer-interaction').children('.comment-delete').click(function() {
							var param = {
									commentNo : $(this).parent().attr('data-no'),
							}
							$.post('/blingbling/comment/delete.json', param, function(ajaxResult) {
								if (ajaxResult.status != 'success') {
									swal('에러',ajaxResult.data,'error');
								}
								/*console.log(ajaxResult);*/
								initInfo();
							});
					}); // click()
				}
			}
		}
		/*console.log(comment);*/
	});
}

function writeBtnRegister (jqueryObj, group = 0, level = 1, sequence = 1) {
	jqueryObj
		.attr('data-group', group)
		.attr('data-level', level)
		.attr('data-sequence', sequence)
		.click(function() {
			var param = {
					corporateNo : corporateNo,
					memberNo    : loginMember.memberNo,
					group       : $(this).attr('data-group'),
					level       : $(this).attr('data-level'),
					sequence    : $(this).attr('data-sequence'),
					contents    : $(this).parent().children('.comment-write-textarea').val()
			}
			/*console.log(param);*/
			$.post('/blingbling/comment/add.json', param, function(ajaxResult) {
				if (ajaxResult.status != 'success') {
					swal('에러',ajaxResult.data,'error');
				}
				/*console.log(ajaxResult);*/
				/*swal('예약성공!',ajaxResult.data,'success');*/
				initInfo();
			});
		});
};

function replyBtnRegister (jqueryObj) {
	
}

function userCheck() {
	
}