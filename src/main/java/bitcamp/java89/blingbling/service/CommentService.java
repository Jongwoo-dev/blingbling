package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Comment;

public interface CommentService {
  List<Comment> getList(int corporateNo) throws Exception;
  Comment getDetail(int commentNo) throws Exception;
  int add(Comment comment) throws Exception;
  int delete(int commentNo) throws Exception;
  int update(Comment comment) throws Exception;
}


