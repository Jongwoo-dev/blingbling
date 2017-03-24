var map;
var marker;
var infowindow;
var loginMember = null;
var filename;

var commentBox;
var mainCommentBox;
var writeBoxContainer;

var memberNo = location.href.split('?')[1].split('=')[1];
var memberStoreNo = memberNo;
var corporateNo = memberNo;


//<textarea id="ClipBoard" style="display:none"></textarea>

/*$('#addr-copy-btn').click(function(){
	var html = $(this).parent().prev().html();
	html = '<a href="http://www.test.com" target="_blank">'+html+'</a>';
	$('#ClipBoard').css('display', 'block').val(html).select();
	
	// copy the selection
	var succeed;
	try {
		succeed = document.execCommand("copy");
		$('#ClipBoard').css('display', 'none');

	} catch(e) {
		succeed = false;
	}

	if(succeed){
		alert('복사 되었습니다');
	}
	return false;

});*/

$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		
		//로그인 확인
		if(ajaxResult.status == 'success') {
			var data = ajaxResult.data;
			memberNo = data.memberNo;
			loginMember = data;

			$.getJSON('../favorite/count.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
				var count = ajaxResult.data;
					if (count > 0) {
						$('#favorite-star-span').removeClass('glyphicon-star-empty');
						$('#favorite-star-span').addClass('glyphicon-star');
					}
					return;
			});
			
			initInfo();
		} else {
			initInfo();
			return	//비로그인 일시 '별버튼' 그대로
		}
	});
});



$('#favorite-star-span').click(function(){
	var starBtn = $(this);
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			window.alert('즐찾 기능 쓰려면 로그인 하셈!!');
			return
		} else {
			
			var status;
			var data = ajaxResult.data;
			memberNo = data.memberNo;
			
			if(starBtn.hasClass('glyphicon-star-empty')) {
				$.getJSON('../favorite/add.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
					if (ajaxResult.status != 'success') {
						return;
					}
					starBtn.removeClass('glyphicon-star-empty');
					starBtn.addClass('glyphicon-star');
				});
			} else if(starBtn.hasClass('glyphicon-star')) {
				$.getJSON('../favorite/delete.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
					if (ajaxResult.status != 'success') {
						return;
					}
					starBtn.removeClass('glyphicon-star');
					starBtn.addClass('glyphicon-star-empty');
				});
			}
			
		}
	});
});




function initMap() {
	  var currentLatLng;
	  map = new google.maps.Map(document.getElementById('CorporaterMap'), {
	    center: {lat: 37.5666805, lng: 126.9784147},
	    zoom: 17
	  });
	  marker = new google.maps.Marker({
	    //position: {lat: 37.5666805, lng: 126.9784147},
	    map: map,
	    draggable:false,
	    title:"업체의 위치로 드래그 해 주세요"
	  });
	  infowindow = new google.maps.InfoWindow({
	    content: ''
	  });
	 /* google.maps.event.addListener(map, 'click', function(mouseEvent) {
		  moveMarker(mouseEvent.latLng);
	  });*/
	  
	  /*marker.addListener('mouseup', function(mouseEvent) {
		  moveMarker(mouseEvent.latLng);
	  });*/
	}

	var moveMarker = function(latlng) {

		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
			latLng: latlng
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0].geometry) {
					var address = results[0].formatted_address;
					window.marker.setPosition(latlng)
					infowindow.setContent(address)
					infowindow.open(map, marker);

					var opt = $("<option value='" + latlng.toString() + "'>" + address + "</option>");
					$("#markerList").append(opt);
				}
			} else if (status == google.maps.GeocoderStatus.ERROR) {
				alert("통신중 에러발생！");
			} else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
				alert("요청에 문제발생！geocode()에 전달하는GeocoderRequest확인요！");
			} else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
				alert("단시간에 쿼리 과다송신！");
			} else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
				alert("이 페이지에는 지오코더 이용 불가! 왜??");
			} else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
				alert("서버에 문제가 발생한거 같아요. 다시 한번 해보세요.");
			} else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
				alert("존재하지 않습니다.");
			} else {
				alert("??");
			}
		});
	}

	var initMarker = function(latlngStr) {
		var point = latlngStr.substring(1,latlngStr.length-1).split(',');
		moveMarker(new google.maps.LatLng({lat:Number(point[0]), lng:Number(point[1])}));
	}

	

	$('#view-big').click(function () {
		window.open()
		
		initMarker(corporate.mapLocation);
		
	})
	
	
