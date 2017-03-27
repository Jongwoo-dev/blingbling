package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Review;

public interface ReviewService {
  List<Review> getList(int corporateNo) throws Exception;
  Review getOne(int memberNo, int corporateNo) throws Exception;
  int update(Review favorite) throws Exception;
}








