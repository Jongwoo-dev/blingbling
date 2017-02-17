package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Item;
import bitcamp.java89.blingbling.service.ItemService;

@RestController
public class ItemJsonControl {
  @Autowired ServletContext item;
  
  @Autowired ItemService itemService;

  @RequestMapping("/item/list")
  public AjaxResult list(int memberNo) throws Exception {
    List<Item> list = itemService.getList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/item/detail")
  public AjaxResult detail(int itemNo) throws Exception {
    Item item = itemService.getDetail(itemNo);
    
    if (item == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 상품이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, item);
  }
  
  @RequestMapping("/item/add")
  public AjaxResult add(Item item) throws Exception {
    
    itemService.add(item);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/item/delete")
  public AjaxResult delete(int itemNo) throws Exception {
    int count = itemService.delete(itemNo);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 상품이 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("/item/update")
  public AjaxResult update(Item item) throws Exception {
    
    int count = itemService.update(item);
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 번호의 item이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}





