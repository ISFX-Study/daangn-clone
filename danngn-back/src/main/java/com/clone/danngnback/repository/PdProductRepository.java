package com.clone.danngnback.repository;

import com.clone.danngnback.dto.PdProduct;
import com.clone.danngnback.dto.Test;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PdProductRepository extends JpaRepository<PdProduct, Integer> {
}
