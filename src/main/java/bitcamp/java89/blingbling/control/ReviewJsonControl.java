package bitcamp.java89.blingbling.control;

import javax.servlet.ServletContext;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Review;
import bitcamp.java89.blingbling.service.ReviewService;

@RestController
@RequestMapping("/review/")
public class ReviewJsonControl{
  @Autowired ServletContext sc;
  
  @Autowired ReviewService reviewService;

  @RequestMapping("detail")
  public AjaxResult list(int memberNo, int corporateNo) throws Exception {
    Review review = reviewService.getOne(memberNo, corporateNo);
    
    if (review == null) {
      review = new Review();
      review.setFacilityScore(0);
      review.setServiceScore(0);
      review.setCleanScore(0);
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, review);
  }
  
  
  @RequestMapping("update")
  public AjaxResult add(Review review) throws Exception {
    int count = reviewService.update(review);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "평점 등록에 실패하였습니다");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "평점 등록 성공입니다.");
  }
}





