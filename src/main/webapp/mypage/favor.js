//학생 목록 가져와서 tr 태그를 만들어 붙인다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	console.log('11111111111');
	if (ajaxResult.status != "success")
		return;
	var data = ajaxResult.data;
	var memberNo = data.memberNo;
	console.log(memberNo);
	
	/*$.getJSON('../stamp/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
		var status = ajaxResult.status;
		if (status != "success")
			return;
		var list = ajaxResult.data;
		var main = $('#content_main');


	});*/

	$.getJSON('../favorite/list?memberNo' + memberNo, function(ajaxResult) {
		var list = ajaxResult.data
		console.log(list);
	})
	
	
	
	/*$.getJSON('../mypagepl/listByMember.json?memberNo='+memberNo, function(ajaxResult) {
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
*/
});




