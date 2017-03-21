package bitcamp.java89.blingbling.control;

import java.io.BufferedReader;
import java.io.File;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpServletRequest;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.AuthCache;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.client.protocol.HttpClientContext;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.auth.BasicScheme;
import org.apache.http.impl.client.BasicAuthCache;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.DefaultHttpClient;
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
    String hostname = "api.bluehouselab.com";
    String url = "https://"+hostname+"/smscenter/v1.0/sendsms";
    String appid = "blingbling";
    String apikey = "27d152ea0d4c11e7bf090cc47a1fcfae";

    CredentialsProvider credsProvider = new BasicCredentialsProvider();
    credsProvider.setCredentials(
        new AuthScope(hostname, 443, AuthScope.ANY_REALM),
        new UsernamePasswordCredentials(appid, apikey)
        );

    // Create AuthCache instance
    AuthCache authCache = new BasicAuthCache();
    authCache.put(new HttpHost(hostname, 443, "https"), new BasicScheme());

    // Add AuthCache to the execution context
    HttpClientContext context = HttpClientContext.create();
    context.setCredentialsProvider(credsProvider);
    context.setAuthCache(authCache);

    DefaultHttpClient client = new DefaultHttpClient();

    try {
      HttpPost httpPost = new HttpPost(url);
      httpPost.setHeader("Content-type", "application/json; charset=utf-8");
      String json = "{\"sender\":\""+sender+"\",\"receivers\":[\""+recipients+"\"],\"content\":\""+message+"\"}";

      StringEntity se = new StringEntity(json, "UTF-8");
      httpPost.setEntity(se);

      HttpResponse httpResponse = client.execute(httpPost, context);
      System.out.println(httpResponse.getStatusLine().getStatusCode());

      InputStream inputStream = httpResponse.getEntity().getContent();
      if(inputStream != null) {
        BufferedReader bufferedReader = new BufferedReader( new InputStreamReader(inputStream));
        String line = "";
        while((line = bufferedReader.readLine()) != null)
          System.out.println(line);
        inputStream.close();
      }
    } catch (Exception e) {
      System.err.println("Error: "+e.getLocalizedMessage());
    } finally {
      client.getConnectionManager().shutdown();
    }
    
    return null;
  }

  
}