package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;
import java.util.Map;

import bitcamp.java89.blingbling.domain.Stamp;
import bitcamp.java89.blingbling.domain.Stamplog;

public interface StampDao {
  ArrayList<Stamp> getListBymember(int memberNo) throws Exception;
  int insert(Stamp stamp) throws Exception;
  Stamp getOne(Map<String,Integer> paramMap) throws Exception;
  int update(Stamp stamp) throws Exception;
  int delete(Map<String,Integer> paramMap) throws Exception;
  int insertStamplog(Stamplog stamplog) throws Exception;
  ArrayList<Stamplog> getListStamplog(Map<String,Integer> paramMap) throws Exception;
}
