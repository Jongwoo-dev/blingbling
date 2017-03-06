package bitcamp.java89.blingbling.control;

import java.util.List;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Mypagepl;
import bitcamp.java89.blingbling.service.MypageplService;

@RestController
public class MypagepljsonControl{
  @Autowired ServletContext sc;
  
  @Autowired MypageplService mypageplService;

  @RequestMapping("/mypagepl/listByMember")
  public AjaxResult getListBymember(int memberNo) throws Exception {
		List<Mypagepl> list = mypageplService.getListBymember(memberNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

 
}





