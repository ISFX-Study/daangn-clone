/**
 * 공통 함수
 */
// import { MESSAGE } from '/src/constants/MESSAGE';
// import { API_URL } from '../constants/API_URL';
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
    , convertNumberComma: (num: number, paramOpt: any) => {
        const baseOpt = {
            showKrw: true, // 원 표시여부
        };

        const opt = Object.assign(baseOpt, paramOpt); // 객체 병합 수정

        if (opt.showKrw) {
            return num.toLocaleString() + '원';
        } else {
            return num.toLocaleString();
        }
    }
  
    /*, getMessage(message:MESSAGE, replacement: string): string {
        return MESSAGE[message].replace('{0}', replacement);
    }*/
}
export default commonUtils;