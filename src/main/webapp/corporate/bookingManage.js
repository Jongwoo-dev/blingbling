//리스트 출력
$.getJSON('../auth/loginUser.json', function(ajaxResult) {
	var data = ajaxResult.data;
	
	memberNo= data.memberNo;
	console.log(memberNo);

	$.getJSON('../prepurchase/bookinglist.json?memberNo=' +memberNo, function(ajaxResult){
		
		var list = ajaxResult.data;
		
		console.log(list);
		var tbody = $('#list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		
		tbody.html(template({"list":list}));
		
	//삭제버튼	
	$('.delete-btn').click(function() {
	$.getJSON('../prepurchase/delete.json?prepurchaseNumber=' + $(this).attr("data-no"), function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
	});
	location.href = 'bookingManage.html';
		});
	});
});

//로그인 요청
$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('로그인 하세요! 다음에 인터셉트로 걸러내게끔 변경\n임시로 로그인페이지로 이동');
			location.href='../auth/testlogin.html';
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