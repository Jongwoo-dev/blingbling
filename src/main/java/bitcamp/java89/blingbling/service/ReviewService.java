package bitcamp.java89.blingbling.service;

import bitcamp.java89.blingbling.domain.Review;

public interface ReviewService {
  Review getOne(int memberNo, int corporateNo) throws Exception;
  int update(Review favorite) throws Exception;
}








