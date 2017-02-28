package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Item implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected int itemNo;
  protected String name;
  protected int price;
  protected int  usingTime;
  protected int availableNo;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  
  public int getItemNo() {
    return itemNo;
  }
  public void setItemNo(int itemNo) {
    this.itemNo = itemNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getPrice() {
    return price;
  }
  public void setPrice(int price) {
    this.price = price;
  }
  public int getUsingTime() {
    return usingTime;
  }
  public void setUsingTime(int usingTime) {
    this.usingTime = usingTime;
  }
  public int getAvailableNo() {
    return availableNo;
  }
  public void setAvailableNo(int availableNo) {
    this.availableNo = availableNo;
  }
}
