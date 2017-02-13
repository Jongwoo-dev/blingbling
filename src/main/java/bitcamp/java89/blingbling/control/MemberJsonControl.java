package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.service.MemberService;

@RestController
public class MemberJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired MemberService memberService;

  @RequestMapping("/member/list")
  public AjaxResult list() throws Exception {
    List<Member> list = memberService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/member/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Member member = memberService.getDetail(memberNo);
    
    if (member == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, member);
  }
  
  @RequestMapping("/member/add")
  public AjaxResult add(Member member) throws Exception {
    
    memberService.add(member);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/member/delete")
  public AjaxResult delete(int memberNo) throws Exception {
    int count = memberService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/member/update")
  public AjaxResult update(Member member) throws Exception {
    
    int count = memberService.update(member);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}





