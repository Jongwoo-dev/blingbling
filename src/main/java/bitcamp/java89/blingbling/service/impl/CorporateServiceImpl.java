package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.CorporateDao;
import bitcamp.java89.blingbling.domain.Corporate;
import bitcamp.java89.blingbling.service.CorporateService;

@Service
public class CorporateServiceImpl implements CorporateService {
  @Autowired CorporateDao corporateDao;

  @Override
  public List<Corporate> getList() throws Exception {
    return corporateDao.getList();
  }

  @Override
  public List<Corporate> searchByCorporateName(String corporateName) throws Exception {
    return corporateDao.getListByCorporateName(corporateName);
  }

  @Override
  public Corporate getDetail(int no) throws Exception {
    return corporateDao.getOneWithTel(no);
  }

  @Override
  public Corporate getDetail(String email) throws Exception {
    return corporateDao.getOneByEmail(email);
  }

  @Override
  public int add(Corporate corporate) throws Exception {
    return corporateDao.insert(corporate);
  }

  @Override
  public int delete(int no) throws Exception {
    return corporateDao.delete(no);
  }

  @Override
  public int update(Corporate corporate) throws Exception {
    int count = corporateDao.update(corporate);
    corporateDao.deleteTel(corporate.getMemberNo());
    
    if (corporate.getTelList().size() > 0) {
      corporateDao.insertTel(corporate);
    }
    return count;
  }
}
















