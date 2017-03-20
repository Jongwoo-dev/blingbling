var basclk = '서울';
var detclk = '강남 역삼 삼성';
var fullclk = basclk+' '+detclk;;
var contenheager = $('#content-headersub');

$("<span>").addClass('headersubsle headersubsle selected')
.append($("<a href='#'>").text('강남 역삼 삼성')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('서초 방배')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('잠실 신천')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('영등포 여의도')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('구로 금천 신도림')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('강서 화곡 까지산역 목동')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('천호 길동 둔촌')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('서울대 신림 사당')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('종로 대학로')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('용산 중구 명동 이태원')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('성북 도봉 노원')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('강북 수유 미아')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('왕십리 성수')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('선대 광진')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('동대문 장안 청량리')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('중랑 상봉 면목 태릉')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('신촌 홍대 서대문 마포')).appendTo(contenheager);
$("<span>").addClass('headersubsle')
.append($("<a href='#'>").text('은평 연신내 불광')).appendTo(contenheager);

$.getJSON('../corporate/searchBybaseAddress.json?baseAddress='+fullclk, function(ajaxResult) {
	var status = ajaxResult.status;
	if (status != "success")
		return;
	//$('#content-main').children().remove();
	var list = ajaxResult.data;
	var main = $('#content_main');
	var template = Handlebars.compile($('#corTemplate').html());
	console.log(list);

	main.html(template({"list": list}));
	
	$('#clkdetail').click(function(event) {
		  	event.preventDefault();
		  	location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-no");
		  	
		  });
	

	

	
});


$('#content-headersub span').click(function() {
	var btn = $(this);
	$('.headersubsle.headersubsle.selected').removeClass('selected');
	btn.addClass('selected');
	detclk=$(this).text()
	fullclk = basclk+' '+detclk;

	$.getJSON('../corporate/searchBybaseAddress.json?baseAddress='+fullclk, function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		//$('#content-main').children().remove();
		var list = ajaxResult.data;
		var main = $('#content_main');
		var template = Handlebars.compile($('#corTemplate').html());
		//console.log(list);

		main.html(template({"list": list}));
		
		$('#clkdetail').click(function(event) {
		  	event.preventDefault();
		  	location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-no");
		  	
		  });
	});
});



$('#content-headersub span').click(function() {
var btn = $(this);
$('.headersubsle.headersubsle.selected').removeClass('selected');
btn.addClass('selected');
detclk=$(this).text();
});





