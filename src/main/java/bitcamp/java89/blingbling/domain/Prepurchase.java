package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Prepurchase implements Serializable {
  private static final long serialVersionUID = 1L;
  
  // 필수
  int prepurchaseNo;
  int memberNo;
  int itemNo;
  
  String payMean;     //결제수단
  String payState;    //결제상태
  
  String serviceTime; //서비스 받는시간
  int personnel;      //인원
  
  
  public int getPrepurchaseNo() {
    return prepurchaseNo;
  }
  public void setPrepurchaseNo(int prepurchaseNo) {
    this.prepurchaseNo = prepurchaseNo;
  }
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
  public String getPayMean() {
    return payMean;
  }
  public void setPayMean(String payMean) {
    this.payMean = payMean;
  }
  public String getPayState() {
    return payState;
  }
  public void setPayState(String payState) {
    this.payState = payState;
  }
  public String getServiceTime() {
    return serviceTime;
  }
  public void setServiceTime(String serviceTime) {
    this.serviceTime = serviceTime;
  }
  public int getPersonnel() {
    return personnel;
  }
  public void setPersonnel(int personnel) {
    this.personnel = personnel;
  }
  
}
