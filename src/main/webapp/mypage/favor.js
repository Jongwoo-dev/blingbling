//로그인 멤버 넘버 추출
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	console.log('11111111111');
	if (ajaxResult.status != "success")
		return;
	var data = ajaxResult.data;
	var memberNo = data.memberNo;
	console.log(memberNo);
	
	//즐찾 리스트 추출
	$.getJSON('../favorite/list.json?memberNo=' + memberNo, function(ajaxResult) {
		var list = ajaxResult.data
		console.log(list);
		
		var memberStoreNo = list[i].memberStoreNo;
		
		//각 테이블 생성
		var list = ajaxResult.data;
	    var main = $('#content_main');
		var template = Handlebars.compile($('#corTemplate').html());

		   main.html(template({"list": list}));
		   
		   $('.img-card').click(function(event) {
		           event.preventDefault();
		           location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-memberno");
		           
		        });
		   
	})
	
	
	
	$.getJSON('../mypagepl/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
		var status = ajaxResult.status;

		if (status != "success")
			return;

		var list = ajaxResult.data;
		console.log(list);
		
		var totallike = $('#Totallike');
		$('<span>').addClass('item value').text(list[0].likeNum+'개').appendTo(totallike);
		$('<span>').addClass('maindesc').text(list[0].likeNum+'개').appendTo(subfavor);
		
		var totalstamp = $('#Totalstamp');
		$('<span>').addClass('item value').text(list[0].stampNum+'개').appendTo(totalstamp);
		
		var totalprepurchase = $('#Totalprepurchase');
		$('<span>').addClass('item value').text(list[0].prepurchaseNum+'개').appendTo(totalprepurchase);
		
		var profilename =$('#profilename');
		$('<span>').addClass('profile name').text(member.name).appendTo(profilename);
	});
	
});




