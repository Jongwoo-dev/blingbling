//학생 목록 가져와서 tr 태그를 만들어 붙인다.
$.getJSON('listByPrefix.json?prefix=베스트질문', function(ajaxResult) {
	changeAccodion(ajaxResult);
});

$('.btn-danger').click(function() {
	$.getJSON('listBySearch.json?word='+ $('#searchbar').val(), function(ajaxResult){
		if (ajaxResult.status != "success") { 
			  alert(ajaxResult.data);
			  return;
		}
	  changeAccodion(ajaxResult);
	  $('.btn.btn-default.selected');
	});
});

$('#btn_category button').click(function() {
	var btn = $(this);
	$.getJSON('listByPrefix.json?prefix='+btn.text(), function(ajaxResult) {
		if (changeAccodion(ajaxResult)) {
			$('.btn.btn-default.selected').removeClass('selected');
			btn.addClass('selected');
		}
	});
});


var changeAccodion = function(ajaxResult) {
	var status = ajaxResult.status;
	  
	  if (status != "success") {
		  alert(ajaxResult.data);
		  return false;
	  }
	  
	  var list = ajaxResult.data;
	  var contentMain = $('#content_main');
	  $('#accordion').remove();
	  var accordion = $('<div>').attr('id','accordion').appendTo(contentMain);
	  
	  // 템플릿 텍스트를 처리하여 HTML을 생성해 줄 함수 얻기
	  var template = Handlebars.compile($('#trTemplate').html());
	  
	  // 템플릿 엔진을 통해 생성된 HTML을 tbody에 넣는다. 
	  accordion.html(template({"list": list}));
	 
	/*// 학생 목록에서 이름 링크에 click 이벤트를 처리한다.
	  $('.bt1').click(function(event) {
	  	location.href = 'faq.html?serviceCenterNo=' + $(this).attr("data-no");
	  });*/
	  accordion.accordion({
		  active: false,
		  collapsible: true,
		  icons: { "header": "glyphicon glyphicon-menu-up", "activeHeader": "glyphicon glyphicon-menu-down" },
	  });
	  return true;
}

$('#menu1').click(function(){
	  location.href='notice.html';
	})

$('#menu3').click(function(){
location.href='qna.html';
})



