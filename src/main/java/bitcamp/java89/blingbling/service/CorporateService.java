package bitcamp.java89.blingbling.service;

import java.util.HashMap;
import java.util.List;

import bitcamp.java89.blingbling.domain.Corporate;

public interface CorporateService {
  List<Corporate> getListByMemberNo(int memberNo) throws Exception;
  List<Corporate> getConversionList() throws Exception;
  List<Corporate> getList() throws Exception;
  List<Corporate> searchByCorporateName(String corporateName) throws Exception;
  Corporate getDetail(int no) throws Exception;
  Corporate getDetail(String email) throws Exception;
  int add(Corporate corporate) throws Exception;
  int delete(int no) throws Exception;
  int update(Corporate corporate) throws Exception;
  int updateDetail(Corporate corporate) throws Exception;
  int updateNotice(Corporate corporate) throws Exception;
  int updatePriceTime(Corporate corporate) throws Exception;
  List<Corporate> searchBybaseAddress( HashMap<String, Object> map) throws Exception;
  List<Corporate> searchBysearchbar( HashMap<String, Object> map) throws Exception;
  List<Corporate> searchBysearchheader( HashMap<String, Object> map) throws Exception;

}


