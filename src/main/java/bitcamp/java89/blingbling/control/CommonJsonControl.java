package bitcamp.java89.blingbling.control;

import java.io.File;
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
          System.out.println("파일 추가 완료 : " + filenames);
        }
      }
    }
    System.out.println("파일이름 : " + filenames);
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
  
}