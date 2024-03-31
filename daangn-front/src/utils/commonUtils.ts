/**
 * 공통 함수
 */
const commonUtils = {
    
    /**
     * 테스트
     * @param a 
     * @param b 
     * @returns a, b의 합계
     */
    add: (a: number, b: number) => {
        return a + b;
    }

    /**
     * 3자리 마다 콤마 표시
     * @param num 
     * @returns 콤마표시된 문자열
     */
    , convertNumberComma: (num: number): string => {
        return num.toLocaleString() + '원';
    }
}
export default commonUtils;