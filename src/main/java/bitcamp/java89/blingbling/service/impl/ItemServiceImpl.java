package bitcamp.java89.blingbling.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import bitcamp.java89.blingbling.dao.ItemDao;
import bitcamp.java89.blingbling.domain.Item;
import bitcamp.java89.blingbling.service.ItemService;

@Service
public class ItemServiceImpl implements ItemService {
  @Autowired ItemDao itemDao;
  
  public List<Item> getList(int memberNo) throws Exception {
    return itemDao.getList(memberNo);
  }
    
  public Item getDetail(int no) throws Exception {
    return itemDao.getOne(no);
  }

  public Item getDetail(String name) throws Exception {
    return itemDao.getOneByName(name);
  }
   
  public int add(Item item) throws Exception {
    if (itemDao.countByNo(item.getItemNo()) > 0) {
      throw new Exception("같은 상품이 존재합니다. 등록을 취소합니다.");
    }
    
    return itemDao.insert(item);
  }
  
  public int delete(int no) throws Exception {
    if (itemDao.countByNo(no) == 0) {
      throw new Exception("해당 상품이 존재하지 않습니다.");
    }
    return itemDao.delete(no);
  }
  
  public int update(Item item) throws Exception {
    if (itemDao.countByNo(item.getItemNo()) == 0) {
      throw new Exception("해당 상품을 찾지 못했습니다.");
    }
    return itemDao.update(item);
  }
}
















