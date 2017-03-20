/*var memberNo=1;*/
var startTime;
var endTime;
var today;
var weekday;
var monthday;
var trmonthday;

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
	$('.review-btn').click(function() {  //리뷰창 만들면 연동하기!
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
$(function() {
	$( "#datepicker" ).datepicker({
		showOn: "both", 
		buttonImage: "calendar.png",
		buttonImageOnly: true, 
		dateFormat: "yy-mm-dd"

	});

	$( "#datepicker2" ).datepicker({
		showOn: "both", 
		buttonImage: "calendar.png",
		buttonImageOnly: true,
		dateFormat: "yy-mm-dd"
	});

	var date = new Date();
	today = dateToYYYYMMDD(date);
	week = date.setDate(date.getDate()-7);
	weekday = dateToYYYYMMDD(week);
	month = date.setDate(date.getDate()-30);
	monthday= dateToYYYYMMDD(month);
	trmonth= date.setDate(date.getDate()-90);
	trmonthday= dateToYYYYMMDD(trmonth);
	console.log(weekday);
	console.log(monthday);
	console.log(trmonthday);



	$('.bt4').click(function() {
		$.getJSON('../prepurchase/calendertime.json?startTime='+$("#datepicker").val() + '&endTime='+ $("#datepicker2").val()+'&memberNo='+memberNo, function(ajaxResult) {	
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);

				return;
			}
			var list = ajaxResult.data;
			console.log(list);
			var tbody = $('.list-table > tbody');
			
			var template = Handlebars.compile($('#trTemplate').html());
			for (var i = 0; i < list.length; i++) {
				list[i].bookingDate = list[i].serviceTime.split(" ")[0]
			}
			tbody.html(template({"list":list}));

		});
	});
});



$('.bt1').click(function() {
	$.getJSON('../prepurchase/calendertime.json?startTime='+today + '&endTime='+ weekday +'&memberNo='+memberNo, function(ajaxResult) {	
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);

			return;
		}
		var list = ajaxResult.data;
		console.log(list);
		var tbody = $('.list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		for (var i = 0; i < list.length; i++) {
			list[i].bookingDate = list[i].serviceTime.split(" ")[0]
		}
		tbody.html(template({"list":list}));

	});
});

$('.bt2').click(function() {
	$.getJSON('../prepurchase/calendertime.json?startTime='+today + '&endTime='+ monthday +'&memberNo='+memberNo, function(ajaxResult) {	
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);

			return;
		}
		var list = ajaxResult.data;
		console.log(list);
		var tbody = $('.list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		for (var i = 0; i < list.length; i++) {
			list[i].bookingDate = list[i].serviceTime.split(" ")[0]
		}
		tbody.html(template({"list":list}));
		

	});
});
$('.bt3').click(function() {
	$.getJSON('../prepurchase/calendertime.json?startTime='+today + '&endTime='+ trmonthday +'&memberNo='+memberNo, function(ajaxResult) {	
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);

			return;
		}
		var list = ajaxResult.data;
		console.log(list);
		
		var tbody = $('.list-table > tbody');
		
		var template = Handlebars.compile($('#trTemplate').html());
		for (var i = 0; i < list.length; i++) {
			list[i].bookingDate = list[i].serviceTime.split(" ")[0]
		}
		tbody.html(template({"list":list}));

	});
});

});

//달력 버튼 스크립트 


function dateToYYYYMMDD(dateStr)
{
	var date = new Date(dateStr); 
    function pad(num) {
        num = num + '';
        return num.length < 2 ? '0' + num : num;
    }
    return date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate());
}


