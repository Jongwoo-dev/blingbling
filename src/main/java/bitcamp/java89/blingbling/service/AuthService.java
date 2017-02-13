package bitcamp.java89.blingbling.service;

import bitcamp.java89.blingbling.domain.Member;

public interface AuthService {
  Member getMemberInfo(String email) throws Exception;
}
