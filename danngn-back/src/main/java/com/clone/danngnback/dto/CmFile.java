package com.clone.danngnback.dto;
import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;
@Entity
@Table(name="TB_CM_FILE")
@Comment("파일첨부")
public class CmFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(length = 10)
    @Comment("파일순번")
    private String fileSeq;   // 파일순번

    @Column(length = 300)
    @Comment("파일명")
    private String dpNm;      // 파일명

    @Column(length = 100)
    @Comment("저장파일명")
    private String saveNm;    // 저장파일명

    @Column(length = 20)
    @Comment("파일경로")
    private String filePath;      // 파일경로

    @Column(length = 10)
    @Comment("파일확장자")
    private String fileExt; // 파일확장자

    @Column(precision = 16, scale = 0)
    @Comment("파일사이즈")
    private BigDecimal fileSiz;    // 파일사이즈

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
