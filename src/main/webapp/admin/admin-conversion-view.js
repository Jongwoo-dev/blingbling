//멤버 넘버를 가져온다
try {
  var memberNo = location.href.split('?')[1].split('=')[1];
} catch (error) {
	var memberrNo = -1;
}

if (memberNo > 0) {
}

var name;
var corporateName;
var tel;

//디테일 처리
$.getJSON('../corporate/detail.json?memberNo=' + memberNo, function(ajaxResult) {
  var status = ajaxResult.status;
  
  if (status != "success") {
	  alert(ajaxResult.data);
	  return;
  }
  var corChange = ajaxResult.data;
  console.log(corChange);
  
  name = corChange.name;
  corporateName = corChange.corporateName;
  tel = corChange.tel;
  
  $('#td-name').text(corChange.name);
  $('#td-corType').text(corChange.corporateType);
  $('#td-corName').text(corChange.corporateName);
  $('#td-corRegistationNo').text(corChange.corporateRegistrationNumber);
  //사진파일 이미지태그에 담아서 처리하기
  var contentPhoto = $('#td-photo'); 
  for (var i = 0; i < corChange.photoList.length; i++) {
	  $('<img>')
	    .attr('src','/blingbling/upload/'+corChange.photoList[i].filePath)
	    .css('width','200px')
	    .css('height','100px')
		.appendTo(contentPhoto);	
  }
});


/*//삭제 처리
$('.btn-lg.3').click(function() {
	$.getJSON('delete.json?serviceCenterNo=' + serviceCenterNo, function(ajaxResult) {
		if (ajaxResult.status != "success") { 
			  alert(ajaxResult.data);
			  return;
		  }
		location.href = 'admin-notice.html';
	});
});
*/

/*//update처리
$('.btn-lg.2').click(function() {
	location.href = 'admin-notice-update.html?serviceCenterNo=' + serviceCenterNo;
    	
});*/


// 목록 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg.1').click(function() {
	location.href = 'admin-conversion.html';
});

//거절 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg.2').click(function() {
	$.getJSON('../corporate/delete.json?memberNo=' + memberNo, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert(ajaxResult.data);
			return;
		}
		//알람창을 띄워서 확인 눌렀을때 페이지 이동하는 함수처리 
		swal({
			  title: "안내",
			  text: "업체전환 거절되었습니다",
			  type: "error",
			  /*showCancelButton: true,
			  confirmButtonColor: "#DD6B55",
			  confirmButtonText: "Yes, delete it!",*/
			  closeOnConfirm: true
			},
			function(){
			  location.href = 'admin-conversion.html';
		});
	}); 
});

//승인 버튼을 클릭했을 때 호출될 함수(이벤트 핸들러) 등록!
$('.btn-lg.3').click(function() {
	$.post('../corporate/updateCorporateConfirm.json?memberNo=' + memberNo, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data); 
			return;
		}
		//console.log('받는사람 : ',tel,'   메시지 내용 : ', name+'님의 '+corporateName+'에 대한 업체 전환이 승인되었습니다. 블링블링에 가입하신 것을 축하합니다.');
		sendSMS(tel,name+'님의 '+corporateName+'에 대한 업체 전환이 승인되었습니다. 축하합니다.');
		swal({
			title: "안내",
			text: "업체 승인되었습니다",
			type: "success",
			/*showCancelButton: true,
		  confirmButtonColor: "#DD6B55",
		  confirmButtonText: "Yes, delete it!",*/
			closeOnConfirm: true
		},
		function(){
			location.href = 'admin-conversion.html';
		});
	});	
});


