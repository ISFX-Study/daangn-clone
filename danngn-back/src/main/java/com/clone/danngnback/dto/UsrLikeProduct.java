package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_USR_LIKE_PRODUCT")
@Comment("회원관심상품")
public class UsrLikeProduct {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("관심상품번호")
    private long likeProductNo; // 관심상품번호

    @Column(length = 10)
    @Comment("사용자ID")
    private String userId;      // 사용자ID

    @Column(length = 20)
    @Comment("상품번호")
    private String productCd;   // 상품번호

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
