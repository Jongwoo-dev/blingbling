package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Member;

public interface MemberDao {
  ArrayList<Member> getList() throws Exception;
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int insert(Member member) throws Exception;
  Member getOne(int memberNo) throws Exception;
  Member getOneByEmail(String email) throws Exception;
  int update(Member member) throws Exception;
  int delete(int itemNo) throws Exception;
}
