package bitcamp.java89.blingbling.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.PrepurchaseDao;
import bitcamp.java89.blingbling.domain.Prepurchase;
import bitcamp.java89.blingbling.service.PrepurchaseService;

@Service
public class PrepurchaseServiceImpl implements PrepurchaseService {
  @Autowired PrepurchaseDao prepurchaseDao;

  @Override
  public List<Prepurchase> getBookingList(int memberNo) throws Exception {
    return prepurchaseDao.getBookingList(memberNo);
  }

  @Override
  public List<Prepurchase> getMemberBookingList(int memberNo) throws Exception {
    return prepurchaseDao.getMemberBookingList(memberNo);
  }
  
  @Override
  public List<Prepurchase> getCalenderTime(String startTime,String endTime,int memberNo) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("startTime", startTime);
    paramMap.put("endTime", endTime);
    paramMap.put("memberNo", memberNo);
    
    return prepurchaseDao.getCalenderTime(paramMap);
  }
  
  @Override
  public List<Prepurchase> getList() throws Exception {
    return prepurchaseDao.getList();
  }


  @Override
  public Prepurchase getDetail(int prepurchaseNumber) throws Exception {
    return prepurchaseDao.getOne(prepurchaseNumber);
  }

  @Override
  public int add(Prepurchase prepurchase) throws Exception {
    return prepurchaseDao.insert(prepurchase);
  }

  @Override
  public int delete(int prepurchaseNumber) throws Exception {
    return prepurchaseDao.delete(prepurchaseNumber);
  }

  @Override
  public int update(Prepurchase prepurchase) throws Exception {
    return prepurchaseDao.update(prepurchase);
  }

	
}
















