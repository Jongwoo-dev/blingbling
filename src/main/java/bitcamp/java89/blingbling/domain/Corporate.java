package bitcamp.java89.blingbling.domain;

public class Corporate extends Member {
  private static final long serialVersionUID = 1L;
  
  // 필수
  String corporateRegistrationNumber;
  boolean corporateConfirm;
  String corporateName;
  String corporateType;

  // 선택
  String postNumber;
  String baseAddress;
  String detailAddress;
  String mapLocation;
  String detail;
  String additionalInfo;
  String notice;
  
  public String getCorporateRegistrationNumber() {
    return corporateRegistrationNumber;
  }
  public void setCorporateRegistrationNumber(String corporateRegistrationNumber) {
    this.corporateRegistrationNumber = corporateRegistrationNumber;
  }
  public boolean isCorporateConfirm() {
    return corporateConfirm;
  }
  public void setCorporateConfirm(boolean corporateConfirm) {
    this.corporateConfirm = corporateConfirm;
  }
  public String getCorporateName() {
    return corporateName;
  }
  public void setCorporateName(String corporateName) {
    this.corporateName = corporateName;
  }
  public String getCorporateType() {
    return corporateType;
  }
  public void setCorporateType(String corporateType) {
    this.corporateType = corporateType;
  }
  public String getPostNumber() {
    return postNumber;
  }
  public void setPostNumber(String postNumber) {
    this.postNumber = postNumber;
  }
  public String getBaseAddress() {
    return baseAddress;
  }
  public void setBaseAddress(String baseAddress) {
    this.baseAddress = baseAddress;
  }
  public String getDetailAddress() {
    return detailAddress;
  }
  public void setDetailAddress(String detailAddress) {
    this.detailAddress = detailAddress;
  }
  public String getMapLocation() {
    return mapLocation;
  }
  public void setMapLocation(String mapLocation) {
    this.mapLocation = mapLocation;
  }
  public String getDetail() {
    return detail;
  }
  public void setDetail(String detail) {
    this.detail = detail;
  }
  public String getAdditionalInfo() {
    return additionalInfo;
  }
  public void setAdditionalInfo(String additionalInfo) {
    this.additionalInfo = additionalInfo;
  }
  public String getNotice() {
    return notice;
  }
  public void setNotice(String notice) {
    this.notice = notice;
  }
}
