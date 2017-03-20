var map;
var marker;
var infowindow;
var loginMember;
var filename;
//var memberNo = 5;
//var memberStoreNo = 5; 

var memberNo = location.href.split('?')[1].split('=')[1];
var memberStoreNo = memberNo;

$.getJSON('../auth/loginUser.json', function(ajaxResult) {
	//로그인 확인
	if(ajaxResult.status == 'success') {
		var data = ajaxResult.data;
		memberNo = data.memberNo;

		$.getJSON('../favorite/count.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
			var count = ajaxResult.data;
				if (count > 0) {
					$('#favorite-star-span').removeClass('glyphicon-star-empty');
					$('#favorite-star-span').addClass('glyphicon-star');
				} return;
		});
	} else {
		return	//비로그인 일시 '별버튼' 그대로
	}
});

$('#favorite-star-span').click(function(){
	var starBtn = $(this);
	$.getJSON('../auth/loginUser.json', function(ajaxResult) {
		if (ajaxResult.status != 'success') {
			window.alert('즐찾 기능 쓰려면 로그인 하셈!!');
			return
		} else {
			
			var status;
			var data = ajaxResult.data;
			memberNo = data.memberNo;
			
			if(starBtn.hasClass('glyphicon-star-empty')) {
				$.getJSON('../favorite/add.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
					if (ajaxResult.status != 'success') {
						return;
					}
					starBtn.removeClass('glyphicon-star-empty');
					starBtn.addClass('glyphicon-star');
				});
			} else if(starBtn.hasClass('glyphicon-star')) {
				$.getJSON('../favorite/delete.json?memberNo=' + memberNo +'&memberStoreNo=' + memberStoreNo, function(ajaxResult) {
					if (ajaxResult.status != 'success') {
						return;
					}
					starBtn.removeClass('glyphicon-star');
					starBtn.addClass('glyphicon-star-empty');
				});
			}
			
		}
	});
});




function initMap() {
	  var currentLatLng;
	  map = new google.maps.Map(document.getElementById('CorporaterMap'), {
	    center: {lat: 37.5666805, lng: 126.9784147},
	    zoom: 17
	  });
	  marker = new google.maps.Marker({
	    //position: {lat: 37.5666805, lng: 126.9784147},
	    map: map,
	    draggable:false,
	    title:"업체의 위치로 드래그 해 주세요"
	  });
	  infowindow = new google.maps.InfoWindow({
	    content: ''
	  });
	 /* google.maps.event.addListener(map, 'click', function(mouseEvent) {
		  moveMarker(mouseEvent.latLng);
	  });*/
	  
	  /*marker.addListener('mouseup', function(mouseEvent) {
		  moveMarker(mouseEvent.latLng);
	  });*/
	}

	var moveMarker = function(latlng) {

		var geocoder = new google.maps.Geocoder();
		geocoder.geocode({
			latLng: latlng
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				if (results[0].geometry) {
					var address = results[0].formatted_address;
					window.marker.setPosition(latlng)
					infowindow.setContent(address)
					infowindow.open(map, marker);

					var opt = $("<option value='" + latlng.toString() + "'>" + address + "</option>");
					$("#markerList").append(opt);
				}
			} else if (status == google.maps.GeocoderStatus.ERROR) {
				alert("통신중 에러발생！");
			} else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
				alert("요청에 문제발생！geocode()에 전달하는GeocoderRequest확인요！");
			} else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
				alert("단시간에 쿼리 과다송신！");
			} else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
				alert("이 페이지에는 지오코더 이용 불가! 왜??");
			} else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
				alert("서버에 문제가 발생한거 같아요. 다시 한번 해보세요.");
			} else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
				alert("존재하지 않습니다.");
			} else {
				alert("??");
			}
		});
	}

	var initMarker = function(latlngStr) {
		var point = latlngStr.substring(1,latlngStr.length-1).split(',');
		moveMarker(new google.maps.LatLng({lat:Number(point[0]), lng:Number(point[1])}));
	}

