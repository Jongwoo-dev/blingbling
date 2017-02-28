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

  public List<ServiceCenter> getListByPrefix(String prefix) throws Exception {
    return serviceCenterDao.getListByPrefix(prefix);
  }
    
  public List<ServiceCenter> getListByMember(int memberNo) throws Exception {
    return serviceCenterDao.getListByMember(memberNo);
  }

  public List<ServiceCenter> getListBySearch(String word) throws Exception {
    return serviceCenterDao.getListBySearch(word);
  }
  
  public ServiceCenter getDetail(int no) throws Exception {
    return serviceCenterDao.getOne(no);
  }
   
  public int add(ServiceCenter serviceCenter) throws Exception {
    return serviceCenterDao.insert(serviceCenter);
  }
  
  public int delete(int no) throws Exception {
    if (serviceCenterDao.countByNo(no) == 0) {
      throw new Exception("삭제할 글을 찾지 못했습니다.");
    }
    
    return serviceCenterDao.delete(no);
  }
  
  public int update(ServiceCenter serviceCenter) throws Exception {
    if (serviceCenterDao.countByNo(serviceCenter.getServiceCenterNo()) == 0) {
      throw new Exception("글을 찾지 못했습니다.");
    }
    return serviceCenterDao.update(serviceCenter);
  }
}
