$('#btn_category button').click(function() {
	var btn = $(this);
	$('.btn.btn-default.content-default.selected').removeClass('selected');
	btn.addClass('selected');
	basclk = $(this).text();
	$('#content-headersub').children().remove();
	if(basclk == '서울'){
		detclk = '강남 역삼 삼성';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('강남 역삼 삼성')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		
		.append($("<a href='#'>").text('서초 방배')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('잠실 신천')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('영등포 여의도')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('구로 금천 신도림')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('강서 화곡 까지산역 목동')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('천호 길동 둔촌')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('서울대 신림 사당')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('종로 대학로')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('용산 중구 명동 이태원')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('성북 도봉 노원')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('강북 수유 미아')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('왕십리 성수')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('선대 광진')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동대문 장안 청량리')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('중랑 상봉 면목 태릉')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('신촌 홍대 서대문 마포')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('은평 연신내 불광')).appendTo(contenheager);
		

		
		//updateClickEvent()
		
	}
	
	else if(basclk == '경기'){
		detclk = '수원 영통 안산';
		
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('수원 영통 안산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('안성 평택')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('오산 화성 동탄')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('파주 김포')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('고양 일산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('의정부')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('부천')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('안양 평촌')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('군포 금정 산본')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('안산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('광명 시흥')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('용인')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('이천 광주')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('성남')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('구리 남양주 하남')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('가평 양평')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('포천 동두천 연천 양주')).appendTo(contenheager);
		
	
		
		
	
		
	}
	
	else if(basclk == '인천'){
		detclk = '부평';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('부평')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('주안')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동암 남동구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('계양 서구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('남구 동구 중구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('월미도')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('송도')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('강화')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('웅진 백령도')).appendTo(contenheager);
		
		
	}
	else if(basclk == '강원'){
		detclk = '경포대 강릉 정동진';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('경포대 강릉 정동진')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('속초 양양 고성 인제')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('춘천 홍천 철원')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('원주 횡성')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동해 삼척 태백')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('평창 영월 정선')).appendTo(contenheager);
		
	
		
	}
	else if(basclk == '부산'){
		detclk = '해운대 재송';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('해운대 재송')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('송정 기장')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('서면 초읍 양청')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('연산 토곡')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동래 온천장 부산대')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동구 부산역 남포동')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('송도 영도')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('광안리 경성대 남구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('사상')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('덕천 북구')).appendTo(contenheager);

		
	
		
	}
	else if(basclk == '경남'){
		detclk = '김해 장유';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('김해 장유')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('양산 밀양')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('거제 통영 고성군')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('진주 사천')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('남해 하동')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('창원 진해')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('마산 거창 함안')).appendTo(contenheager);
		
		
	
	
		
	}
	else if(basclk == '대구'){
		detclk = '동성로 중구 서구';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('동성로 중구 서구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('수성구 남구 수성못')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동대구역 신천 대구공항')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('경북대 북구 칠곡지구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('성서 죽전 달서구 달성군')).appendTo(contenheager);
	
		
	}
	
	else if(basclk == '경북'){
		detclk = '경주';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('경주')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('구미 김천 의성')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('포항 영덕')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('울진 울릉도 청송')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('영천 칠곡 경산 청도 성주')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('문경 상주 안동 영주 예천')).appendTo(contenheager);
		
		
	
		
	}
	else if(basclk == '울산'){
		detclk = '동구 울주군 북구';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('동구 울주군 북구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('남구 중구')).appendTo(contenheager);

		

	}
	else if(basclk == '대전'){
		detclk = '유성';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('유성')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('중구 은행')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('동구 대덕 용전')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('서구 둔산 괴정')).appendTo(contenheager);

	
		
	}
	else if(basclk == '충남'){
		detclk = '천안';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('천안')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('세종')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('계룡 공주 금산 논산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('아산 예산 청양 홍성')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('태안 당진 안면도 서산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('대천 보령 서천 부여')).appendTo(contenheager);

		
	
	}
	else if(basclk == '충북'){
		detclk = '청주';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('청주')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('충주 제천 진천 음성 단양')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('증평 괴산 영동 보은 옥천')).appendTo(contenheager);
	
	
		
	}
	else if(basclk == '광주'){
		detclk = '서구 남구 동구';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('서구 남구 동구')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('광산구 북구')).appendTo(contenheager);
		
	
		
	}
	else if(basclk == '전남'){
		detclk = '여수 광양';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('여수 광양')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('목포 무안 해남 나주 영암')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('화순 보성 담양 구례 곡성')).appendTo(contenheager);
		
		
		
	}
	else if(basclk == '전북'){
		detclk = '전주';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('전주')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('군산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('익산')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('김제 부안 임실 정읍 남원')).appendTo(contenheager);
		
	
		
	}
	else if(basclk == '제주'){
		detclk = '제주시';
		$("<span>").addClass('headersubsle headersubsle selected')
			.append($("<a href='#'>").text('제주시')).appendTo(contenheager);
		$("<span>").addClass('headersubsle')
		.append($("<a href='#'>").text('서귀포 마라도')).appendTo(contenheager);
		
		
		
	}
	else {
		alert("존재하지 않는 도시입니다.");
	}
	fullclk = basclk+' '+detclk;;
	
	$.getJSON('../corporate/searchBybaseAddress.json?baseAddress='+fullclk, function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		//$('#content-main').children().remove();
		var list = ajaxResult.data;
		var main = $('#content_main');
		var template = Handlebars.compile($('#corTemplate').html());
		//console.log(list);

		main.html(template({"list": list}));
		$('#clkdetail').click(function(event) {
		  	event.preventDefault();
		  	location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-no");
		  	
		  });
		

		
	});
	
	
	$('#content-headersub span').click(function() {
		var btn = $(this);
		$('.headersubsle.headersubsle.selected').removeClass('selected');
		btn.addClass('selected');
		detclk=$(this).text()
		fullclk = basclk+' '+detclk;
		
		
		
	
		$.getJSON('../corporate/searchBybaseAddress.json?baseAddress='+fullclk, function(ajaxResult) {
			var status = ajaxResult.status;
			if (status != "success")
				return;
			//$('#content-main').children().remove();
			var list = ajaxResult.data;
			var main = $('#content_main');
			var template = Handlebars.compile($('#corTemplate').html());
			//console.log(list);

			main.html(template({"list": list}));
			$('#clkdetail').click(function(event) {
			  	event.preventDefault();
			  	location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-no");
			  	
			  });
			

			
		});

	});
	
});



