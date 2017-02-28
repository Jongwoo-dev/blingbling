package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Admin;

public interface AdminDao {
  ArrayList<Admin> getList(String category) throws Exception;
  int countByNo(int serviceCenterNo) throws Exception;
  int insert(Admin admin) throws Exception;
  Admin getOne(int serviceCenterNo) throws Exception;
  int update(Admin admin) throws Exception;
  int delete(int serviceCenterNo) throws Exception;
  int answer(Admin admin) throws Exception;
}
