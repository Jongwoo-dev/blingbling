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
		
		for (var i = 0; i < list.length; i++) {
			list[i].bookingDate = list[i].serviceTime.split(" ")[0],
			list[i].bookingTime = list[i].serviceTime.split(" ")[1];
		}
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