/*$.getJSON('loginUser.json', function(ajaxResult) {
	  var status = ajaxResult.status;
	  
	  if (status != "success")
	    return;
	  
	  var member = ajaxResult.data;

	  $('#currentId').text(member.email);
});*/
//로그인정보 받아와서 멤버넘버로 리스트 뽑아준다.
$.getJSON(serverRoot+'/auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		  return;
	var member = ajaxResult.data;
	
	$.getJSON('listByMember.json?memberNo='+member.memberNo, function(ajaxResult) {
		var status = ajaxResult.status;
		
		if (status != "success")
			return;
		
		var list = ajaxResult.data;
		console.log(list);
		var tbody = $('#list-table > tbody');
		
		// 템플릿 텍스트를 처리하여 HTML을 생성해 줄 함수 얻기
		var template = Handlebars.compile($('#trTemplate').html());
		
		// 템플릿 엔진을 통해 생성된 HTML을 tbody에 넣는다. 
		tbody.html(template({"list": list}));
		
		 $('.title-link').click(function(event) {
			 
            location.href = 'qna-view.html?serviceCenterNo=' + $(this).attr("data-no");
    	});
	});
});

/*// 학생 목록에서 이름 링크에 click 이벤트를 처리한다.
  $('.name-link').click(function(event) {
  	event.preventDefault();
  	location.href = 'view.html?memberNo=' + $(this).attr("data-no");
  });*/
/*
$('#new-btn').click(function(event) {
	event.preventDefault(); 
	location.href = 'view.html';
});
*/





