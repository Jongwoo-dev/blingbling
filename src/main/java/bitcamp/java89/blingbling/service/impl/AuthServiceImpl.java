package bitcamp.java89.blingbling.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.MemberDao;
import bitcamp.java89.blingbling.domain.Member;
import bitcamp.java89.blingbling.service.AuthService;

@Service
public class AuthServiceImpl implements AuthService {
  
  @Autowired MemberDao memberDao;
  
  public Member getMemberInfo(String email) throws Exception {
    
    Member member = memberDao.getOneByEmail(email);
    
    /*if (member == null) {
      return null;
    }*/
    
    return member;
    /*if (userType.equals(Member.STUDENT)) {
      return studentDao.getOne(member.getMemberNo());
      
    } else if (userType.equals(Member.TEACHER)) {
      return teacherDao.getOneWithPhoto(member.getMemberNo());
      
    } else if (userType.equals(Member.MANAGER)) {
      return managerDao.getOne(member.getMemberNo());
    }*/
  }
}
