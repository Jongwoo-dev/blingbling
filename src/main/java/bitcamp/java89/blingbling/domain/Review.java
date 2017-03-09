package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class Review implements Serializable {
  private static final long serialVersionUID = 1L;

  public int memberNo;
  public int corporateNo;
  public int facilityScore;
  public int serviceScore;
  public int cleanScore;
  
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public int getCorporateNo() {
    return corporateNo;
  }
  public void setCorporateNo(int corporateNo) {
    this.corporateNo = corporateNo;
  }
  public int getFacilityScore() {
    return facilityScore;
  }
  public void setFacilityScore(int facilityScore) {
    this.facilityScore = facilityScore;
  }
  public int getServiceScore() {
    return serviceScore;
  }
  public void setServiceScore(int serviceScore) {
    this.serviceScore = serviceScore;
  }
  public int getCleanScore() {
    return cleanScore;
  }
  public void setCleanScore(int cleanScore) {
    this.cleanScore = cleanScore;
  }
}
