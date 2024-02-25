package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_USR_USER")
@Comment("회원")
public class UsrUser extends BaseColumn {
    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 10)
    @Comment("사용자ID")
    private String userId;   // 사용자ID

    @Column(length = 30)
    @Comment("사용자명")
    private String userNm;      // 사용자명

    @Column(length = 10)
    @Comment("파일순번")
    private int fileSeq;    // 파일순번

    @Column(length = 11)
    @Comment("휴대폰번호")
    private String mobile;      // 휴대폰번호

    @Column(length = 50)
    @Comment("이메일")
    private String email; // 이메일

    @Column(length = 10)
    @Comment("활동지역")
    private String activeArea;    // 활동지역

    @Column(length = 1)
    @Comment("사용여부")
    private String useYn;    // 사용여부

    @Column(precision = 5, scale = 2)
    @Comment("매너점수")
    private BigDecimal mannerScore;    // 매너점수

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserNm() {
        return userNm;
    }

    public void setUserNm(String userNm) {
        this.userNm = userNm;
    }

    public int getFileSeq() {
        return fileSeq;
    }

    public void setFileSeq(int fileSeq) {
        this.fileSeq = fileSeq;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getActiveArea() {
        return activeArea;
    }

    public void setActiveArea(String activeArea) {
        this.activeArea = activeArea;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }

    public BigDecimal getMannerScore() {
        return mannerScore;
    }

    public void setMannerScore(BigDecimal mannerScore) {
        this.mannerScore = mannerScore;
    }
}
