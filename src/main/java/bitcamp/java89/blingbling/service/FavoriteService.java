package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Favorite;

public interface FavoriteService {
  List<Favorite> getList(int memberNo) throws Exception;
  int add(Favorite favorite) throws Exception;
  int delete(Favorite favorite) throws Exception;
  
}
















