package bitcamp.java89.blingbling.dao;

import java.util.ArrayList;

import bitcamp.java89.blingbling.domain.Item;

public interface ItemDao {
  int countByNo(int itemNo) throws Exception;
  ArrayList<Item> getList() throws Exception;
  Item getOne(int itemNo) throws Exception;
  Item getOneByName(String name) throws Exception;
  int insert(Item item) throws Exception;
  int update(Item item) throws Exception;
  int delete(int itemNo) throws Exception;

}
