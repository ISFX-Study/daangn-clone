package com.clone.danngnback.repository;

import com.clone.danngnback.dto.Test;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * 스프링 데이터 JPA를 이용한 Repository
 */
public interface TestRepository extends JpaRepository<Test, Long> {

}
