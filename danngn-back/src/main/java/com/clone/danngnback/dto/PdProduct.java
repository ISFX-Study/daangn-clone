package com.clone.danngnback.dto;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_PD_PRODUCT")
@Comment("상품")
@Data
public class PdProduct extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("상품번호")
    private int productCd;   // 상품번호

    @Column(length = 10)
    @Comment("사용자번호")
    private String userNo;      // 사용자번호

    @Column(length = 10)
    @Comment("거래방식")
    private String tranType;    // 거래방식

    @Column(length = 10)
    @Comment("상태")
    private String status;      // 상태

    @Column(length = 10)
    @Comment("카테고리코드")
    private String categoryCd; // 카테고리코드

    @Column
    @Comment("제목")
    private String title;    // 제목

    // @Column(columnDefinition = "TEXT")
    @Comment("상세설명")
    private String content;    // 상세설명

    @Column(length = 1)
    @Comment("가격제안받기유무")
    private String negoYn;    // 가격제안받기유무

    @Column(precision = 16, scale = 2)
    @Comment("판매가")
    private BigDecimal  sellPrice;    // 판매가

    @Column(length = 10)
    @Comment("파일순번")
    private int fileSeq;    // 파일순번

    @Column(length = 20)
    @Comment("거래희망장소")
    private String tranHopeSpot;    // 거래희망장소

    @Column(precision  = 16)
    @Comment("관심건수")
    private BigDecimal  likeCnt;    // 관심건수

    @Column(precision = 16)
    @Comment("조회건수")
    private BigDecimal  searchCnt;    // 조회건수

    @Column(precision = 16)
    @Comment("채팅건수")
    private BigDecimal chatCnt;    // 채팅건수
}
