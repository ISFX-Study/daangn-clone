package com.clone.danngnback.repository;

import com.clone.danngnback.dto.PdProduct;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.*;

class PdProductRepositoryTest {
    @Autowired
    private PdProductRepository pdProductRepository;

    @Test
    public void testSaveProduct() {
        // 새로운 제품 생성
        PdProduct product = new PdProduct();
        product.setTitle("다이슨 무선청소기");
        product.setSellPrice(BigDecimal.valueOf(10000));

        // 저장
        PdProduct savedProduct = pdProductRepository.save(product);

        assertEquals("다이슨 무선청소기", savedProduct.getTitle());
    }
}