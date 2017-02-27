package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Stamp;
import bitcamp.java89.blingbling.domain.Stamplog;

public interface StampService {
  List<Stamp> getList() throws Exception;
  List<Stamplog> getListStamplog(int memberNo,int memberStoreNo) throws Exception;
  Stamp getDetail(int memberNo,int memberStoreNo) throws Exception;
  int add(Stamp stamp, int stampChangeNo) throws Exception;
  int delete(int memberNo,int memberStoreNo, int stampChangeNo) throws Exception;
  int update(Stamp stamp, int stampChangeNo) throws Exception;
  
}
















