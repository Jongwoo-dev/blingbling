package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.blingbling.domain.Prepurchase;

public interface PrepurchaseDao {
  ArrayList<Prepurchase> getBookingList(int memberNo) throws Exception;
  ArrayList<Prepurchase> getMemberBookingList(int memberNo) throws Exception;
  ArrayList<Prepurchase> getList() throws Exception;
  int insert(Prepurchase prepurchase) throws Exception;
  Prepurchase getOne(int prepurchaseNumber) throws Exception;
  int update(Prepurchase prepurchase) throws Exception;
  int delete(int prepurchaseNumber) throws Exception;
  ArrayList<Prepurchase> getCalenderTime(Map<String,Object> paramMap) throws Exception;
}
