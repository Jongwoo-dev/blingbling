//학생 목록 가져와서 tr 태그를 만들어 붙인다.
$.getJSON('list.json?category=1대1질문', function(ajaxResult) {
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
 
// 학생 목록에서 이름 링크에 click 이벤트를 처리한다.
  $('.title-link').click(function(event) {
  	location.href = 'admin-qna-view.html?serviceCenterNo=' + $(this).attr("data-no");
  });
});
/*
$('#new-btn').click(function(event) {
	event.preventDefault(); 
	location.href = 'view.html';
});
*/
  





