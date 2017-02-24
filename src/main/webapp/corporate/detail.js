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

$('#getdate').click(function() {
	console.log($("#calendar").datepicker("getDate"));
});