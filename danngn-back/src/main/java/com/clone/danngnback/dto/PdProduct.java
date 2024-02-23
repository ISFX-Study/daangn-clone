package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_PD_PRODUCT")
@Comment("상품")
public class PdProduct extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 20)
    @Comment("상품번호")
    private int productCd;   // 상품번호

    @Column(length = 10)
    @Comment("사용자ID")
    private int userId;      // 사용자ID

    @Column(length = 10)
    @Comment("거래방식")
    private String tranType;    // 거래방식

    @Column(length = 10)
    @Comment("상태")
    private String status;      // 상태

    @Column(length = 10)
    @Comment("카테고리코드")
    private String categoryCd; // 카테고리코드

    @Column(length = 20)
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

    public int getProductCd() {
        return productCd;
    }

    public void setProductCd(int productCd) {
        this.productCd = productCd;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getTranType() {
        return tranType;
    }

    public void setTranType(String tranType) {
        this.tranType = tranType;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getCategoryCd() {
        return categoryCd;
    }

    public void setCategoryCd(String categoryCd) {
        this.categoryCd = categoryCd;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getNegoYn() {
        return negoYn;
    }

    public void setNegoYn(String negoYn) {
        this.negoYn = negoYn;
    }

    public BigDecimal getSellPrice() {
        return sellPrice;
    }

    public void setSellPrice(BigDecimal sellPrice) {
        this.sellPrice = sellPrice;
    }

    public int getFileSeq() {
        return fileSeq;
    }

    public void setFileSeq(int fileSeq) {
        this.fileSeq = fileSeq;
    }

    public String getTranHopeSpot() {
        return tranHopeSpot;
    }

    public void setTranHopeSpot(String tranHopeSpot) {
        this.tranHopeSpot = tranHopeSpot;
    }

    public BigDecimal getLikeCnt() {
        return likeCnt;
    }

    public void setLikeCnt(BigDecimal likeCnt) {
        this.likeCnt = likeCnt;
    }

    public BigDecimal getSearchCnt() {
        return searchCnt;
    }

    public void setSearchCnt(BigDecimal searchCnt) {
        this.searchCnt = searchCnt;
    }

    public BigDecimal getChatCnt() {
        return chatCnt;
    }

    public void setChatCnt(BigDecimal chatCnt) {
        this.chatCnt = chatCnt;
    }
}
