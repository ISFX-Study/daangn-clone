package com.clone.danngnback.service;

import com.clone.danngnback.dto.PdProduct;

import java.util.List;

/**
 * 중고거래 Service
 * @author pej
 * @date 2024-03-24
 */
public interface PdProductService {
    public List<PdProduct> searchProductList();
}
