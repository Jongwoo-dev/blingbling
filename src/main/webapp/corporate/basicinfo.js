var map;
var marker;
var infowindow;

function initMap() {
  var currentLatLng;
  map = new google.maps.Map(document.getElementById('CorporaterMap'), {
    center: {lat: 37.5666805, lng: 126.9784147},
    zoom: 17
  });
  marker = new google.maps.Marker({
    position: {lat: 37.5666805, lng: 126.9784147},
    map: map,
    draggable:true,
    title:"업체의 위치로 드래그 해 주세요"
  });
  infowindow = new google.maps.InfoWindow({
    content: ''
  });
  google.maps.event.addListener(map, 'click', function(mouseEvent) {
	  moveMarker(mouseEvent.latLng);
  });
  
  marker.addListener('mouseup', function(mouseEvent) {
	  moveMarker(mouseEvent.latLng);
  });
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


$('#address-search-btn').click(function() { 
  new daum.Postcode({
    oncomplete: function(data) {
      var fullAddr = ''; // 최종 주소 변수
      var extraAddr = ''; // 조합형 주소 변수
      
      // 사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
      if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
        fullAddr = data.roadAddress;

      } else { // 사용자가 지번 주소를 선택했을 경우(J)
        fullAddr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 조합한다.
      if(data.userSelectedType === 'R'){
        //법정동명이 있을 경우 추가한다.
        if(data.bname !== ''){
          extraAddr += data.bname;
        }
        // 건물명이 있을 경우 추가한다.
        if(data.buildingName !== ''){
          extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
        }
        // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
        fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
      }
      
      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      document.getElementById('corporate-postcode').value = data.zonecode; //5자리 새우편번호 사용
      document.getElementById('corporate-address1').value = fullAddr;

      // 커서를 상세주소 필드로 이동한다.
      //document.getElementById('corporate-address2').focus();
      
      // 검색 결과 나온 주소값으로 지도 포커스 변경
      $.get('https://maps.googleapis.com/maps/api/geocode/json?address='+fullAddr+'&key=AIzaSyDKE_snzHBVyEaw45535A_u58SEV1iKQBA', function(result){
        map.panTo(result.results['0'].geometry.location);
        marker.setPosition(result.results['0'].geometry.location);
        
        if(data.buildingName !== ''){
          infowindow.setContent(data.buildingName);
        } else {
          infowindow.setContent(data.address);
        }
        infowindow.open(map, marker);
      });
      
      
    }
  }).open();
});

CKEDITOR.replace( 'infoEditor', {
	width: "570px",
	resize_enabled: false,
	filebrowserUploadUrl: '../upload',
});


