//로그인 멤버 넘버 추출
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var data = ajaxResult.data;
	var memberNo = data.memberNo;
	
	$.getJSON('../mypagepl/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;

		var list = ajaxResult.data;
		console.log(list);
		
		var totallike = $('#Totallike');
		$('<span>').addClass('item value').text(list[0].likeNum+'개').appendTo(totallike);
		$('.maindesc').text(list[0].likeNum+'개');
		
		var totalstamp = $('#Totalstamp');
		$('<span>').addClass('item value').text(list[0].stampNum+'개').appendTo(totalstamp);
		
		var totalprepurchase = $('#Totalprepurchase');
		$('<span>').addClass('item value').text(list[0].prepurchaseNum+'개').appendTo(totalprepurchase);
		
		var profilename =$('#profilename');
		$('<span>').addClass('profile name').text(data.name).appendTo(profilename);
	});
	
	//즐찾 리스트 추출
	$.getJSON('../corporate/myFavoriteList.json?memberNo=' + memberNo, function(ajaxResult) {
		var list = ajaxResult.data
		console.log(list);

		var main = $('#content_main');
		var template = Handlebars.compile($('#corTemplate').html());

		   main.html(template({"list": list}));
		   
		   $('.img-card').click(function(event) {
		           event.preventDefault();
		           location.href = '../corporate/detail-info.html?memberNo=' + $(this).attr("data-memberno");
		        });
	})
	
});




