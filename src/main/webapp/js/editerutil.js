
// HTML 텍스트에서 dataURL로 쓰여진 이미지를 추출하여 내용물을 추출한 파일경로로 교체
function separateImg(htmlText) {
	var spiltedContent =htmlText.split('<img');
	var srcSplit;
	var resultHTML = spiltedContent[0];
	var startImgIndex = 1;
	var endImgIndex;
	var dataURL;
	var tempFilename;
	for (var i = 1; i < spiltedContent.length; i++) {
		srcSplit = spiltedContent[i].split(' src=');
		resultHTML += '<img' + srcSplit[0];
		/*console.log(resultHTML);*/
		if (srcSplit[1].indexOf('/upload/') >= 0) {
			// src 속성에 '/upload/'가 있으면 경로이므로 나머지를 그대로 붙임
			resultHTML += ' src=' + srcSplit[1];
		} else {
			// src 속성에 '/upload/'가 없으면 dataURL이므로 변환 후 붙임
			endImgIndex = srcSplit[1].indexOf('data-filename') - 2;
			uploadImage(dataURItoBlob(srcSplit[1].substring(startImgIndex, endImgIndex)));
			/*console.log(i,'번째 파일이름 : ',filename);*/
			resultHTML += ' src="/blingbling/upload/'+ filename + '"' + srcSplit[1].substring(endImgIndex+1);
		}
		/*console.log(resultHTML);*/
	}
	return resultHTML;
}

// URL인코딩->바이너리 데이터
function dataURItoBlob(dataURI) {
  // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) {
      byteString = atob(dataURI.split(',')[1]);
  } else {
      byteString = unescape(dataURI.split(',')[1]);
  }

  // separate out the mime component
  var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  // write the bytes of the string to a typed array
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
  }

  return new Blob([ia], {type:mimeString});
}

// 이미지를 서버에 업로드. 파일명 리턴
function uploadImage(image) {
  var IMAGE_PATH = '../upload/review/';

  var data = new FormData();
  data.append("files",image);
  $.ajax ({
    async: false,
    data: data,
    dataType : "json",
    type: "POST",
    url: "../common/fileupload.json",
    cache: false,
    contentType: false,
    processData: false,
    success: function(ajaxResult) {
      /*$('#summernote').summernote("insertImage", IMAGE_PATH + result.data, result.data);*/
      filename = ajaxResult.data;
      /*console.log("성공: " + filename);*/
      return filename;
    },
    error: function(result) {
      /*console.log("실패: " + result);*/
    }
  });
}