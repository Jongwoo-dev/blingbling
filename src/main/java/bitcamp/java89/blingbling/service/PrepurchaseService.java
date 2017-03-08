package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Prepurchase;

public interface PrepurchaseService {
  List<Prepurchase> getBookingList(int memberNo) throws Exception;
  List<Prepurchase> getList() throws Exception;
  Prepurchase getDetail(int prepurchaseNumber) throws Exception;
  int add(Prepurchase prepurchase) throws Exception;
  int delete(int prepurchaseNumber) throws Exception;
  int update(Prepurchase prepurchase) throws Exception;
}
















