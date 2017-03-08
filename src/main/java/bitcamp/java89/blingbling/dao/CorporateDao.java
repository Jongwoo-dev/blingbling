package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Corporate;

public interface CorporateDao {
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
  int delete(int memberNo) throws Exception;
  int deleteTel(int memberNo) throws Exception;
}
