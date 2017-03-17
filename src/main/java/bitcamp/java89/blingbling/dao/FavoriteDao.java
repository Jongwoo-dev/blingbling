package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Favorite;

public interface FavoriteDao {
  int countByNo(Favorite favorite) throws Exception;
  ArrayList<Favorite> getList(int memberNo) throws Exception;
  int insert(Favorite favorite) throws Exception;
  int delete(Favorite favorite) throws Exception;
}
