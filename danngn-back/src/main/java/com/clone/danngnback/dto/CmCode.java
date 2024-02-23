package com.clone.danngnback.dto;

import jakarta.persistence.*;
import org.hibernate.annotations.Comment;

import java.math.BigDecimal;

@Entity
@Table(name="TB_CM_CODE")
@Comment("공통코드")
public class CmCode extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(length = 5)
    @Comment("코드번호")
    private int cdNo;   // 코드번호

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

    public int getCdNo() {
        return cdNo;
    }

    public void setCdNo(int cdNo) {
        this.cdNo = cdNo;
    }

    public String getCdNm() {
        return cdNm;
    }

    public void setCdNm(String cdNm) {
        this.cdNm = cdNm;
    }

    public String getCdDtlNo() {
        return cdDtlNo;
    }

    public void setCdDtlNo(String cdDtlNo) {
        this.cdDtlNo = cdDtlNo;
    }

    public String getCdDtlNm() {
        return cdDtlNm;
    }

    public void setCdDtlNm(String cdDtlNm) {
        this.cdDtlNm = cdDtlNm;
    }

    public String getCdDtlDesc() {
        return cdDtlDesc;
    }

    public void setCdDtlDesc(String cdDtlDesc) {
        this.cdDtlDesc = cdDtlDesc;
    }

    public BigDecimal getDispPrir() {
        return dispPrir;
    }

    public void setDispPrir(BigDecimal dispPrir) {
        this.dispPrir = dispPrir;
    }

    public String getUseYn() {
        return useYn;
    }

    public void setUseYn(String useYn) {
        this.useYn = useYn;
    }
}
