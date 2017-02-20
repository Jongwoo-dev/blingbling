try {
  var memberNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var memberNo = -1;
}

if (memberNo > 0) {
} 

		//학생 목록 가져와서 tr 태그를 만들어 붙인다.
	$.getJSON('detail.json?memberNo=' + memberNo, function(ajaxResult) {
	  var status = ajaxResult.status;
	  
	  if (status != "success") {
		  alert(ajaxResult.data);
		  return;
	  }
	  var serviceCenter = ajaxResult.data;
	  console.log(serviceCenter);
	  $('#faq-prefix').text(serviceCenter.prefix);
	  $('#faq-title').text(serviceCenter.title);
	  $('#faq-postedDate').text(serviceCenter.postedDate);
	  $('#faq-view').text(serviceCenter.content);
	});

// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('#complete').click(function() {
	location.href = 'notice.html';
});






