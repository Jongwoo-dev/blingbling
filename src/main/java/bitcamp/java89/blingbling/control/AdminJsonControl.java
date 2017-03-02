package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Admin;
import bitcamp.java89.blingbling.service.AdminService;

@RestController
public class AdminJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired AdminService adminService;

  @RequestMapping("/admin/list")
  public AjaxResult list(String category) throws Exception {
    List<Admin> list = adminService.getList(category);
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
  
 
  @RequestMapping("/admin/detail")
  public AjaxResult detail(int serviceCenterNo) throws Exception {
    Admin admin = adminService.getDetail(serviceCenterNo);
    
    if (admin == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }

    admin.setPostedDate((admin.getPostedDate().split(" ")[0]));
  
    return new AjaxResult(AjaxResult.SUCCESS, admin);
  }
 
  @RequestMapping("/admin/add")
  public AjaxResult add(Admin admin) throws Exception {
    
    adminService.add(admin);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/admin/delete")
  public AjaxResult delete(int serviceCenterNo) throws Exception {
    int count = adminService.delete(serviceCenterNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "이미 삭제 되었습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  
 @RequestMapping("/admin/update")
  public AjaxResult update(Admin admin) throws Exception {
    
    int count = adminService.update(admin);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
 
 @RequestMapping("/admin/answer")
 public AjaxResult answer(Admin admin) throws Exception {
   
   int count = adminService.answer(admin);
   
   if (count == 0) {
     return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
   }
   
   return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
 }
}





