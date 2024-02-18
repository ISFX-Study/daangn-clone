package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_CM_CODE")
@Comment("공통코드")
public class CmCode {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 5)
    @Comment("코드번호")
    private String cdNo;   // 코드번호

    @Column(length = 20)
    @Comment("코드명")
    private String cdNm;      // 코드명

    @Column(length = 10)
    @Comment("상세코드번호")
    private String cdDtlNo;    // 상세코드번호

    @Column(length = 20)
    @Comment("상세코드명")
    private String cdDtlNm;      // 상세코드명

    @Column(length = 20)
    @Comment("상세코드설명")
    private String cdDtlDesc; // 상세코드설명

    @Column(precision = 3, scale = 0)
    @Comment("우선순위")
    private BigDecimal dispPrir;    // 우선순위

    @Column(length = 1)
    @Comment("사용여부")
    private String useYn;    // 사용여부

    @Column(length = 14)
    @Comment("등록일시")
    private String createdat;    // 등록일시

    @Column(length = 10)
    @Comment("등록자")
    private String createdby;    // 등록자

    @Column(length = 14)
    @Comment("수정일시")
    private String updatedat;    // 수정일시

    @Column(length = 10)
    @Comment("수정자")
    private String updatedby;    // 수정자
}
