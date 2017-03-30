
$('#infoEditor').summernote({
	height: 450,                 // set editor height
	minHeight: null,             // set minimum height of editor
	maxHeight: null,             // set maximum height of editor
	focus: true,                  // set focus to editable area after initializing summernote
	lang: 'ko-KR',
	maximumImageFileSize: 2097152, //2MB
	disableDragAndDrop: true,
	toolbar: [
		// [groupName, [list of button]]
		['style', ['bold', 'italic', 'underline', 'clear']],
		['fontsize', ['fontname', 'fontsize']],
		['color', ['color']],
		['insert', ['picture', 'link', 'video']],
		['font', ['strikethrough', 'superscript', 'subscript']],
		['misc', ['undo', 'redo']],
		['table', ['table']],
		['para', ['ul', 'ol', 'paragraph']],
		['height', ['height']],
		['detail', ['codeview']]
		]
	/*callbacks : {
      onImageUpload: function(image) {
        uploadImage(image[0]);
      }
    }*/
});

$(function() {
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('로그인 하세요! 다음에 인터셉트로 걸러내게끔 변경\n임시로 로그인페이지로 이동');
			location.href=clientRoot+'/auth/testlogin.html';
			return;
		}
		loginMember = ajaxResult.data;
		
		initInfo();
	});
});

var initInfo = function() {
	$.getJSON('../corporate/detail.json?memberNo='+loginMember.memberNo, function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			alert('업체가 아닙니다.');
			return;
		}
		
		var corporate = ajaxResult.data;
		$('#infoEditor').summernote('code', corporate.notice);
	});
	
}


$('#submit-btn').click(function() {
	var param = {
			memberNo        : loginMember.memberNo,
			notice          : separateImg($('#infoEditor').summernote('code')),
	}
	
	$.post('updateNotice.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
		swal('등록 성공',ajaxResult.data,'success');
	}, 'json');
})

/*사이드바 링크*/
$('#sb-basicinfo').click(function(){
	location.href='basicinfo.html';
})
$('#sb-itemManage').click(function(){
	location.href='itemManage.html';
})
$('#sb-bookingManage').click(function(){
	location.href='bookingManage.html';
})
$('#sb-infopicture').click(function(){
	location.href='infopicture.html';
})
$('#sb-notice').click(function(){
	location.href='notice.html';
})
$('#sb-review').click(function(){
	location.href='/blingbling/corporate/detail-info.html?memberNo='+loginMember.memberNo+'&navi=review';
})
$('#sb-pricetime').click(function(){
	location.href='pricetime.html';
})