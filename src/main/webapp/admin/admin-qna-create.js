/*//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	*/

try {
  var serviceCenterNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var serviceCenterNo = -1;
}

if (serviceCenterNo > 0) {
} 

// answer처리
$('.btn-lg2').click(function() {
	var param = {
			serviceCenterNo: serviceCenterNo,
			reply: $('#content-text').val()
	}
	$.post('answer.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
		location.href = 'admin-qna.html';
	}, 'json');
    
});











// 취소 버튼 
$('.btn-lg1').click(function() {
	location.href = 'admin-qna.html';
});

/*// 등록 버튼 
$('.btn-lg2').click(function() {
	location.href = 'admin-qna.html?serviceCenterNo=' + serviceCenterNo;
});
*/




