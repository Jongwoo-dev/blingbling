$( function() {
  $("#calendar").datepicker({
    inline: true,
    showOtherMonths: true,
    showMonthAfterYear: true,
    yearSuffix: '년',
    monthNames: [ '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월' ],
    dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
  });
});

$('.numberctr-btn.plus').click(function() {
	// 최대 인원 이상 못올리게 막는게 필요한가?
	$('#reservation-number').text(pad(parseInt($('#reservation-number').text())+1,2));
});

$('.numberctr-btn.minus').click(function() {
	if (parseInt($('#reservation-number').text()) > 0) {
		$('#reservation-number').text(pad(parseInt($('#reservation-number').text())-1,2));
	}
});

$('.item-box').click(function(event) {
	/*$('.fa.fa-circle-o.selected').removeClass('selected');
	$(event).addClass('selected');*/
});


function pad(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}


/*$('#getdate').click(function() {
	console.log($("#calendar").datepicker("getDate"));
});*/