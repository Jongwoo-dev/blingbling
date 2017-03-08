var filenames = new Array();

$('#photo').fileupload({
    url: 'http://localhost:8080/blingbling/common/fileupload.json', // 서버에 요청할 URL
   dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
   sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
   singleFileUploads: true, // 한 요청에 여러 개의 파일을 전송시키기. 기본은 true.
   autoUpload: true,        // 파일을 추가할 때 자동 업로딩 여부 설정. 기본은 true.
   minFileCount:1,
   maxFileCount:5,
   disableImageResize: /Android(?!.*Chrome)|Opera/
      .test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
      previewMaxWidth: 800,   // 미리보기 이미지 너비
      previewMaxHeight: 800,  // 미리보기 이미지 높이 
      previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
      done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
         console.log('done()...');
         if (filenames.length != 0) {
        	 $('#imgfilenames').append(', ');
         }
         filenames.push(data.result.data[0]);
         $('#imgfilenames').append(data.result.data[0]);
         
         console.log('파일이름들 : ',filenames);
         $('#photo-path').val(data.result.data[0]);
      }, 
      processalways: function(e, data) {
         /*console.log('fileuploadprocessalways()...', data.files.length, data.index);*/
         var img = $('#photo-img');
         console.log('파일 : ',data.files);
         if (data.index == 0) {
            var canvas = data.files[0].preview;
            var dataURL = canvas.toDataURL();
            $('<img>')
            	.attr('src', dataURL)
            	.css('width', '100px')
            	.addClass('previewimg')
            	.appendTo($('#preview-box'));
         }
      } 
});

//로그인 정보를 가져온다.
$.getJSON('../auth/loginUser.json', function (ajaxResult){
	if (ajaxResult.status != "success")
		return;
	var member = ajaxResult.data;

	
// add처리
	$('.fullwidthbtn').click(function() {
		var param = {
				memberNo : member.memberNo,
				corporateType : $('#corporate-prefix').val(),
				corporateName: $('#company_name').val(),
				corporateRegistrationNumber: $('#company_number').val(),
				corporateConfirm: 'false',
				photoList: arrayToJson(filenames)
		}
		console.log(param);
		$.post('../corporate/add.json', param, function(ajaxResult) {
			if (ajaxResult.status != "success") {
				alert(ajaxResult.data);
				return;
			}
			/*location.href = 'admin-faq.html';*/
		}, 'json');
	});
});

function preview(filenameList) {
	console.log(filenameList);
	var previewBox = $('#preview-box');
	for (var i = 0; i < filenameList.length; i++) {
		$('<img>')
			.attr('src','/blingbling/upload/'+filenameList[i])
			.attr('class','previewimg')
			.appendTo(previewBox);
	}
}

$(function (){
	$('#photo-select').click(function() {
		document.all.photo.click();
	});
});