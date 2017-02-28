package bitcamp.java89.blingbling.service.impl;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.StampDao;
import bitcamp.java89.blingbling.domain.Stamp;
import bitcamp.java89.blingbling.domain.Stamplog;
import bitcamp.java89.blingbling.service.StampService;

@Service
public class StampServiceImpl implements StampService {
  @Autowired StampDao stampDao;

  @Override
  public List<Stamp> getList() throws Exception {
    return stampDao.getList();
  }
  @Override
  public List<Stamplog> getListStamplog(int memberNo,int memberStoreNo) throws Exception {
   	HashMap<String,Integer> paramMap = new HashMap<>();
  	paramMap.put("memberNo", memberNo);
  	paramMap.put("memberStoreNo", memberStoreNo);
  	
    return stampDao.getListStamplog(paramMap);
  }


  @Override
  public Stamp getDetail(int memberNo,int memberStoreNo) throws Exception {
  	HashMap<String,Integer> paramMap = new HashMap<>();
  	paramMap.put("memberNo", memberNo);
  	paramMap.put("memberStoreNo", memberStoreNo);
  	
    return stampDao.getOne(paramMap);
  }

  @Override
  public int add(Stamp stamp, int stampChangeNo) throws Exception {
  	int count = stampDao.insert(stamp);
  	stampDao.insertStamplog(new Stamplog(stamp, stampChangeNo));
  	return count;
  }

  @Override
  public int delete(int memberNo,int memberStoreNo, int stampChangeNo) throws Exception {
  	HashMap<String,Integer> paramMap = new HashMap<>();
  	paramMap.put("memberNo", memberNo);
  	paramMap.put("memberStoreNo", memberStoreNo);
  	int count = stampDao.delete(paramMap);
  	stampDao.insertStamplog(new Stamplog(memberNo, memberStoreNo, stampChangeNo));
    return count;
  }

  @Override
  public int update(Stamp stamp, int stampChangeNo) throws Exception {
  	int count = stampDao.insert(stamp);
  	stampDao.insertStamplog(new Stamplog(stamp, stampChangeNo));
    return count;
  }

	
}
















