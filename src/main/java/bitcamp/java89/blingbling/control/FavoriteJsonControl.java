package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Favorite;
import bitcamp.java89.blingbling.service.FavoriteService;

@RestController
public class FavoriteJsonControl{
  @Autowired ServletContext sc;
  
  @Autowired FavoriteService favoriteService;

  @RequestMapping("/favorite/list")
  public AjaxResult list(int memberNo) throws Exception {
		List<Favorite> list = favoriteService.getList(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }
  
  @RequestMapping("/favorite/add")
  public AjaxResult add(Favorite favorite) throws Exception {
  	favoriteService.add(favorite);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("/favorite/delete")
  public AjaxResult delete(Favorite favorite) throws Exception {
    int count = favoriteService.delete(favorite);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "해당 즐겨찾기가 없습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
 
}





