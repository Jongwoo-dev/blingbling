package bitcamp.java89.blingbling.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.CorporateDao;
import bitcamp.java89.blingbling.dao.MemberDao;
import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  @Autowired CorporateDao corporateDao;
  
  public Member getMemberInfo(String email) throws Exception {
    
    Member member = memberDao.getOneByEmail(email);
    
    if (member.isAdministrator()) {
      member.setType(Member.ADMIN); 
    } else {
      if (corporateDao.countByNo(member.getMemberNo()) > 0) {
        member.setType(Member.CEO);
      } else {
        member.setType(Member.USER);
      }
    }
    return member;
  }
  
  public boolean checkMember(String email) throws Exception {
    if (memberDao.count(email) == 0) {
      return false;
    }
    return true;
  }
  
}