$.getJSON('../corporate/detail.json?memberNo=' + memberNo, function(ajaxResult) {
	if (ajaxResult.status != 'success') {
		swal('경고',ajaxResult.data,'warning');
		return;
	}
	var corporate = ajaxResult.data;
	console.log(corporate);
		$('#corp-name-span').text(corporate.corporateName);
		$('#corp-addr-span').text(corporate.baseAddress);
		$('#corp-addr-span2').text(corporate.detailAddress);
		$('#corp-tel-span').text(corporate.tel);
		$('#comment-span').html(corporate.additionalInfo);
		$('#navi-header-div').text('정보&사진');
		$('#info-cont-div').html(corporate.detail);
		
		$('#infonpic-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('정보&사진');
			$('#info-cont-div').html(corporate.detail);
		});
		
		$('#feentime-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('요금 및 시간');
			$('#info-cont-div').html(corporate.priceTime);
		});
		
		$('#notice-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('공지사항');
			$('#info-cont-div').html(corporate.notice);
		});
		
		$('#review-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('리뷰');
			$('#info-cont-div').html("<div id='comment-container'></div>");
			
			initInfo();
			
			
		});
		
		
		if (corporate.mapLocation != null) {
			if (corporate.mapLocation.length != 0) {
				initMarker(corporate.mapLocation);
			}
		}

});



$('#header_sub_a_home').click(function(event) {
	event.preventDefault()
	//location.href='.html';
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
				
				if (interactionBtnCheck(comment[list[i].group].children('.main-comment-box').children('.writer-interaction'))) {
					
					comment[list[i].group].children('.main-comment-box').children('.writer-interaction').children('.comment-update').click(function() {
						updateComment(this, 1);
					}); // update_click()
					
					comment[list[i].group].children('.main-comment-box').children('.writer-interaction').children('.comment-delete').click(function() {
						deleteComment(this);
					}); // delete_click()
				}
			} else {
				comment[list[i].group].append(replyTemplate(list[i]));
				if (!list[i].deleted) {
					if (comment[list[i].group].hasClass('deleted')) {
						comment[list[i].group].css('display','block');					
					}
					comment[list[i].group].children('.comment-box.reply').last()
						.css('display','block');
					
					if (interactionBtnCheck(comment[list[i].group].children('.comment-box.reply').last()
							.children('.writer-interaction'))) {
						comment[list[i].group].children('.comment-box.reply').last()
						.children('.writer-interaction').children('.comment-update').click(function() {
							updateComment(this, 2);
						}); // update_click()
						
						comment[list[i].group].children('.comment-box.reply').last()
						.children('.writer-interaction').children('.comment-delete').click(function() {
							deleteComment(this);
						}); // delete_click()
					}
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
			if (loginMember == null) {
				swal('알림','로그인을 하셔야 댓글작성이 가능합니다.','error');
			}
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
	mainCommentBox = $(domObj).parent().parent();

	var commentNo = $(domObj).parent().attr('data-no');
	var commentText = mainCommentBox.children('.comment-content').children('.comment-textline').children('pre').text();
	/*console.log('코멘트 번호 : ',commentNo,'      내용 : ',commentText);*/
	var updateTemplate = Handlebars.compile($('#updateBoxTemplate').html());
	
	var currentComment = {
			name        : loginMember.name,
			commentText : commentText
	}
	
	if (level == 1) {
		commentBox.prepend(updateTemplate(currentComment));
		commentBox.children('.comment-write-box').css('background-color','rgb(244,244,244)');
	} else if(level == 2) {
		mainCommentBox.before(updateTemplate(currentComment));
		commentBox.children('.comment-write-box').css('margin-left','50px').css('background-color','rgb(244,244,244)');;
	}
	
	mainCommentBox.addClass('hidden');
	
	$('.comment-cancel-btn').click(function() {
		removeWriteBox();
	})
	
	$('.comment-update-btn').click(function() {
		var param = {
				commentNo : commentNo,
				contents    : $(this).parent().children('.comment-write-textarea').val()
		}
		$.post('/blingbling/comment/update.json', param, function(ajaxResult) {
			if (ajaxResult.status != 'success') {
				swal('에러',ajaxResult.data,'error');
			}
			initInfo();
		});
	})
	
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

function interactionBtnCheck(jqueryObj) {
	// 로그인한 유저랑 코멘트 쓴 유저가 다르면 삭제
	if (loginMember.memberNo != jqueryObj.attr('data-writer-no')) {
		jqueryObj.children('.comment-update').remove();
		if (!loginMember.administrator) {
			jqueryObj.children('.comment-delete').remove();
		}
		return false;
	} 
	
	return true;
}

function removeWriteBox() {
	// 기존 답글박스 삭제
	$('.comment-list').children('.comment-box').children('.write-box-container').children().remove();
	$('.comment-box').removeClass('active-write');
	
	// 기존 수정박스 삭제
	$('.comment-list').children('.comment-box').children('.comment-write-box').remove();
	$('.main-comment-box').removeClass('hidden');
	$('.comment-box').removeClass('hidden');
}
