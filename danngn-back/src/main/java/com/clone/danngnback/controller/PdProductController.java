package com.clone.danngnback.controller;

import com.clone.danngnback.dto.PdProduct;
import com.clone.danngnback.dto.Test;
import com.clone.danngnback.service.PdProductService;
import com.clone.danngnback.service.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PdProductController {
    @Autowired
    private PdProductService pdProductService;

    /**
     * 중고거래 목록 조회
     * @date  2024.04.20
     * @param
     * @return List<PdProduct>
     */
    @PostMapping("/prd/searchPrdouctList")
    public List<PdProduct> searchProductList(PdProduct product) {
        List<PdProduct> prdList = pdProductService.searchProductList(product);
        return prdList;
    }

    /**
     * 중고거래 조회
     * @date  2024.04.21
     * @param
     * @return PdProduct
     */
    @PostMapping("/prd/searchPrdouct")
    public PdProduct searchProduct(PdProduct product) {
        System.out.println("### product = "+ product.toString());
        return pdProductService.searchProduct(product);
    }

    /**
     * 중고거래 등록
     * @date  2024.04.20
     * @param product
     * @return
     */
    @PostMapping("/prd/addProduct")
    public void addProduct(PdProduct product) {
        pdProductService.addProduct(product);
    }
}
