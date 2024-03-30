package com.clone.danngnback.dto;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_USR_LIKE_PRODUCT")
@Comment("회원관심상품")
@Data
public class UsrLikeProduct extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("관심상품번호")
    private long likeProductNo; // 관심상품번호

    @Column(length = 10)
    @Comment("사용자ID")
    private String userId;      // 사용자ID

    @Column(length = 20)
    @Comment("상품번호")
    private int productCd;   // 상품번호
}
