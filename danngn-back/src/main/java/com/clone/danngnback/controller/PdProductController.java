package com.clone.danngnback.controller;

import com.clone.danngnback.dto.PdProduct;
import com.clone.danngnback.dto.Test;
import com.clone.danngnback.service.PdProductService;
import com.clone.danngnback.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class PdProductController {
    @Autowired
    private PdProductService pdProductService;

    @PostMapping("/prd/searchPrdouctList")
    public List<PdProduct> searchProductList() {
        System.out.println("##################### PdProductController :: searchPrdouctList");
        List<PdProduct> prdList = pdProductService.searchProductList();
        return prdList;
    }
}
