package bitcamp.java89.blingbling.domain;

import java.io.Serializable;
import java.util.List;

public class Mypagepl implements Serializable{
  private static final long serialVersionUID = 1L;
  
  // 필수
  int memberNo;
  int likeNum;
  int stampNum;
  int prepurchaseNum;
  
	public int getMemberNo() {
		return memberNo;
	}
	public void setMemberNo(int memberNo) {
		this.memberNo = memberNo;
	}
	public int getLikeNum() {
		return likeNum;
	}
	public void setLikeNum(int likeNum) {
		this.likeNum = likeNum;
	}
	public int getStampNum() {
		return stampNum;
	}
	public void setStampNum(int stampNum) {
		this.stampNum = stampNum;
	}
	public int getPrepurchaseNum() {
		return prepurchaseNum;
	}
	public void setPrepurchaseNum(int prepurchaseNum) {
		this.prepurchaseNum = prepurchaseNum;
	}
  
  

	
  
  
  
 
  
}
