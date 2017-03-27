package bitcamp.java89.blingbling.control;

import java.util.HashMap;
import java.util.List;

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

  @RequestMapping("average")
  public AjaxResult average(int corporateNo) throws Exception {
    List<Review> list = reviewService.getList(corporateNo);
    
    HashMap<String, Object> average = new HashMap<>();
    
    double score = 0;
    if (list.size() == 0) {
      return new AjaxResult(AjaxResult.FAIL, "평가가 없습니다.");
    }
    for (Review item : list) {
      score += item.getFacilityScore();
      score += item.getServiceScore();
      score += item.getCleanScore();
    }
    score = score / (3*list.size());
    
    average.put("length", list.size());
    average.put("average", score);
    
    return new AjaxResult(AjaxResult.SUCCESS, average);
  }
  
  @RequestMapping("detail")
  public AjaxResult detail(int memberNo, int corporateNo) throws Exception {
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
    if (review.getFacilityScore() == 0 || review.getServiceScore() == 0 || review.getCleanScore() == 0) {
      return new AjaxResult(AjaxResult.SUCCESS, "평점이 완전히 입력되지 않았습니다.");
    }
    int count = reviewService.update(review);
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "평점 등록에 실패하였습니다");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "평점 등록 성공입니다.");
  }
}





