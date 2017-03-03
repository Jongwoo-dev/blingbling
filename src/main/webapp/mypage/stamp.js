//학생 목록 가져와서 tr 태그를 만들어 붙인다.
$.getJSON('../stamp/list.json', function(ajaxResult) {
	var status = ajaxResult.status;

	if (status != "success")
		return;

	var list = ajaxResult.data;
	var main = $('#content_main');
	/*
  <div class=chart>
	<canvas class="myDoughnutChart"></canvas>
	<span style="display: block; text-align: center;">비트피부샾</span>
</div>*/



	var totalstamp = $('#Totalstamp');
	$('<span>').addClass('item value').text(list.length+'개').appendTo(totalstamp);

	var div ;
	for (var i = 0; i < list.length; i++) {
		div = $('<div>').addClass('chart').appendTo(main);
		var canvas =  $('<canvas>').addClass('myDoughnutChart').appendTo(div);
		$('<span>').css('display', 'block')
		.css('text-align','center')
		.text(list[i].memberStoreName)
		.appendTo(div);

		console.log(i,'번째 데이터 : ',list[i]); 

		var myDoughnutChart = new Chart(canvas, {
			type: 'doughnut',
			data: {
				labels: ["남은횟수", "누적횟수"],
				datasets: [{
					label: '# of Votes',
					data: [list[i].stampTotalNo, list[i].saveNo],
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

