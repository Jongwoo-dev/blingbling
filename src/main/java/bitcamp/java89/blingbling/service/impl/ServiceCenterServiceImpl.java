package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.ServiceCenterDao;
import bitcamp.java89.blingbling.domain.ServiceCenter;
import bitcamp.java89.blingbling.service.ServiceCenterService;

@Service
public class ServiceCenterServiceImpl implements ServiceCenterService {
  @Autowired ServiceCenterDao serviceCenterDao;
  
  public List<ServiceCenter> getList(String category) throws Exception {
    return serviceCenterDao.getList(category);
  }
    
  public ServiceCenter getDetail(int no) throws Exception {
    return serviceCenterDao.getOne(no);
  }

  public ServiceCenter getDetail(String category) throws Exception {
    return serviceCenterDao.getOneByCategory(category);
  }
   
  public int add(ServiceCenter serviceCenter) throws Exception {
    /*if (serviceCenterDao.count(serviceCenter.getEmail()) > 0) {
      throw new Exception("같은 회원의 이메일이 존재합니다. 등록을 취소합니다.");
    }
    
    return serviceCenterDao.insert(serviceCenter);*/
    return 0;
  }
  
  public int delete(int no) throws Exception {
    if (serviceCenterDao.countByNo(no) == 0) {
      throw new Exception("회원을 찾지 못했습니다.");
    }
    
    return serviceCenterDao.delete(no);
  }
  
  public int update(ServiceCenter serviceCenter) throws Exception {
    if (serviceCenterDao.countByNo(serviceCenter.getMemberNo()) == 0) {
      throw new Exception("회원을 찾지 못했습니다.");
    }
    return serviceCenterDao.update(serviceCenter);
  }
}
















