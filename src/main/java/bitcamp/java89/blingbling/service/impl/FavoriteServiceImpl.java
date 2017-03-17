package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.FavoriteDao;
import bitcamp.java89.blingbling.domain.Favorite;
import bitcamp.java89.blingbling.service.FavoriteService;

@Service
public class FavoriteServiceImpl implements FavoriteService {
  @Autowired FavoriteDao favoriteDao;

  public List<Favorite> getList(int memberNo) throws Exception {
    return favoriteDao.getList(memberNo);
  }
  
  public int add(Favorite favorite) throws Exception {
    if (favoriteDao.countByNo(favorite) > 0) {
      throw new Exception("이미 추가된  즐겨찾기입니다.");
    }
      return favoriteDao.insert(favorite);
  }

  public int delete(Favorite favorite) throws Exception {
    if (favoriteDao.countByNo(favorite) == 0) {
      throw new Exception("즐겨찾기가 없습니다.");
    }
    return favoriteDao.delete(favorite);
  }
}
















