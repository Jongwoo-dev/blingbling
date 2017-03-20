package bitcamp.java89.blingbling.control;

import java.io.File;
import java.net.MalformedURLException;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import bitcamp.java89.blingbling.util.MultipartUtil;

@RestController // 이 애노테이션을 붙이면, 스프링 설정 파일에 JSON 변환기 'MappingJackson2JsonView' 객체를 등록하지 않아도 된다.
@RequestMapping("/common/")
public class CommonJsonControl {
  @Autowired ServletContext sc;
  
  @RequestMapping("fileupload")
  public AjaxResult fileupload(MultipartFile[] files) throws Exception {
    ArrayList<String> filenames = new ArrayList<>();
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (files != null && files.length > 0) {
      for (MultipartFile file : files) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
          filenames.add(newFilename);
          /*System.out.println("파일 추가 완료 : " + filenames);*/
        }
      }
    }
    /*System.out.println("파일이름 : " + filenames);*/
    return new AjaxResult(AjaxResult.SUCCESS, filenames);
  }
  
  @RequestMapping("ckediterFileUpload")
  public AjaxResult ckediterFileUpload(MultipartFile[] files, HttpServletRequest request) throws Exception {
    ArrayList<String> filenames = new ArrayList<>();
    
    filenames.add(request.getParameter("CKEditorFuncNum"));
    
    // 페이지 컨트롤러는 입력 파라미터 값을 가공하여 모델 객체에게 전달하는 일을 한다.
    if (files != null && files.length > 0) {
      for (MultipartFile file : files) {
        if (file.getSize() > 0) {
          String newFilename = MultipartUtil.generateFilename();
          file.transferTo(new File(sc.getRealPath("/upload/" + newFilename)));
          filenames.add(newFilename);
        }
      }
    }
    System.out.println("파일이름 : " + filenames);
    
    
    return new AjaxResult(AjaxResult.SUCCESS, filenames);
  }
  
  @RequestMapping("sendSMS")
  public AjaxResult sendSMS(String message, String sender, String recipients) throws Exception {
    String url = "https://directsend.co.kr/index.php/api/v1/sms";
    java.net.URL obj;
    obj = new java.net.URL(url);
    javax.net.ssl.HttpsURLConnection con;
    con = (javax.net.ssl.HttpsURLConnection) obj.openConnection();
    con.setRequestMethod("POST");

    /* 
     * message  : 받을 문자 내용 최대 2000바이트.
     * username : directsend 발급 ID
     * recipients : 발송 할 고객 번호 , 로 구분함. ex) 01012341234,0101555123,010303040123
     * key : directsend 발급 api key
     * 
     * 각 번호가 유효하지 않을 경우에는 발송이 되지 않습니다.
     */ 


    /* 여기서부터 수정해주시기 바랍니다. */

    //String message = "고객님 환영함니다.";
    //String sender = "01012341234";
    String username = "directsend id";
    //String recipients = "01011233785,01041231231";
    String key = "directsend 발급 api key";

    /* 여기까지만 수정해주시기 바랍니다. */

    /** 수정하지 마시기 바랍니다.
     *  아래의 URL에서 apache commons-comdec jar 파일을 다운로드 한 후에 함께 컴파일 해주십시오.
     *  http://commons.apache.org/proper/commons-codec/download_codec.cgi
     * **/
    String urlParameters = "message=" + java.net.URLEncoder.encode(org.apache.commons.codec.binary.Base64.encodeBase64String(message.getBytes("euc-kr")), "EUC_KR")
    + "&sender=" + java.net.URLEncoder.encode(sender, "EUC_KR")
    + "&username=" + java.net.URLEncoder.encode(username, "EUC_KR")
    + "&recipients=" + java.net.URLEncoder.encode(recipients, "EUC_KR")
    + "&key=" + java.net.URLEncoder.encode(key, "EUC_KR");
    /** 수정하지 마시기 바랍니다. **/

    System.setProperty("jsse.enableSNIExtension", "false") ; 
    con.setDoOutput(true);
    java.io.DataOutputStream wr = new java.io.DataOutputStream(con.getOutputStream());
    wr.writeBytes(urlParameters);
    wr.flush();
    wr.close();

    int responseCode = con.getResponseCode();
    System.out.println(responseCode);

    /* 
     * responseCode 가 200 이 아니면 내부에서 문제가 발생한 케이스입니다. 
     * directsend 관리자에게 문의해주시기 바랍니다.
     * */

    java.io.BufferedReader in = new java.io.BufferedReader(
        new java.io.InputStreamReader(con.getInputStream()));
    String inputLine;
    StringBuffer response = new StringBuffer();

    while ((inputLine = in.readLine()) != null) {
      response.append(inputLine);
    }
    in.close();

    System.out.println(response.toString());

    /* 
     * response의 실패
     *  {"status":101} 
     */

    /* 
     * response 성공
     * {"status":0}
     *  성공 코드번호.
     */

    /*
     ** status code
      0   : 정상발송
      100 : sender 검증 실패
      101 : key 검증 실패
      102 : username 값 존재 X
      103 : message 값 존재 X
      104 : sender 값 존재 X
      105 : recipients 값 존재 X
      106 : message validation 실패
      201 : user is null
      202 : 발송대상 0개
      203 : 2000bytes 초과
      204 : api key 일치하지 않음.
      205 : 잔액부족
      999 : Internal Error.
     **
     */
    return null;
  }
  
  
}