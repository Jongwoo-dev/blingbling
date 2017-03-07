package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Mypagepl;

public interface MypageplDao {
  ArrayList<Mypagepl> getListBymember(int memberNo) throws Exception;
  
}
