package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.ServiceCenter;

public interface ServiceCenterService {
  List<ServiceCenter> getList(String category) throws Exception;
  ServiceCenter getDetail(int no) throws Exception;
  ServiceCenter getDetail(String category) throws Exception;
  int add(ServiceCenter serviceCenter) throws Exception;
  int delete(int no) throws Exception;
  int update(ServiceCenter serviceCenter) throws Exception;
}
















