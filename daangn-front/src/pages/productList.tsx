/**
 * 중고거래 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Flex } from 'antd';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const ProductList: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  return (
    <Flex gap='middle' vertical={true} 
      style={{
        minHeight: 280,
        display: 'flex',
        gap: 0
      }}>
      <Flex gap="middle" justify='center' align='center' style={{ backgroundColor: '#F9F9F9', height:'315px', padding: '0 16px 0 16px' }}>
        <div className='service-area'>
          <h1 className='service-big-title'>믿을만한 이웃 간 중고거래</h1>
          <p className='service-desc'>동네 주민들과 가깝고 따뜻한 거래를 <br/>지금 경험해보세요.</p>
        </div>
        <div>
          <img className='service-img'  
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp " 
              alt="믿을만한 이웃 간 중고거래" 
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"></img>
        </div>
      </Flex>
    </Flex>
  );
};

export default ProductList;