//서비스넘버 받아오는거
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
  $('#faq-prefix').val(serviceCenter.prefix);
  $('#title-box').val(serviceCenter.title);
  $('#content-text').text(serviceCenter.content);
});



//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	//update처리
	$('.btn-lg.2').click(function() {
		console.log(serviceCenterNo)
		var param = {
				serviceCenterNo: serviceCenterNo,
				memberNo : member.memberNo,
				category : '공지사항',
				prefix : $('#faq-prefix').val(),
				title: $('#title-box').val(),
				content: $('#content-text').val()
		}
		console.log(param);
		$.post('update.json', param, function(ajaxResult) {
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);
				return;
			}
			location.href = 'admin-notice-view.html?serviceCenterNo=' + serviceCenterNo;
		}, 'json');
	});
});






// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg.1').click(function() {
	location.href = 'admin-notice.html';
});






