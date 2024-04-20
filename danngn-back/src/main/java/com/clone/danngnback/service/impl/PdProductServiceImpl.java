package com.clone.danngnback.service.impl;

import com.clone.danngnback.dto.PdProduct;
import com.clone.danngnback.repository.PdProductRepository;
import com.clone.danngnback.service.PdProductService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * 중고거래 ServiceImpl
 * @author pej
 * @date 2024-03-24
 */
@Service
public class PdProductServiceImpl implements PdProductService {
    private final PdProductRepository pdProductRepository;

    public PdProductServiceImpl(PdProductRepository pdProductRepository) {
        this.pdProductRepository = pdProductRepository;
    }

    /**
     * 중고거래 목록 조회
     * @date  2024.04.20
     * @param
     * @return List<PdProduct>
     */
    @Override
    public List<PdProduct> searchProductList() {
        return pdProductRepository.findAll();
    }

    /**
     * 중고거래 등록
     * @date  2024.04.20
     * @param product
     * @return
     */
    @Override
    public void addProduct(PdProduct product) {
        String userId = "ADMIN";
        String userNo = "10000";

        product.setStatus("10");                    // 상태
        product.setUserNo(userNo);                  // 사용자번호
        product.setCreatedat(LocalDateTime.now());  // 등록일시
        product.setCreatedby(userId);               // 등록자
        product.setUpdatedat(LocalDateTime.now());  // 수정일시
        product.setUpdatedby(userId);               // 수정자

        pdProductRepository.save(product);
    }
}
