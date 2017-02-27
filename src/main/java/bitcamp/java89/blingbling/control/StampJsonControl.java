package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Stamp;
import bitcamp.java89.blingbling.domain.Stamplog;
import bitcamp.java89.blingbling.service.StampService;

@RestController
public class StampJsonControl{
  @Autowired ServletContext sc;
  
  @Autowired StampService stampService;

  @RequestMapping("/stamp/list")
  public AjaxResult list() throws Exception {
		List<Stamp> list = stampService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("/stamplog/list")
  public AjaxResult listStamplog(int memberNo,int memberStoreNo) throws Exception {
		List<Stamplog> list = stampService.getListStamplog(memberNo,memberStoreNo);
		
		if (list == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 스탬프기록이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
		

  @RequestMapping("/stamp/detail")
  public AjaxResult detail(int memberNo,int memberStoreNo) throws Exception {
  	Stamp stamp = stampService.getDetail(memberNo, memberStoreNo);
    
    if (stamp == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 스탬프가 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, stamp);
  }
  
  @RequestMapping("/stamp/add")
  public AjaxResult add(Stamp stamp,int stampChangeNo) throws Exception {
    
  	stampService.add(stamp,stampChangeNo);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/stamp/delete")
  public AjaxResult delete(int memberNo,int memberStoreNo,int stampChangeNo) throws Exception {
    int count = stampService.delete(memberNo, memberStoreNo, stampChangeNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 스탬프가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/stamp/update")
  public AjaxResult update(Stamp stamp,int stampChangeNo) throws Exception {
    
    int count = stampService.update(stamp,stampChangeNo);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 스탬프가 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}





