package bitcamp.java89.blingbling.service.impl;

import java.util.HashMap;
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
  public List<Corporate> getListByMemberNo(int memberNo) throws Exception {
    return corporateDao.getListByMemberNo(memberNo);
  }
  
  @Override
  public List<Corporate> getConversionList() throws Exception {
    return corporateDao.getConversionList();
  }
  
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

  @Override
  public int updateDetail(Corporate corporate) throws Exception {
    return corporateDao.updateDetail(corporate);
  }

  @Override
  public int updateNotice(Corporate corporate) throws Exception {
    return corporateDao.updateNotice(corporate);
  }

  @Override
  public int updatePriceTime(Corporate corporate) throws Exception {
    return corporateDao.updatePriceTime(corporate);
  }
  @Override
  public int updateCorporateConfirm(int memberNo) throws Exception {
    return corporateDao.updateCorporateConfirm(memberNo);
  }
  @Override
  public List<Corporate> searchBybaseAddress(HashMap<String, Object> map) throws Exception {
    return corporateDao.getListBybaseAddress(map);
  }
  @Override
  public List<Corporate> searchBysearchbar(HashMap<String, Object> map) throws Exception {
    return corporateDao.getListBysearchbar(map);
  }
  @Override
  public List<Corporate> searchBysearchheader(HashMap<String, Object> map) throws Exception {
    return corporateDao.getListBysearchheader(map);
  }
 
}















