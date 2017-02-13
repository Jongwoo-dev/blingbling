package bitcamp.java89.blingbling.domain;

import java.io.Serializable;

public class ServiceCenter implements Serializable {
  private static final long serialVersionUID = 1L;
  
  protected int serviceCenterNo;
  protected int memberNo;
  protected String category;
  protected String title;
  protected String content;
  protected String reply;
  protected String postedDate;
  
    
  public int getServiceCenterNo() {
    return serviceCenterNo;
  }
  public void setServiceCenterNo(int serviceCenterNo) {
    this.serviceCenterNo = serviceCenterNo;
  }
  public int getMemberNo() {
    return memberNo;
  }
  public void setMemberNo(int memberNo) {
    this.memberNo = memberNo;
  }
  public String getCategory() {
    return category;
  }
  public void setCategory(String category) {
    this.category = category;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getContent() {
    return content;
  }
  public void setContent(String content) {
    this.content = content;
  }
  public String getReply() {
    return reply;
  }
  public void setReply(String reply) {
    this.reply = reply;
  }
  public String getPostedDate() {
    return postedDate;
  }
  public void setPostedDate(String postedDate) {
    this.postedDate = postedDate;
  }
  public static long getSerialversionuid() {
    return serialVersionUID;
  }
  
  
  
  
}
