package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class CorpTel implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int no;
  protected String corporateTel;
  protected int ownerNo;
  
  public CorpTel() {}
  
  public CorpTel(String corporateTel) {
    this.corporateTel = corporateTel;
  }
  
  public int getNo() {
    return no;
  }
  public CorpTel setNo(int no) {
    this.no = no;
    return this;
  }
  public String getCorporateTel() {
    return corporateTel;
  }

  public CorpTel setCorporateTel(String corporateTel) {
    this.corporateTel = corporateTel;
    return this;
  }
  public int getOwnerNo() {
    return ownerNo;
  }
  public CorpTel setOwnerNo(int ownerNo) {
    this.ownerNo = ownerNo;
    return this;
  }
  
  
  
}
