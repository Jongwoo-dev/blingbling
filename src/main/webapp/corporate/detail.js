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

$('#hourup').click(function() {
	if (parseInt($('#timeselect-hour-text').text()) < 12) {
		$('#timeselect-hour-text').text(parseInt($('#timeselect-hour-text').text())+1);
	} else {
		$('#timeselect-hour-text').text('1');
	}
});

$('#hourdown').click(function() {
	if (parseInt($('#timeselect-hour-text').text()) > 1) {
		$('#timeselect-hour-text').text(parseInt($('#timeselect-hour-text').text())-1);
	} else {
		$('#timeselect-hour-text').text('12');
	}
});

$('#minuteup').click(function() {
	if (parseInt($('#timeselect-minute-text').text()) == 0) {
		$('#timeselect-minute-text').text('30');
	} else {
		$('#timeselect-minute-text').text('00');
	}
});

$('#minutedown').click(function() {
	if (parseInt($('#timeselect-minute-text').text()) == 0) {
		$('#timeselect-minute-text').text('30');
	} else {
		$('#timeselect-minute-text').text('00');
	}
});

$('#timeselect-ampm').click(function() {
	if ($(this).text() == '오전') {
		$(this).text('오후');
	} else {
		$(this).text('오전');
	}
});

$('.item-box').click(function() {
	$('.fa.fa-circle-o.selected').removeClass('selected');
	$(this).children('.fa.fa-circle-o').addClass('selected');	
});

$('#reservation-submitbtn').click(function() {
	var param = {
			
	}
	console.log('달력 : ', $("#calendar").datepicker("getDate"));
	console.log('시 : ', $('#timeselect-hour-text').text(), '         분 : ', $('#timeselect-minute-text').text());
	console.log('선택한 아이템 번호 : ', $('.fa-circle-o.selected').attr('data-itemno'));
	
})


function pad(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}


/*$('#getdate').click(function() {
	console.log($("#calendar").datepicker("getDate"));
});*/