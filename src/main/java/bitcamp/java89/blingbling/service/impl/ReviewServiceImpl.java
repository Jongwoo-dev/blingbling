package bitcamp.java89.blingbling.service.impl;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.ReviewDao;
import bitcamp.java89.blingbling.domain.Review;
import bitcamp.java89.blingbling.service.ReviewService;

@Service
public class ReviewServiceImpl implements ReviewService {
  @Autowired ReviewDao reviewDao;

  @Override
  public Review getOne(int memberNo, int corporateNo) throws Exception {
    HashMap<String,Object> paramMap = new HashMap<>();
    paramMap.put("memberNo", memberNo);
    paramMap.put("corporateNo", corporateNo);
    
    return reviewDao.getOne(paramMap);
  }

  @Override
  public int update(Review favorite) throws Exception {
    reviewDao.delete(favorite);
    return reviewDao.insert(favorite);
  }
}
















