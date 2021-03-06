package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;
import java.util.HashMap;

import bitcamp.java89.blingbling.domain.Corporate;

public interface CorporateDao {
  ArrayList<Corporate> getListByMemberNo(int memberNo) throws Exception;
  ArrayList<Corporate> getConversionList() throws Exception;
  ArrayList<Corporate> getList() throws Exception;
  ArrayList<Corporate> getListByCorporateName(String corporateName) throws Exception;
  int count(String email) throws Exception;
  int countByNo(int memberNo) throws Exception;
  int insert(Corporate corporate) throws Exception;
  int insertTel(Corporate corporate) throws Exception;
  int insertPhoto(Corporate corporate) throws Exception;
  Corporate getOneWithTel(int memberNo) throws Exception;
  Corporate getOneByEmail(String email) throws Exception;
  int update(Corporate corporate) throws Exception;
  int updateDetail(Corporate corporate) throws Exception;
  int updateNotice(Corporate corporate) throws Exception;
  int updatePriceTime(Corporate corporate) throws Exception;
  int updateCorporateConfirm(int memberNo) throws Exception;
  int delete(int memberNo) throws Exception;
  int deleteTel(int memberNo) throws Exception;
  ArrayList<Corporate> getListBybaseAddress(HashMap<String, Object> map) throws Exception;
  ArrayList<Corporate> getListBysearchbar(HashMap<String, Object> map) throws Exception;
  ArrayList<Corporate> getListBysearchheader(HashMap<String, Object> map) throws Exception;

}
