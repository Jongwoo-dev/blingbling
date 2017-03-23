package bitcamp.java89.blingbling.control;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.service.AuthService;

@RestController
public class AuthJsonControl {
  
  @Autowired AuthService authService;
  
  @RequestMapping("/auth/login")
  public AjaxResult login(String email, HttpSession session) throws Exception {
    
    Member member = authService.getMemberInfo(email);
        
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "이메일 또는 암호가 틀리거나, 가입된 회원이 아닙니다.");
    }
    
    session.setAttribute("member", member); // HttpSession에 저장한다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그인 성공!");
  }
  
  @RequestMapping("/auth/logout")
  public AjaxResult logout(HttpSession session) throws Exception {
    session.invalidate(); // 기존 세션을 무효화시킨다.
    return new AjaxResult(AjaxResult.SUCCESS, "로그아웃 성공입니다.");
  }
  
  @RequestMapping("/auth/loginUser")
  public AjaxResult loginUser(HttpSession session) throws Exception {
    Member member = (Member)session.getAttribute("member");

    if (member == null) { // 로그인이 되지 않은 상태
      return new AjaxResult(AjaxResult.FAIL, "로그인을 하지 않았습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, member);
  }
  
  @RequestMapping("/auth/checkUser")
  public AjaxResult checkUser(String email) throws Exception {
    if (!authService.checkMember(email)) { // 해당 이메일 유저가 없으면
      return new AjaxResult(AjaxResult.FAIL, "해당 이메일의 유저가 존재하지 않습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "해당 이메일의 유저가 존재합니다.");
  }
  
}








