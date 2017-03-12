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
    return commentDao.insert(comment);
  }

  @Override
  public int delete(int commentNo) throws Exception {
    /*if (commentDao.countByNo(commentNo) == 0) {
      throw new Exception("이미 삭제된 코멘트 입니다.");
    }*/
    // 삭제 명령 하면 지우지 말고 지웠다는 표시만 남기게.\
    // 컬럼 하나 추가해야함.
    // 삭제여부 컬럼 확인하는 메서드도 만들어야 함.
    // 아래 업데이트도 동일
    return 0;
  }

  @Override
  public int update(Comment comment) throws Exception {
    // TODO Auto-generated method stub
    return 0;
  }
}
















