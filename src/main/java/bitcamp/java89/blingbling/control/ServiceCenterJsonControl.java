package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.ServiceCenter;
import bitcamp.java89.blingbling.service.ServiceCenterService;

@RestController
public class ServiceCenterJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired ServiceCenterService serviceCenterService;

  @RequestMapping("/serviceCenter/list")
  public AjaxResult list(String category) throws Exception {
    List<ServiceCenter> list = serviceCenterService.getList(category);
    for (int i = 0; i < list.size(); i++) {
      // 답변 미답변 처리
      if(list.get(i).getReply() == null) {
        list.get(i).setStatus("미답변");
      } else if(list.get(i).getReply().length() > 0) {
        list.get(i).setStatus("답변완료");
      } else {
        list.get(i).setStatus("미답변");
      }
      
      // 작성일 시간 날리는 처리
      list.get(i).setPostedDate((list.get(i).getPostedDate().split(" ")[0]));
    }
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
 
  @RequestMapping("/serviceCenter/add")
  public AjaxResult add(ServiceCenter serviceCenter) throws Exception {
    
    serviceCenterService.add(serviceCenter);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/serviceCenter/delete")
  public AjaxResult delete(int serviceCenterNo) throws Exception {
    int count = serviceCenterService.delete(serviceCenterNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "이미 삭제 되었습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  
  @RequestMapping("/serviceCenter/update")
  public AjaxResult update(ServiceCenter serviceCenter) throws Exception {
    
    int count = serviceCenterService.update(serviceCenter);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}





