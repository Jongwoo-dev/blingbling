	Kakao.init('aeb1a37bb88bcebd4739d8cd29974225');
	
	function kakaoLogin() {
	    Kakao.Auth.login({
	      success: function(authObj) {
	          Kakao.API.request({
	              url: '/v1/user/me',
	              success: function(res) {
	            	  console.log(res.kaccount_email, res.properties.nickname)
	                processLogin(res.kaccount_email, res.properties.nickname);
	              },
	              fail: function(error) {
	                  alert(JSON.stringify(error));
	              }
	          });
	      },
	      fail: function(err) {
	        alert(JSON.stringify(err));
	      }
	  });
	};
/*$.getScript('/blingbling/auth/kakao.js', function() {
	$.getScript('/blingbling/auth/fuckingkakao.js',function(){


	})
})
*/

/*Kakao.Auth.getStatus(function(statusObj) {
	  console.log(statusObj);
	  if (statusObj.status != "not_connected")
	  
})*/


