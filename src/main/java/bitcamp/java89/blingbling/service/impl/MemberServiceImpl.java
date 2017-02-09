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
    /*
    if (studentDao.count(student.getEmail()) > 0) {
      throw new Exception("같은 학생의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    if (memberDao.count(student.getEmail()) == 0) { 
      memberDao.insert(student);
      
    } else {
      Member member = memberDao.getOne(student.getEmail());
      student.setMemberNo(member.getMemberNo());
    }
    
    return studentDao.insert(student);*/
    return 0;
  }
  
  public int delete(int no) throws Exception {
    /*if (studentDao.countByNo(no) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    
    int count = studentDao.delete(no);

    if (managerDao.countByNo(no) == 0 && teacherDao.countByNo(no) == 0) {
      memberDao.delete(no);
    }
    
    return count;*/
    return 0;
  }
  
  public int update(Member member) throws Exception {
    /*if (studentDao.countByNo(student.getMemberNo()) == 0) {
      throw new Exception("학생을 찾지 못했습니다.");
    }
    memberDao.update(student);
    return studentDao.update(student);*/
    return 0;
  }
}
















