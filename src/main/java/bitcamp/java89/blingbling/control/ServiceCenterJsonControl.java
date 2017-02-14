package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.domain.ServiceCenter;
import bitcamp.java89.blingbling.service.ServiceCenterService;

@RestController
public class ServiceCenterJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired ServiceCenterService serviceCenterService;

  @RequestMapping("/serviceCenter/list")
  public AjaxResult list(String category) throws Exception {
    List<ServiceCenter> list = serviceCenterService.getList(category);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/serviceCenter/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    ServiceCenter serviceCenter = serviceCenterService.getDetail(memberNo);
    
    if (serviceCenter == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, serviceCenter);
  }
  /*
  @RequestMapping("/serviceCenter/add")
  public AjaxResult add(Member member) throws Exception {
    
    memberService.add(member);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/serviceCenter/delete")
  public AjaxResult delete(int memberNo) throws Exception {
    int count = memberService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/serviceCenter/update")
  public AjaxResult update(Member member) throws Exception {
    
    int count = memberService.update(member);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }*/
}





