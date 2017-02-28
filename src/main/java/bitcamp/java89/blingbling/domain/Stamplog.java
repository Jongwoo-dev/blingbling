package bitcamp.java89.blingbling.domain;

import java.io.Serializable;
import java.util.List;

public class Stamplog implements Serializable{
  private static final long serialVersionUID = 1L;
  
  // 필수
  int memberNo;
  int memberStoreNo;
  int stampchangeNo;
  String stampcnt;
  String stampdate;
  
	public Stamplog() {};
	
	public Stamplog(int memberNo, int memberStoreNo, int stampchangeNo) {
		super();
		this.memberNo = memberNo;
		this.memberStoreNo = memberStoreNo;
		this.stampchangeNo = stampchangeNo;
	}
	
	public Stamplog(Stamp stamp, int stampchangeNo) {
		this.memberNo = stamp.memberNo;
		this.memberStoreNo = stamp.memberStoreNo;
		this.stampchangeNo = stampchangeNo;
	}
	
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
	public int getStampchangeNo() {
		return stampchangeNo;
	}
	public void setStampchangeNo(int stampchangeNo) {
		this.stampchangeNo = stampchangeNo;
	}
	public String getStampcnt() {
		return stampcnt;
	}
	public void setStampcnt(String stampcnt) {
		this.stampcnt = stampcnt;
	}
	public String getStampdate() {
		return stampdate;
	}
	public void setStampdate(String stampdate) {
		this.stampdate = stampdate;
	}
  
}
