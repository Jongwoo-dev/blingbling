package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.CommentDao;
import bitcamp.java89.blingbling.domain.Comment;
import bitcamp.java89.blingbling.service.CommentService;

@Service
public class CommentServiceImpl implements CommentService {
  @Autowired CommentDao commentDao;

  @Override
  public List<Comment> getList(int corporateNo) throws Exception {
    return commentDao.getList(corporateNo);
  }

  @Override
  public Comment getDetail(int commentNo) throws Exception {
    return commentDao.getOne(commentNo);
  }

  @Override
  public int add(Comment comment) throws Exception {
    int count = commentDao.insert(comment);
    
    if (comment.getLevel() == 1) {  // 부모 댓글이면 그룹번호를 생성된 pk 값으로 설정 후 업데이트
      comment.setGroup(comment.getCommentNo());
      commentDao.updateGroup(comment);
    }
    return count;
  }

  @Override
  public int delete(int commentNo) throws Exception {
    try {
      if (commentDao.getOne(commentNo).isDeleted()) {
        throw new Exception("이미 삭제된 코멘트 입니다.");
      }
    } catch (NullPointerException e) {
      throw new Exception("해당 댓글이 존재하지 않습니다."); // *이거 제대로 동작하는지 체크 필요
    }
    
    return commentDao.delete(commentNo);
  }

  @Override
  public int update(Comment comment) throws Exception {
    try {
      if (commentDao.getOne(comment.getCommentNo()).isDeleted()) {
        throw new Exception("이미 삭제된 코멘트 입니다.");
      }
    } catch (Exception e) {
      throw new Exception("해당 댓글이 존재하지 않습니다.");
    }
    
    return commentDao.update(comment);
  }
}
















