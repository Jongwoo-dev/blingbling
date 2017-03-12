package bitcamp.java89.blingbling.domain;

public class Comment extends Review {
  private static final long serialVersionUID = 1L;
  
  public int commentNo;
  public int corporateNo;
  public int memberNo;
  
  public String name;
  
  public int group;
  public int level;
  public int sequence;
  public String contents;
  public String registrationDate;
  
  public boolean deleted;
  
  
  public int getCommentNo() {
    return commentNo;
  }
  public void setCommentNo(int commentNo) {
    this.commentNo = commentNo;
  }
  public int getCorporateNo() {
    return corporateNo;
  }
  public void setCorporateNo(int corporateNo) {
    this.corporateNo = corporateNo;
  }
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
  public int getGroup() {
    return group;
  }
  public void setGroup(int group) {
    this.group = group;
  }
  public int getLevel() {
    return level;
  }
  public void setLevel(int level) {
    this.level = level;
  }
  public int getSequence() {
    return sequence;
  }
  public void setSequence(int sequence) {
    this.sequence = sequence;
  }
  public String getContents() {
    return contents;
  }
  public void setContents(String contents) {
    this.contents = contents;
  }
  public String getRegistrationDate() {
    return registrationDate;
  }
  public void setRegistrationDate(String registrationDate) {
    this.registrationDate = registrationDate;
  }
  public boolean isDeleted() {
    return deleted;
  }
  public void setDeleted(boolean deleted) {
    this.deleted = deleted;
  }
}
