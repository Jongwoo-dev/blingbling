package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Prepurchase;
import bitcamp.java89.blingbling.service.PrepurchaseService;

@RestController
public class PrepurchasejsonControl {
  @Autowired ServletContext sc;
  
  @Autowired PrepurchaseService prepurchaseService;

  @RequestMapping("/prepurchase/bookinglist")
  public AjaxResult bookinglist(int memberNo) throws Exception {
    List<Prepurchase> list = prepurchaseService.getBookingList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("/prepurchase/memberbookinglist")
  public AjaxResult memberbookinglist(int memberNo) throws Exception {
    List<Prepurchase> list = prepurchaseService.getMemberBookingList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/prepurchase/calendertime")
  public AjaxResult CalenderTime(String startTime,String endTime,int memberNo) throws Exception {
    List<Prepurchase> calenderTime = prepurchaseService.getCalenderTime(startTime,endTime,memberNo);
    
    if (calenderTime.isEmpty()) {
      return new AjaxResult(AjaxResult.FAIL, "해당 날짜에 기록이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, calenderTime);
  }
  
  @RequestMapping("/prepurchase/list")
  public AjaxResult list() throws Exception {
		List<Prepurchase> list = prepurchaseService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("/prepurchase/detail")
  public AjaxResult detail(int prepurchaseNumber) throws Exception {
  	Prepurchase prepurchase = prepurchaseService.getDetail(prepurchaseNumber);
    
    if (prepurchase == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, prepurchase);
  }
  
  @RequestMapping("/prepurchase/add")
  public AjaxResult add(Prepurchase prepurchase) throws Exception {
    
		prepurchaseService.add(prepurchase);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/prepurchase/delete")
  public AjaxResult delete(int prepurchaseNumber) throws Exception {
    int count = prepurchaseService.delete(prepurchaseNumber);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 예약이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/prepurchase/update")
  public AjaxResult update(Prepurchase prepurchase) throws Exception {
    
    int count = prepurchaseService.update(prepurchase);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 예약이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}





