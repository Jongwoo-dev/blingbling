//리스트 출력
$.getJSON('../auth/loginUser.json', function(ajaxResult) {
	var data = ajaxResult.data;
	
	memberNo= data.memberNo;
	console.log(memberNo);

	$.getJSON('../item/list.json?memberNo=' +memberNo, function(ajaxResult){
		
		var list = ajaxResult.data;
		console.log(list);
		var tbody = $('#list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		
		tbody.html(template({"list":list}));
		
	//삭제버튼	
	$('.delete-btn').click(function() {
	$.getJSON('../item/delete.json?itemNo=' + $(this).attr("data-no"), function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
	});
	location.href = 'itemManage.html';
		});
	
	//수정버튼
	$('.change-btn').click(function() {
		$.getJSON('../item/detail.json?itemNo=' +$(this).attr("data-no"), function(ajaxResult) {
			if (ajaxResult.status != "success") {
			      alert(ajaxResult.data);
			      return;
			    }
			  var item = ajaxResult.data;
			  var itemNo = item.itemNo;
			  var memberNo = item.memberNo;
			  
			  $('#chg-name').val(item.name);
			  $('#chg-utime').val(item.usingTime);
			  $('#chg-price').val(item.price);
			console.log(list);
			console.log(memberNo);
			
			$('#chg-final').click(function() {
				var param = {
						itemNo		: itemNo,
						memberNo	: memberNo,
						name		: $('#chg-name').val(),
						price		: $('#chg-price').val(),
						usingTime	: $('#chg-utime').val()
				}
				console.log(param);
					
				$.post('../item/update.json?', param, function(ajaxResult) {
					if(ajaxResult.status != "success") {
						alert(ajaxResult.data);
						return;
					}
				}, 'json');
			location.href = 'itemManage.html';
					
			});
		});
		
	});
	
	});
});


//상품추가
$('#itemAdd-btn').click(function(){
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		var data = ajaxResult.data;
		
		memberNo= data.memberNo;});
	var param = {
			memberNo   : memberNo,
			name   :$('#itemAdd-Name').val(),
			price      :$('#itemAdd-Price').val(),
			usingTime  :$('#itemAdd-Utime').val()
	}
	$.post('../item/add.json?', param, function(ajaxResult) {
		if(ajaxResult.status != "success") {
			  alert(ajaxResult.data);
			  return;
		}
		
	}, 'json');
	location.href = 'itemManage.html';
});

//로그인 요청
$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			location.href='/blingbling/main/main.html';
			return;
		}
		loginMember = ajaxResult.data;
	});
});

/*사이드바 링크*/
$('#sb-basicinfo').click(function(){
	location.href='basicinfo.html';
})
$('#sb-itemManage').click(function(){
	location.href='itemManage.html';
})
$('#sb-bookingManage').click(function(){
	location.href='bookingManage.html';
})
$('#sb-infopicture').click(function(){
	location.href='infopicture.html';
})
$('#sb-notice').click(function(){
	location.href='notice.html';
})
$('#sb-review').click(function(){
	location.href='/blingbling/corporate/detail-info.html?memberNo='+loginMember.memberNo+'&navi=review';
})
$('#sb-pricetime').click(function(){
	location.href='pricetime.html';
})