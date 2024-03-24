/**
 * 버튼 컴포넌트
 * @date 2024.03.23
 * @author pej
 * @description antd Button 컴포넌트 이용
 */
import { Button } from 'antd';

interface DaangnButtonProps {
    type?: 'primary' | 'dashed' | 'link' | 'text' | 'default';
    style?: React.CSSProperties;
    buttonText: string;
    onClick?: () => void; // 버튼 클릭 이벤트 핸들러
}
/*  컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
// React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
const DaangnButton: React.FC<DaangnButtonProps> = ({ type, style, buttonText, onClick }) => {
    // type이 undefined일 때 기본값으로 'primary' 설정
    type = type || 'primary'; 

    return (
        <Button className='btn-daangn' type={type} style={style} onClick={onClick}>
            {buttonText}
        </Button>
    )
};

export default DaangnButton