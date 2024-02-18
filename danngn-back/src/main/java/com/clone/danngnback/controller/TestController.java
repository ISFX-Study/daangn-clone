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
import org.springframework.web.bind.annotation.RestController;
import java.util.Date;
import java.util.List;

// @Controller
@RestController
public class TestController {
    private final Logger logger = LoggerFactory.getLogger(this.getClass());

    @Autowired
    private TestService testService;

//   @RequestMapping(value = "/test/hello")
    @GetMapping("/test/hello")
    public String hello() {
        System.out.println("##################### TestController");
        List<Test> resultList = testService.test();
        return "등록된 건수 : " + resultList.size();
    }
}
