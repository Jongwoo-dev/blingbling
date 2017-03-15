package bitcamp.java89.blingbling.control;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import bitcamp.java89.blingbling.domain.Comment;
import bitcamp.java89.blingbling.service.CommentService;

@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
@RequestMapping("/comment/")
public class CommentJsonControl {
  
  @Autowired CommentService commentService;

  @RequestMapping("list")
  public AjaxResult list(int corporateNo) throws Exception {
    List<Comment> list = commentService.getList(corporateNo);
    return new AjaxResult(AjaxResult.SUCCESS, list);
  }

  @RequestMapping("detail")
  public AjaxResult detail(int commentNo) throws Exception {
    Comment comment = commentService.getDetail(commentNo);
    
    if (comment == null) {
      return new AjaxResult(AjaxResult.FAIL, "해당 댓글이 없습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, comment);
  }
  
  @RequestMapping("add")
  public AjaxResult add(Comment comment) throws Exception {
    
    commentService.add(comment);

    return new AjaxResult(AjaxResult.SUCCESS, "등록 성공입니다.");
  }
  
  @RequestMapping("delete")
  public AjaxResult delete(int commentNo) throws Exception {
    int count = 0;
    
    try {
      count = commentService.delete(commentNo);
    } catch (Exception e) {
      return new AjaxResult(AjaxResult.FAIL, e.getMessage());
    }
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "댓글이 존재하지 않습니다.");
    }
    return new AjaxResult(AjaxResult.SUCCESS, "삭제 성공입니다.");
  }
  
  @RequestMapping("update")
  public AjaxResult update(Comment comment) throws Exception {
    /*List<CorpTel> list = corporate.getTelList();
    for (int i = 0; i < list.size(); i++) {
      //*전화 목록 넘어오는지 테스트
      System.out.println(list.get(i).getCorporateTel());
    }*/
    int count;
    try {
      count = commentService.update(comment);
    } catch (Exception e) {
      return new AjaxResult(AjaxResult.FAIL, e.getMessage());
    }
    
    if (count == 0) {
      return new AjaxResult(AjaxResult.FAIL, "댓글이 존재하지 않습니다.");
    }
    
    return new AjaxResult(AjaxResult.SUCCESS, "변경 성공입니다.");
  }
}