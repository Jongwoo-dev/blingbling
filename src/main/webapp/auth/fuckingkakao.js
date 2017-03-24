Kakao.init('aeb1a37bb88bcebd4739d8cd29974225');

/*Kakao.Auth.createLoginButton({
    container: '#kakao-login-btn',
    success: function(authObj) {
      alert(JSON.stringify(authObj));
    },
    fail: function(err) {
       alert(JSON.stringify(err));
    }
  });*/

function kakaoLogin() {
    Kakao.Auth.login({
      success: function(authObj) {
          Kakao.API.request({
              url: '/v1/user/me',
              success: function(res) {
            	  console.log(res);
            	  console.log(res.kaccount_email);
            	  console.log(res.properties.nickname);
            	  console.log(statusObj);
//                 processLogin(res.email, res.name);
                  /*$.getJSON(serverRoot + '/auth/loginsns.json', {type: "kakao", snsId: res.id}, function (ajaxResult) {
                      if (ajaxResult.status == "success") {
                          location.href = clientRoot + "/main/main.html";
                      } else {
                          window.sessionStorage.setItem('kakao-id', res.id);
                          window.sessionStorage.setItem('kakao-name', res.properties.nickname);
                          window.sessionStorage.setItem('email', res.kaccount_email);
                          location.href = clientRoot + "/auth/joinEmail.html";                      }
                  })*/
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

/*

$(function() {
    setTimeout(function() { $('#email').focus() }, 200);
    
    $('#login-btn').click(function(event) {
        login();
    });

    $('#password').keypress(function(event){
        if(event.keyCode == 13){
            login();
        }
    });

    $('#email').val(getCookie('email').replace(/"/g, ''));
    
    setInterval(function() {
        if (window.innerHeight <= 759) {
            $('.container').css('margin-top', '0');
        } else {
           $('.container').css('margin-top', (window.innerHeight-759)/2 + 'px');
        }
        
        if ($('.container').css('display') != 'block') {
            $('.container').css('display', 'block');
        }
    }, 100);

    function login() {
        if ($('#save-email').is(':checked')) {
            setCookie('email', $('#email').val(), 30);
        } else {
            setCookie('email', '', 0);
        }
        
        var param = {
            email: $('#email').val(),
            password: $('#password').val()
        };
        
        $.post('login.json', param, function(ajaxResult) {
            if (ajaxResult.status == "success") {
                location.href = clientRoot + "/main/main.html";
                return;
            }
            alert(ajaxResult.data);
        }, 'json');
    }
})*/