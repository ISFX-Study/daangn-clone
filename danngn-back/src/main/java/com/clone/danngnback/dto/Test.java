package com.clone.danngnback.dto;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="TB_TEST")
@Data
public class Test extends BaseColumn {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String name;
    private String memo;
}
