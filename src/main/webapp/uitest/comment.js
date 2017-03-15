var loginMember;
var corporateNo;

var commentBox;
var mainCommentBox;
var writeBoxContainer;

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
				comment[list[i].group].children('.main-comment-box').children('.writer-interaction').children('.comment-reply').click(function() {
					commentBox = $(this).parent().parent().parent();
					writeBoxContainer = commentBox.children('.write-box-container');
					// 속성 확인해보고 추가할지 없엘지 
					if (commentBox.hasClass('active-write')) {
						writeBoxContainer.children().remove();
						commentBox.removeClass('active-write');
					} else {
						removeWriteBox();
						
						// 답글박스 추가
						writeBoxContainer.append(writeTemplate(loginMember));
						commentBox.addClass('active-write');
						
						
						writeBtn = writeBoxContainer.children('.comment-write-box').children('.comment-write-btn');
						writeBtnRegister(writeBtn, $(this).parent().attr('data-no'), 2, commentBox.children('.reply').length+1);
						
					}
				}) // reply_click()
				
				comment[list[i].group].children('.main-comment-box').children('.writer-interaction').children('.comment-update').click(function() {
					updateComment(this, 1);
				}); // update_click()
				
				comment[list[i].group].children('.main-comment-box').children('.writer-interaction').children('.comment-delete').click(function() {
					deleteComment(this);
				}); // delete_click()
			} else {
				comment[list[i].group].append(replyTemplate(list[i]));
				if (!list[i].deleted) {
					if (comment[list[i].group].hasClass('deleted')) {
						comment[list[i].group].css('display','block');					
					}
					comment[list[i].group].children('.comment-box.reply').last()
						.css('display','block');
					
					comment[list[i].group].children('.comment-box.reply').last()
					.children('.writer-interaction').children('.comment-update').click(function() {
						
					}); // click()
					
					comment[list[i].group].children('.comment-box.reply').last()
						.children('.writer-interaction').children('.comment-delete').click(function() {
							deleteComment(this);
					}); // delete_click()
				}
			}
		}
		/*console.log(comment);*/
	});
}

function writeBtnRegister(jqueryObj, group = 0, level = 1, sequence = 1) {
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

function updateComment(domObj, level) {
	removeWriteBox();
	
	commentBox = $(domObj).parent().parent().parent();
	mainCommentBox = commentBox.children('.main-comment-box');
	
	var commentNo = $(domObj).parent().attr('data-no');
	var commentText = mainCommentBox.children('.comment-content').children('.comment-textline').children('pre').text();
	/*console.log('코멘트 번호 : ',commentNo,'      내용 : ',commentText);*/
	var updateTemplate = Handlebars.compile($('#updateBoxTemplate').html());
	
	var currentComment = {
			name        : loginMember.name,
			commentText : commentText
	}
	
	commentBox.prepend(updateTemplate(currentComment));
	mainCommentBox.addClass('hidden');
	
}

function deleteComment(domObj) {
	var param = {
			commentNo : $(domObj).parent().attr('data-no')
	}
	$.post('/blingbling/comment/delete.json', param, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			swal('에러',ajaxResult.data,'error');
		}
		/*console.log(ajaxResult);*/
		initInfo();
	});
}

function replyBtnRegister(jqueryObj) {
	
}

function userCheck() {
	
}

function removeWriteBox() {
	// 기존 답글박스 삭제
	$('.write-box-container').children().remove();
	$('.comment-box').removeClass('active-write');
	
	// 기존 수정박스 삭제
	$('.comment-box').children('.comment-write-box').remove();
	$('.main-comment-box').removeClass('hidden');
}