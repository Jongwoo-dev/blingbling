/*try {
  var memberNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var memberNo = -1;
}
*/



$( function() {
	$("#calendar").datepicker({
		inline: true,
		showOtherMonths: true,
		showMonthAfterYear: true,
		yearSuffix: '년',
		monthNames: [ '01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월' ],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토']
	});
	
	loadItemList();
	
	
});

$('.numberctr-btn.plus').click(function() {
	// 최대 인원 이상 못올리게 막는부분 넣어야함
	$('#reservation-number').text(pad(parseInt($('#reservation-number').text())+1,2));
});

$('.numberctr-btn.minus').click(function() {
	if (parseInt($('#reservation-number').text()) > 1) {
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

$('#reservation-submitbtn').click(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('로그인 하세요! 다음에 인터셉트로 걸러내게끔 변경\n임시로 로그인페이지로 이동');
			location.href=clientRoot+'/auth/testlogin.html';
			return;
		}
		var loginMember = ajaxResult.data;
		
		var param = {
				personnel     : parseInt($('#reservation-number').text()),
				serviceTime   : dateToYYYYMMDD($("#calendar").datepicker("getDate")) + ' ' + timeFormat($('#timeselect-hour-text').text(), $('#timeselect-minute-text').text(),$('#timeselect-ampm').text()),
				itemNo        : $('.fa-circle-o.selected').attr('data-itemno'),
				memberNo      : loginMember.memberNo, //로그인 멤버번호
				payMean       : '직접예약',
				payState      : '예약중'
		}
		 //파라미터 유효성 체크
		switch (checkParam(param)) {
		case 1:
			swal('주의','1명 이상 예약을 하셔야 합니다.','warning');
			return;
		case 2:
			swal('주의','최대 인원을 초과하였습니다.','warning');
			return;
		case 3:
			swal('주의','선택한 시간이 업체의 영업 시간이 아닙니다.','warning');
			return;
		}
		
		$.post('../prepurchase/add.json', param, function(ajaxResult) {
			if (ajaxResult.status != 'success') {
				swal('에러',ajaxResult.data,'error');
			}
			var selectedItemName = $('.fa-circle-o.selected').next().children('.item-title').text();
			//console.log('보낼 문자 : ', '예약자:'+loginMember.tel+', 예약항목 : '+selectedItemName);
			sendSMS(corporate.tel.replace(/-/gi, ""), '예약정보 [ '+loginMember.name+' '+loginMember.tel+' - '+
					$('#reservation-number').text()+'명 / '+selectedItemName+' / '+param.serviceTime+' ]');
			
			swal({
				  title: "예약성공",
				  text: ajaxResult.data,
				  type: "success",
				  closeOnConfirm: true
				},
				function(){
					
				  location.reload();
			});
			
		});
	});
	
});

function timeFormat(hour, minute, ampm) {
	if (ampm == '오전') {
		return pad(hour,2) + ":" + minute + ":00";
	}
	return pad(parseInt(hour)+12,2) + ":" + minute + ":00";
}

function checkParam(param) {
	console.log(param);
	
	if( param.personnel < 1 )
		return 1;
	
	// *영업시간 체크하는 부분 추가
	
	return 0;	// 정상일경우 0 리턴
}

function dateToYYYYMMDD(dateStr)
{
	var date = new Date(dateStr); 
    function pad(num) {
        num = num + '';
        return num.length < 2 ? '0' + num : num;
    }
    return date.getFullYear() + '-' + pad(date.getMonth()+1) + '-' + pad(date.getDate());
}

function pad(n, width) {
	n = n + '';
	return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}

function loadItemList() { 
	$.getJSON('../item/list.json?memberNo='+memberNo , function(ajaxResult) {
		if (ajaxResult.status != "success")
			return;
		
		var list = ajaxResult.data;
		for (var i in list) {
			list[i].price = list[i].price/10000 + '만';
			list[i].availableNo = '8'	//*임시로 8명 해놓음 나중에 수정;                                                    
		}
		var itemContainer = $('.item-container');
		var template = Handlebars.compile($('#trTemplate').html());
		itemContainer.html(template({"list": list}));
		
		$('.item-box').click(function() {
			$('.fa.fa-circle-o.selected').removeClass('selected');
			$(this).children('.fa.fa-circle-o').addClass('selected');	
		});
	});
}

function initCorpInfo() {
	window.maxNo = 12;	// *최대인원, 나중엔 서버에서 받아서 설정하게 변경 필요.
	window.openTime = '08:00:00'; // *시작시간, 나중엔 서버에서 받아서 설정하게 변경 필요.
	window.closeTime = '08:00:00'; // *종료시간, 나중엔 서버에서 받아서 설정하게 변경 필요.
}

/*$('#getdate').click(function() {
	console.log($("#calendar").datepicker("getDate"));
});*/