package bitcamp.java89.blingbling.service;

import java.util.List;

import bitcamp.java89.blingbling.domain.Item;

public interface ItemService {
  List<Item> getList(int memberNo) throws Exception;
  Item getDetail(int no) throws Exception;
  public Item getDetail(String name) throws Exception;
  public int add(Item item) throws Exception;
  public int delete(int no) throws Exception;
  public int update(Item item) throws Exception;
}
















