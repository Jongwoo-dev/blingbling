package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Member implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int memberNo;
  protected String name;
  protected String email;
  protected String tel;
  protected boolean confirmTel;
  protected boolean isManager;
  
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getTel() {
    return tel;
  }
  public void setTel(String tel) {
    this.tel = tel;
  }
  public boolean isConfirmTel() {
    return confirmTel;
  }
  public void setConfirmTel(boolean confirmTel) {
    this.confirmTel = confirmTel;
  }
  public boolean isManager() {
    return isManager;
  }
  public void setManager(boolean isManager) {
    this.isManager = isManager;
  }
}
