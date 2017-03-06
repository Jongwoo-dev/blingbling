package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.MypageplDao;
import bitcamp.java89.blingbling.domain.Mypagepl;
import bitcamp.java89.blingbling.service.MypageplService;

@Service
public class MypageplServiceImpl implements MypageplService {
  @Autowired MypageplDao mypageplDao;

  @Override
  public List<Mypagepl> getListBymember(int memberNo) throws Exception {
    return mypageplDao.getListBymember(memberNo);
  }
 
 
}
















