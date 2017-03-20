//달력 버튼 스크립트 
$(function() {
	  $( "#datepicker" ).datepicker({
	        showOn: "both", 
	        buttonImage: "calendar.png", 
	        buttonImageOnly: true 
	  });
	});

$(function() {
    $( "#datepicker2" ).datepicker({
          showOn: "both", 
          buttonImage: "calendar.png", 
          buttonImageOnly: true 
    });
  });


//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success") {
		swal('주의','로그인하세요','warning');
		return;
	}
	var member = ajaxResult.data;

//상단바
$.getJSON('../mypagepl/listByMember.json?memberNo='+member.memberNo, function(ajaxResult) {
		var status = ajaxResult.status;

		if (status != "success")
			return; 

		var list = ajaxResult.data;
		console.log(list);
		
		var totallike = $('#Totallike');
		$('<span>').addClass('item value').text(list[0].likeNum+'개').appendTo(totallike);
		
		var totalstamp = $('#Totalstamp');
		$('<span>').addClass('item value').text(list[0].stampNum+'개').appendTo(totalstamp);
		
		var totalprepurchase = $('#Totalprepurchase');
		$('<span>').addClass('item value').text(list[0].prepurchaseNum+'개').appendTo(totalprepurchase);

		
	});
});

