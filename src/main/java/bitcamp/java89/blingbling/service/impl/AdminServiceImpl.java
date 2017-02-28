package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.AdminDao;
import bitcamp.java89.blingbling.domain.Admin;
import bitcamp.java89.blingbling.service.AdminService;

@Service
public class AdminServiceImpl implements AdminService {
  @Autowired AdminDao adminDao;
  
  public List<Admin> getList(String category) throws Exception {
    return adminDao.getList(category);
  }
 
  public Admin getDetail(int no) throws Exception {
    return adminDao.getOne(no);
  }
   
  public int add(Admin admin) throws Exception {
    return adminDao.insert(admin);
  }
  
  public int delete(int no) throws Exception {
    if (adminDao.countByNo(no) == 0) {
      throw new Exception("삭제할 글을 찾지 못했습니다.");
    }
    
    return adminDao.delete(no);
  }
  
  public int update(Admin admin) throws Exception {
    if (adminDao.countByNo(admin.getServiceCenterNo()) == 0) {
      throw new Exception("글을 찾지 못했습니다.");
    }
    return adminDao.update(admin);
  }
  public int answer(Admin admin) throws Exception {
    if (adminDao.countByNo(admin.getServiceCenterNo()) == 0) {
      throw new Exception("글을 찾지 못했습니다.");
    }
    return adminDao.answer(admin);
  }
}
















