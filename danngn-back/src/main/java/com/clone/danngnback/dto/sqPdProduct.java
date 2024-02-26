package com.clone.danngnback.dto;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="SQ_PD_PRODUCT")
@Comment("상품코드 시퀀스")
public class sqPdProduct {
    @Id
    @Column(precision = 5, scale = 0)
    @Comment("시퀀스")
    private BigDecimal seq;
}
