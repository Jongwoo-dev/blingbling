package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Comment;

public interface CommentDao {
  ArrayList<Comment> getList(int corporateNo) throws Exception;
  int countByNo(int commentNo) throws Exception;
  int insert(Comment comment) throws Exception;
  Comment getOne(int commentNo) throws Exception;
  int update(Comment comment) throws Exception;
  int updateGroup(Comment comment) throws Exception;
  int delete(int commentNo) throws Exception;
}
