package com.clone.danngnback.service.impl;

import com.clone.danngnback.dto.PdProduct;
import com.clone.danngnback.dto.Test;
import com.clone.danngnback.repository.PdProductRepository;
import com.clone.danngnback.repository.TestRepository;
import com.clone.danngnback.service.PdProductService;
import org.springframework.stereotype.Service;

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

    @Override
    public List<PdProduct> searchProductList() {
        return pdProductRepository.findAll();
    }
}
