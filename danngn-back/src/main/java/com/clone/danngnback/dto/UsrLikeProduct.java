package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_USR_LIKE_PRODUCT")
@Comment("회원관심상품")
public class UsrLikeProduct extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Comment("관심상품번호")
    private long likeProductNo; // 관심상품번호

    @Column(length = 10)
    @Comment("사용자ID")
    private int userId;      // 사용자ID

    @Column(length = 20)
    @Comment("상품번호")
    private int productCd;   // 상품번호

    public long getLikeProductNo() {
        return likeProductNo;
    }

    public void setLikeProductNo(long likeProductNo) {
        this.likeProductNo = likeProductNo;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getProductCd() {
        return productCd;
    }

    public void setProductCd(int productCd) {
        this.productCd = productCd;
    }
}
