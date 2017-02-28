try {
  var serviceCenterNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var serviceCenterNo = -1;
}

if (serviceCenterNo > 0) {
} 

		//학생 목록 가져와서 tr 태그를 만들어 붙인다.
	$.getJSON('detail.json?serviceCenterNo=' + serviceCenterNo, function(ajaxResult) {
	  var status = ajaxResult.status;
	  
	  if (status != "success") {
		  alert(ajaxResult.data);
		  return;
	  }
	  var serviceCenter = ajaxResult.data;
	  console.log(serviceCenter);
	  if (serviceCenter.reply != null) {
		  $('#faq-reply').css('display','block');
	  }
	  $('#faq-prefix').text('['+serviceCenter.prefix+']');
	  $('#faq-title').text(serviceCenter.title);
	  $('#faq-postedDate').text(serviceCenter.postedDate);
	  $('#faq-view').text(serviceCenter.content);
	  $('#faq-reply').text(serviceCenter.reply);
	  
	});

// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg1').click(function() {
	location.href = 'admin-qna.html';
});

//답글버튼
$('.btn-lg2').click(function() {
	location.href = 'admin-qna-create.html';
});





