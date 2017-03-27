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

function registerFacebookBtn(btnSelector) {
	$(btnSelector).click(function(event) {
		event.preventDefault();
		FB.getLoginStatus(function(response) {
			if (response.status == 'connected') {	// 로그인 중이면
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

