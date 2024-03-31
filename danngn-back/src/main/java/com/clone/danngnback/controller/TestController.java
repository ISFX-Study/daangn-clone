package com.clone.danngnback.controller;

import com.clone.danngnback.dto.Test;
import com.clone.danngnback.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;
import java.util.List;


/**
 * @Controller
 *  - 사용 용도 : Spring MVC 뷰 컨트롤러
 *  - @ResponseBody 어노테이션을 사용하지 않으면, 메소드의 반환 값은 View 이름으로 간주되어 해당 View를 렌더링함
 *
 * @RestController
 *  - 사용 용도 :  RESTful 웹 서비스에서 사용
 *  - 모든 메소드는 기본적으로 @ResponseBody를 사용하며 데이터를 전달
 *
 * @RequestBody : json형태를 자바 객체로 변경해주는 것
 * @ResponseBody : 자바객체를 json형태로 변경해주는 것
 */
@Controller
//@RestController
public class TestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestService testService;

   @RequestMapping(value = "/test/hello")
   @ResponseBody // @ResponseBody : 자바객체를 json형태로 변경해주는 것
//    @GetMapping("/test/hello")
    public Object hello() {
        System.out.println("##################### TestController");
        List<Test> resultList = testService.test();
        return resultList;
    }
}
