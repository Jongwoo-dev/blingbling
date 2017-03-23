window.fbAsyncInit = function() {
    FB.init({
      appId      : '1927486694147122',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.8&appId=1927486694147122";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/*
$('#fblogin').click(function() {
	FB.getLoginStatus(function(response) {
		if (response.status === 'connected') {
		  //console.log('로그인 상태 : ', response);
		  var a = FB.getAuthResponse(function(response) {
			  //console.log(response);
			}, true);
		  console.log('a : ', a);
		  FB.api('/me',{
			  fields : 'name, email, gender, birthday'
		  }, function(response) {
			  console.log('유저 : ',response);
		  });
		}
		else {
		  FB.login(function(result) {
			  console.log('로그인 : ', result);
			  console.log('로그인auth : ', result.authResponse);
			  var a = FB.getAuthResponse(function(response) {
			      }, true);
			      console.log('a : ', a);
			      FB.api('/me',{
			    	  fields:'name, email, gender, birthday'
			      }, function(response) {
			        console.log('유저 : ',response);
			      });
		  },{
		        scope: 'public_profile,email,user_birthday', 
		        return_scopes: true
		      });
		}
	});	
});

$('#fblogout').click(function() {
	FB.getLoginStatus(function(response) {
		var b = FB.getAuthResponse(function(response) {
	        //console.log(response);
	    }, true);
		console.log('b : ', b);
	  FB.logout(function() {
		  
	  });
		
	});
})

$('#fbrerequest').click(function() {
	FB.login(
			  function(response) {
			    console.log(response);
			  },
			  {
			    scope: 'email',
			    auth_type: 'rerequest'
			  }
			);
})

$('#fbprofile').click(function() {
	
	FB.api('/me', function(user) {

		var myName = user.name;
		var myEmail = user.email;
		var myId = user.id;
	  console.log('유저 : ',user);
	  console.log('이메일 : ',myEmail);
	});
	FB.api('/me/picture?type=large', function(data) {
		var myImg = data.data.url;
	});
})
*/

function registerFacebookBtn(btnSelector) {
	$(btnSelector).click(function(event) {
		event.preventDefault();
		FB.getLoginStatus(function(response) {
			if (response.status === 'connected') {	// 로그인 중이면
				FB.getAuthResponse(function(response) {
				}, true);
				FB.api('/me',{
					fields : 'name, email'
				}, function(response) {
					processLogin(response.email, response.name);
				});
			}
			else {	// 로그인중이 아니면
				FB.login(function(result) {
					FB.getAuthResponse(function(response) {
					}, true);
					FB.api('/me',{
						fields:'name, email'
					}, function(response) {
						processLogin(response.email, response.name);
					});
				},{
					scope: 'public_profile,email', 
					return_scopes: true
				});
			}
		});	

	})
}

