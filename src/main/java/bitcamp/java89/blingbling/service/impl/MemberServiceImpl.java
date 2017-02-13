package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.MemberDao;
import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.service.MemberService;

@Service
public class MemberServiceImpl implements MemberService {
  @Autowired MemberDao memberDao;
  
  public List<Member> getList() throws Exception {
    return memberDao.getList();
  }
  
  public Member getDetail(int no) throws Exception {
    return memberDao.getOne(no);
  }
  
  public int add(Member member) throws Exception {
    if (memberDao.count(member.getEmail()) > 0) {
      throw new Exception("같은 회원의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    return memberDao.insert(member);
  }
  
  public int delete(int no) throws Exception {
    if (memberDao.countByNo(no) == 0) {
      throw new Exception("회원을 찾지 못했습니다.");
    }
    
    return memberDao.delete(no);
  }
  
  public int update(Member member) throws Exception {
    if (memberDao.countByNo(member.getMemberNo()) == 0) {
      throw new Exception("회원을 찾지 못했습니다.");
    }
    return memberDao.update(member);
  }
}
















