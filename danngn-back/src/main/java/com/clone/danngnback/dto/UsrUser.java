package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_USR_USER")
@Comment("회원")
public class UsrUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 10)
    @Comment("사용자ID")
    private String userId;   // 사용자ID

    @Column(length = 30)
    @Comment("사용자명")
    private String userNm;      // 사용자명

    @Column(length = 10)
    @Comment("파일순번")
    private String fileSeq;    // 파일순번

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
