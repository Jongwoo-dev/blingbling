
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
		
		
	$('.delete-btn').click(function() {
	$.getJSON('../item/delete.json?itemNo=' + $(this).attr("data-no"), function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
		location.href = 'itemManage.html';
	});
		});
	});
});



$('#itemAdd-btn').click(function(){
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		var data = ajaxResult.data;
		
		memberNo= data.memberNo;});
	var param = {
			memberNo   : memberNo,
			name   :$('#itemAdd-Name').val(),
			price      :$('#itemAdd-Price').val(),
			usingTime  :$('#itemAdd-Utime').val(),
			openTime   :'00:00:00',
			closeTime  :'00:00:00'
	}
//	memberNo=8&name=123&price=123&usingTime=123&openTime=now()&closeTime=now()
	$.post('../item/add.json?', param, function(ajaxResult) {
		if(ajaxResult.status != "success") {
			  alert(ajaxResult.data);
			  return;
		}
		
	}, 'json');
	location.href = 'itemManage.html';
});


$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('로그인 하세요! 다음에 인터셉트로 걸러내게끔 변경\n임시로 로그인페이지로 이동');
			location.href=clientRoot+'/auth/testlogin.html';
			return;
		}
		loginMember = ajaxResult.data;
	});
});


/*사이드바 링크*/
$('#basicinfo').click(function(){
	location.href='basicinfo.html';
})