package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Admin;

public interface AdminService {
  List<Admin> getList(String category) throws Exception;
  Admin getDetail(int no) throws Exception;
  int add(Admin admin) throws Exception;
  int delete(int no) throws Exception;
  int update(Admin admin) throws Exception;
}
















