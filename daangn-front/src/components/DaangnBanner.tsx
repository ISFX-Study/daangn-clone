/**
 * 배너 컴포넌트
 * @date 2024.03.23
 * @author pej
 * @description 
 */
import { Flex, Button } from 'antd';

interface DaangnBannerProps {
    mainTitle?: React.ReactNode;
    subTitle?: React.ReactNode;
    buttonText?: string;
    onClick?: () => void; // 버튼 클릭 이벤트 핸들러
    imgElement: React.ReactNode;
}
/*  컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
// React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
const DaangnBanner: React.FC<DaangnBannerProps> = ({ mainTitle, subTitle, buttonText, onClick, imgElement }) => {
    
    return (
        <Flex gap="middle" justify='center' align='center' className='content-wrap'>
            <div className='content-area'>
                <h1 className='content-big-title'>{mainTitle}</h1>
                <p className='content-desc'>{subTitle}</p>
                { buttonText && ( // buttonText가 존재할 때만 버튼을 렌더링
                    <Button type="primary" className='btn-daangn' onClick={onClick} style={{ height: '2.5rem', fontSize: '1.1rem'}}>
                        {buttonText}
                    </Button>
                )}
            </div>
            <div>
               {imgElement}
            </div>
      </Flex>
    )
};

export default DaangnBanner