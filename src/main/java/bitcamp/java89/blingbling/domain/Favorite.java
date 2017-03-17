package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Favorite implements Serializable{
  private static final long serialVersionUID = 1L;
  
  int memberNo;
  int memberStoreNo;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public int getMemberStoreNo() {
    return memberStoreNo;
  }
  public void setMemberStoreNo(int memberStoreNo) {
    this.memberStoreNo = memberStoreNo;
  }
  
  
 
  
}
