package bitcamp.java89.blingbling.dao;

import java.util.List;
import java.util.Map;

import bitcamp.java89.blingbling.domain.Review;

public interface ReviewDao {
  List<Review> getList(int corporateNo) throws Exception;
  Review getOne(Map<String,Object> paramMap) throws Exception;
  int insert(Review favorite) throws Exception;
  int delete(Review favorite) throws Exception;
}
