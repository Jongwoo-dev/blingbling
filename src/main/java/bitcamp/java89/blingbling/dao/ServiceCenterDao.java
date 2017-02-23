package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.ServiceCenter;

public interface ServiceCenterDao {
  ArrayList<ServiceCenter> getList(String category) throws Exception;
  ArrayList<ServiceCenter> getListByPrefix(String prefix) throws Exception;
  ArrayList<ServiceCenter> getListByMember(int memberNo) throws Exception;
  int countByNo(int serviceCenterNo) throws Exception;
  int insert(ServiceCenter serviceCenter) throws Exception;
  ServiceCenter getOne(int serviceCenterNo) throws Exception;
  int update(ServiceCenter serviceCenter) throws Exception;
  int delete(int serviceCenterNo) throws Exception;

}
