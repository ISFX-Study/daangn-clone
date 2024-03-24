package com.clone.danngnback;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class JDBCTest {
    static {
        try {
            Class.forName("oracle.jdbc.driver.OracleDriver");
        } catch (ClassNotFoundException e) {
            throw new RuntimeException(e);
        }
    }

    @Test
    @DisplayName("오라클 클라우드 DB서버 JDBC 연결 테스트")
    void test1() {
//        String url = "jdbc:oracle:thin:@daangn_high?TNS_ADMIN=./src/main/resources/Wallet_DAANGN";
        String url = "jdbc:oracle:thin:@daangn_high?TNS_ADMIN=D:/Wallet_DAANGN";
        String user = "DANNGN";
        String pwd = "Oracle!@#59685";

        try (Connection conn = DriverManager.getConnection(url, user, pwd)) {
            System.out.println("접속 성공 : " + conn);
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }
    }
}
