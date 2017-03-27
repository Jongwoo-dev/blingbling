//학생 목록 가져와서 tr 태그를 만들어 붙인다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	

	$.getJSON('../stamp/listByMember.json?memberNo='+member.memberNo, function(ajaxResult) {
		var status = ajaxResult.status;

		if (status != "success")
			return;

		var list = ajaxResult.data;
		var main = $('#content_main');
	


/*
		var totalstamp = $('#Totalstamp');
		$('<span>').addClass('item value').text(list.length+'개').appendTo(totalstamp);
*/
		var div ;
		for (var i = 0; i < list.length; i++) {
			div = $('<div>').addClass('chart').appendTo(main);
			var canvas =  $('<canvas>').addClass('myDoughnutChart').appendTo(div);
			$('<span>').css('display', 'block')
			.css('text-align','center')
			.text(list[i].memberStoreName)
			.appendTo(div);

			var myDoughnutChart = new Chart(canvas, {
				type: 'doughnut',
				data: {
					labels: ["남은횟수", "누적횟수"],
					datasets: [{
						label: '# of Votes',
						data: [list[i].stampTotalNo-list[i].saveNo, list[i].saveNo],
						backgroundColor: [
							'rgba(230, 126, 34, 0.6)',
							'rgba(230, 126, 34, 1)'

							],
							hoverBackgroundColor: [
								'rgba(230, 126, 34, 0.5)',
								'rgba(230, 126, 34, 0.8)'
								]


					}]
				},
				options: {
					legend:{
						display: false
					}
				
					
				
				}

			});

		}

		/* var stamp = $('#myDoughnutChart');

  // 템플릿 텍스트를 처리하여 HTML을 생성해 줄 함수 얻기
  var template = Handlebars.compile($('#trTemplate').html());


  // 템플릿 엔진을 통해 생성된 HTML을 tbody에 넣는다.
  stamp.html(template({"list": list}));
		 */


	});
	
	
	
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
		$('<span>').addClass('maindesc').text(list[0].stampNum+'개').appendTo(substamp);
		
		var totalprepurchase = $('#Totalprepurchase');
		$('<span>').addClass('item value').text(list[0].prepurchaseNum+'개').appendTo(totalprepurchase);
		
		var profilename =$('#profilename');
		$('<span>').addClass('profile name').text(member.name).appendTo(profilename);

		
	});

});


/* var stamp = $('#myDoughnutChart');

// 템플릿 텍스트를 처리하여 HTML을 생성해 줄 함수 얻기
var template = Handlebars.compile($('#trTemplate').html());


// 템플릿 엔진을 통해 생성된 HTML을 tbody에 넣는다.
stamp.html(template({"list": list}));

select count(*)
from memb m
  join stmp s on m.mno=s.mno
where m.mno=1;

select count(*)
from memb m
  join buy b on m.mno=b.mno
where m.mno=1;

select 
  (select count(*) from stmp s where s.mno=m.mno) stmp_cnt,
  (select count(*) from buy b where b.mno=m.mno) buy_cnt,
  (select count(*) from favor f where f.mno=m.mno) favor_cnt
from memb m
where m.mno=1;
 */

