/**
 * 공통 함수
 */
import { MESSAGE } from '../constants/MESSAGE';

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
    
    /**
     * 메세지 치환
     * @param 메세지코드
     * @param 치환될 문자열 
     * @returns 메시지문구
     */
    , getMessage(msgCode:keyof typeof MESSAGE, args:any[]): string {
        // 동적 속성 접근을 위해 : keyof typeof MESSAGE
        let msg = MESSAGE[msgCode];
        let msgName = '';

        if (msg) {
            // {숫자} 형태의 패턴을 찾아서 바꾸기
            msgName = msg.replace(/\{\d+\}/g, (match) => {
                const index = parseInt(match.slice(1, -1));
                return args[index] !== undefined ? args[index] : match;
            });
        }
        
        return msgName;
    }
}
export default commonUtils;