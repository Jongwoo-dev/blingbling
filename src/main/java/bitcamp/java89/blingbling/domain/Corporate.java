package bitcamp.java89.blingbling.domain;

import java.util.List;


public class Corporate extends Member {
  private static final long serialVersionUID = 1L;
  
  protected String name;
  protected int memberNo;
  // 필수
  protected String corporateRegistrationNumber;
  protected boolean corporateConfirm;
  protected String corporateName;
  protected String corporateType;
  
  protected List<CorpTel> telList;
  protected List<Photo> photoList;
  protected List<Item> itemList;
	// 선택
  protected String postNumber;
  protected String baseAddress;
  protected String detailAddress;
  protected String mapLocation;
  protected String detail;
  protected String additionalInfo;
  protected String notice;
  protected String priceTime;
  
  
  public List<Item> getItemList() {
		return itemList;
	}
	public void setItemList(List<Item> itemList) {
		this.itemList = itemList;
	}
	public String getName() {
    return name;
  }
  public void setName(String name) {
    this.name = name;
  }
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
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
  public List<CorpTel> getTelList() {
    return telList;
  }
  public void setTelList(List<CorpTel> telList) {
    this.telList = telList;
  }
  public List<Photo> getPhotoList() {
    return photoList;
  }
  public void setPhotoList(List<Photo> photoList) {
    this.photoList = photoList;
  }
  public String getPriceTime() {
    return priceTime;
  }
  public void setPriceTime(String priceTime) {
    this.priceTime = priceTime;
  }
  
  
  
}
