-- 버전 조회
SELECT VERSION();

-- 사용자 조회
SELECT * FROM mysql.user;

-- 사용자 생성
-- CREATE USER '사용자ID'@'%' IDENTIFIED BY '비밀번호';
CREATE USER 'daangn'@'%' IDENTIFIED BY 'daangn';

-- 사용자 권한 부여
-- 모든 데이터베이스에 대한 권한 부여
-- GRANT ALL PRIVILEGES ON *.* TO 'myuser'@'%';
GRANT ALL PRIVILEGES ON *.* TO 'daangn'@'%';