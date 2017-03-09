//서비스 넘버 받아옴
try {
  var serviceCenterNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var serviceCenterNo = -1;
}

if (serviceCenterNo > 0) {
} 

//디테일 처리
$.getJSON('detail.json?serviceCenterNo=' + serviceCenterNo, function(ajaxResult) {
  var status = ajaxResult.status;
  
  if (status != "success") {
	  alert(ajaxResult.data);
	  return;
  }
  var serviceCenter = ajaxResult.data;
  console.log(serviceCenter);
  $('#faq-prefix').text('['+serviceCenter.prefix+']');
  $('#faq-title').text(serviceCenter.title);
  $('#faq-postedDate').text(serviceCenter.postedDate);
  $('#faq-view').text(serviceCenter.content);
});

//삭제 처리
$('.btn-lg.3').click(function() {
	$.getJSON('delete.json?serviceCenterNo=' + serviceCenterNo, function(ajaxResult) {
		if (ajaxResult.status != "success") { 
			  alert(ajaxResult.data);
			  return;
		  }
		location.href = 'admin-notice.html';
	});
});


//update처리
$('.btn-lg.2').click(function() {
	location.href = 'admin-notice-update.html?serviceCenterNo=' + serviceCenterNo;
    	
});


// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg.1').click(function() {
	location.href = 'admin-notice.html';
});