$.getJSON('../corporate/detail.json?memberNo=' + memberNo, function(ajaxResult) {
	if (ajaxResult.status != 'success') {
		swal('경고',ajaxResult.data,'warning');
		return;
	}
	var corporate = ajaxResult.data;
	console.log(corporate);
		$('#corp-name-span').text(corporate.corporateName);
		$('#corp-addr-span').text(corporate.baseAddress);
		$('#corp-addr-span2').text(corporate.detailAddress);
		$('#corp-tel-span').text(corporate.tel);
		$('#comment-span').html(corporate.additionalInfo);
		$('#navi-header-div').text('정보&사진');
		$('#info-cont-div').html(corporate.detail);
		
		$('#infonpic-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('정보&사진');
			$('#info-cont-div').html(corporate.detail);
		});
		
		$('#feentime-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('요금 및 시간');
			$('#info-cont-div').html(corporate.priceTime);
		});
		
		$('#notice-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('공지사항');
			$('#info-cont-div').html(corporate.notice);
		});
		
		$('#review-btn').click(function() {
			$('button').removeClass('navi-selected');
			$(this).addClass('navi-selected');
			$('#navi-header-div').text('리뷰');
			$('#info-cont-div').text(corporate.notice);
		});
		
		
		if (corporate.mapLocation != null) {
			if (corporate.mapLocation.length != 0) {
				initMarker(corporate.mapLocation);
			}
		}
/*
	
	$('#infoEditor').summernote('code', corporate.additionalInfo)
	if (corporate.mapLocation != null) {
		if (corporate.mapLocation.length != 0) {
			initMarker(corporate.mapLocation);
		}
	}

	$('#corporateRegistrationNumber').val(corporate.corporateRegistrationNumber);
	$('#corporateConfirm').val(corporate.corporateConfirm);
	$('#corporateType').val(corporate.corporateType);
	$('#detail').val(corporate.detail);
	$('#notice').val(corporate.notice);
	
	var list = corporate.telList
	for (var i = 0; i < list.length; i++) {
		//console.log(list[i].corporateTel);
		if (i == 0) {
			$('input[name=corporateTel]').val(list[i].corporateTel)
		} else {
			$("<div>")
			.html("<input class='form-control short' name='corporateTel' placeholder='업체 전화번호를 입력해 주세요'" +
					"value='"+list[i].corporateTel+"' style='margin-left:123px;'>")
			.appendTo("#tel-group")
		}
	}
*/

});


/*
$("#add-telform").click(function() {
	
	if($("#tel-group").children().length > 4) {
		swal('주의','전화번호는 5개까지만 추가 가능합니다.','warning');
		return;
	}
	$("<div>")
		.html("<input class='form-control short' name='corporateTel' placeholder='업체 전화번호를 입력해 주세요' style='margin-left:123px;'>")
		.appendTo("#tel-group");
});

$("#submit-btn").click(function() {
	var param = {
			memberNo        : loginMember.memberNo,
			corporateName   : $("#corporate-name").val(),
			postNumber      : $("#corporate-postcode").val(),
			baseAddress     : $("#corporate-address-base").val(),
			detailAddress   : $("#corporate-address-detail").val(),
			telList         : arrayToJson($("input[name=corporateTel]")),
			additionalInfo  : separateImg($('#infoEditor').summernote('code')),
			mapLocation     : marker.getPosition().toString(),
			
			corporateRegistrationNumber : $('#corporateRegistrationNumber').val(),
			corporateConfirm            : $('#corporateConfirm').val(),
			corporateType               : $('#corporateType').val(),
			detail                      : $('#detail').val(),
			notice                      : $('#notice').val()
	}
	$.post('update.json', param, function(ajaxResult) {
		if (ajaxResult.status != "success") {
			alert(ajaxResult.data);
			return;
		}
		swal('등록 성공',ajaxResult.data,'success');
	}, 'json');
});

$('#header_sub_a_home').click(function(event) {
	event.preventDefault()
	//location.href='.html';
});

$('#header_sub_a_mgrpage').click(function(event) {
	event.preventDefault()
	location.href='basicinfo.html';
});

$('#header_sub_a_mgrbaseinfo').click(function(event) {
	event.preventDefault()
	location.href='basicinfo.html';
});

CKEDITOR.replace( 'infoEditor', {
	width: "600px",
	height: "350px",
	resize_enabled: false,
	filebrowserUploadUrl: '../ckeditor/upload.php',
	
	toolbar : [
			[ 'Source', '-' ],
			[ 'Cut', 'Copy', 'Paste', 'PasteText', '-', 'Undo', 'Redo' ],
			[ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript'],
			[ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ],
			'/',
			[ 'Styles', 'Format', 'Font', 'FontSize' ],
			[ 'TextColor', 'BGColor' ],
			[ 'Image', 'Table' , 'SpecialChar' , 'Link']
			//, 'Unlink'
		]

});

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
	callbacks : {
      onImageUpload: function(image) {
        uploadImage(image[0]);
      }
    }
});
*/
