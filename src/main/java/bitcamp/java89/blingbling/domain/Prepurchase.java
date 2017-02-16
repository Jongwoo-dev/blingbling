package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Prepurchase implements Serializable {
  private static final long serialVersionUID = 1L;
  
  // 필수
  int prepurchaseNumber;
  int memberNo;
  int itemNo;
  
  String payMean;
  String paystate;
  
  // 선택
  String servicetime;
  String personnel;
	public int getPrepurchaseNumber() {
		return prepurchaseNumber;
	}
	public void setPrepurchaseNumber(int prepurchaseNumber) {
		this.prepurchaseNumber = prepurchaseNumber;
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
	public String getPaystate() {
		return paystate;
	}
	public void setPaystate(String paystate) {
		this.paystate = paystate;
	}
	public String getServicetime() {
		return servicetime;
	}
	public void setServicetime(String servicetime) {
		this.servicetime = servicetime;
	}
	public String getPersonnel() {
		return personnel;
	}
	public void setPersonnel(String personnel) {
		this.personnel = personnel;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

}
