package bitcamp.java89.blingbling.dao;

import java.util.List;

import bitcamp.java89.blingbling.domain.Favorite;

public interface FavoriteDao {
  List<Favorite> getList(int memberNo) throws Exception;
  int insert(Favorite favorite) throws Exception;
  int delete(Favorite favorite) throws Exception;
  int countByNo(Favorite favorite) throws Exception;
}
