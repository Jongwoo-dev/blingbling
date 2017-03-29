package bitcamp.java89.blingbling.control;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Corporate;
import bitcamp.java89.blingbling.service.CorporateService;

@RestController
public class CorporateJsonControl {
  @Autowired ServletContext sc;
  
  @Autowired CorporateService corporateService;

  @RequestMapping("/corporate/myFavoriteList")
  public AjaxResult getListByMemberNo(int memberNo) throws Exception {
      List<Corporate> list = corporateService.getListByMemberNo(memberNo);
      if (list.isEmpty()) {
        return new AjaxResult(AjaxResult.FAIL, "즐찾 없음");
      }
      return new AjaxResult(AjaxResult.SUCCESS,list);
  }
  
  @RequestMapping("/corporate/conversionlist")
  public AjaxResult conversionList() throws Exception {
    List<Corporate> conversionList = corporateService.getConversionList();
    return new AjaxResult(AjaxResult.SUCCESS, conversionList);
  }
  
  @RequestMapping("/corporate/list")
  public AjaxResult list() throws Exception {
    List<Corporate> list = corporateService.getList();
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("/corporate/detail")
  public AjaxResult detail(int memberNo) throws Exception {
    Corporate corporate = corporateService.getDetail(memberNo);
    
    if (corporate == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, corporate);
  }
  
  @RequestMapping("/corporate/add")
  public AjaxResult add(Corporate corporate) throws Exception {
    
    /*List<Photo> list = corporate.getPhotoList();
    for (int i = 0; i < list.size(); i++) {
      System.out.println(i+"번째 파일이름 : "+list.get(i).getFilePath());
    }*/
    
    corporateService.add(corporate);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/corporate/delete")
  public AjaxResult delete(int memberNo) throws Exception {
    int count = corporateService.delete(memberNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/corporate/update")
  public AjaxResult update(Corporate corporate) throws Exception {
    /*List<CorpTel> list = corporate.getTelList();
    for (int i = 0; i < list.size(); i++) {
      //*전화 목록 넘어오는지 테스트
      System.out.println(list.get(i).getCorporateTel());
    }*/
    int count = corporateService.update(corporate);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/corporate/updateDetail")
  public AjaxResult updateDetail(Corporate corporate) throws Exception {
    int count = corporateService.updateDetail(corporate);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/corporate/updateNotice")
  public AjaxResult updateNotice(Corporate corporate) throws Exception {
    int count = corporateService.updateNotice(corporate);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/corporate/updatePriceTime")
  public AjaxResult updatePriceTime(Corporate corporate) throws Exception {
    int count = corporateService.updatePriceTime(corporate);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
  
  @RequestMapping("/corporate/updateCorporateConfirm")
  public AjaxResult updateCorporateConfirm(int memberNo) throws Exception {
    
    int count = corporateService.updateCorporateConfirm(memberNo);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 회원이 없습니다.");
    }
    
    
    return new AjaxResult(AjaxResult.SUCCESS, "승인 성공입니다.");
  }
  
  @RequestMapping("/corporate/searchBybaseAddress")
  public AjaxResult searchBybaseAddressList(String baseAddress) throws Exception {
    String[] tempStr = baseAddress.split(" ");
    HashMap<String, Object> map = new HashMap<>();
    ArrayList<String> list = new ArrayList<>();
    
    for (int i = 1; i < tempStr.length; i++) {
    	list.add(tempStr[i]);
    }
    
    
    map.put("addr1", tempStr[0]);
    map.put("addr2", list);
    
    
  	List<Corporate> searchBybaseAddressList = corporateService.searchBybaseAddress(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, searchBybaseAddressList);
  }
  
  @RequestMapping("/corporate/searchBysearchbar")
  public AjaxResult searchBysearchbarList(String searchbar) throws Exception {
    String[] tempStr = searchbar.split(" ");
    HashMap<String, Object> map = new HashMap<>();
    ArrayList<String> listsearch = new ArrayList<>();
    
    for (int i = 0; i < tempStr.length; i++) {
    	listsearch.add(tempStr[i]);
    }
    
    
    map.put("searchbar", listsearch);
    
    
  	List<Corporate> searchBysearchbarList = corporateService.searchBysearchbar(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, searchBysearchbarList);
  }
  
  @RequestMapping("/corporate/searchBysearchheader")
  public AjaxResult searchByheaderList(String searchheader) throws Exception {
    String[] tempStr = searchheader.split(" ");
    HashMap<String, Object> map = new HashMap<>();
    ArrayList<String> list = new ArrayList<>();
    
    for (int i = 1; i < tempStr.length; i++) {
    	list.add(tempStr[i]);
    }
    
    
    map.put("address1", tempStr[0]);
    map.put("address2", list);
    
    
  	List<Corporate> searchByheaderList = corporateService.searchBysearchheader(map);
    
    return new AjaxResult(AjaxResult.SUCCESS, searchByheaderList);
  }
 
  
}





