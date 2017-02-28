package bitcamp.java89.blingbling.domain;

import java.io.Serializable;
import java.util.List;

public class Stamp implements Serializable{
  private static final long serialVersionUID = 1L;
  
  // 필수
  int memberNo;
  int memberStoreNo;
  int saveNo;
  List<Stamplog> stamplog;
  
  

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
	public int getSaveNo() {
		return saveNo;
	}
	public void setSaveNo(int saveNo) {
		this.saveNo = saveNo;
	}
	public List<Stamplog> getStamplog() {
		return stamplog;
	}
	public void setStamplog(List<Stamplog> stamplog) {
		this.stamplog = stamplog;
	}
  
  
  
 
  
}
