package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Prepurchase;

public interface PrepurchaseDao {
  ArrayList<Prepurchase> getList() throws Exception;
  int insert(Prepurchase prepurchase) throws Exception;
  Prepurchase getOne(int prepurchaseNumber) throws Exception;
  int update(Prepurchase prepurchase) throws Exception;
  int delete(int prepurchaseNumber) throws Exception;
}
