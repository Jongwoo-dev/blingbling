package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.ServiceCenter;

public interface ServiceCenterService {
  List<ServiceCenter> getList(String category) throws Exception;
  List<ServiceCenter> getListByPrefix(String prefix) throws Exception;
  List<ServiceCenter> getListByMember(int memberNo) throws Exception;
  List<ServiceCenter> getListBySearch(String word) throws Exception;
  ServiceCenter getDetail(int no) throws Exception;
  int add(ServiceCenter serviceCenter) throws Exception;
  int delete(int no) throws Exception;
  int update(ServiceCenter serviceCenter) throws Exception;
}
















