/*var memberNo=1;*/

$.getJSON('../auth/loginUser.json', function(ajaxResult) {
	var data = ajaxResult.data;
	
	memberNo= data.memberNo;
	console.log(memberNo);

	$.getJSON('../prepurchase/memberbookinglist.json?memberNo=' +memberNo, function(ajaxResult){
		
		var list = ajaxResult.data;
		
		console.log(list);
		var tbody = $('.list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		for (var i = 0; i < list.length; i++) {
			list[i].bookingDate = list[i].serviceTime.split(" ")[0]
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
	location.href = 'reservationHistory.html';
		});
	});
	
	$.getJSON('../mypagepl/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
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

