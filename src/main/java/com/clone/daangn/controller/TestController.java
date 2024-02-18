package com.clone.daangn.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class TestController {
    @GetMapping("/test/hello")
    public String hello() {
        System.out.println("######## 나오니 ##############");
        return "안녕하세요. 현재 서버시간은 "+ new Date() +"입니다.";
    }
}
