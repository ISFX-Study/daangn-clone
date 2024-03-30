package com.clone.danngnback.dto;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Data;
import org.hibernate.annotations.Comment;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

/**
 * @MappedSuperclass : 엔티티마다 공통된 필드를 사용하기 위해 사용하는 어노테이션
 * @EntityListeners(AuditingEntityListener.class) :
 *  Spring Data JPA에서 Entity의 상태를 감시하기위해 Auditing 기능 포함
 */
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)
@Data
public abstract class BaseColumn {
    @CreatedBy
    @Column(updatable = false)
    @Comment("등록자")
    private String createdby;   // 등록자

    @CreatedDate
    @Column(updatable = false)
    @Comment("등록일시")
    private LocalDateTime createdat;    // 등록일시

    @LastModifiedBy
    @Column
    @Comment("수정자")
    private String updatedby;   // 수정자

    @Column
    @Comment("수정일시")
    private LocalDateTime updatedat;    // 수정일시
}
