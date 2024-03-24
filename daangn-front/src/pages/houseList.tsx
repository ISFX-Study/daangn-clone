/**
 * 부동산직거래 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Flex, Button } from 'antd';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const HouseList: React.FC = () => {
  /**
   * 매물 올리기 버튼 클릭 이벤트
   * @date 2024.03.24
   * @author pej
   */
  const onClickSell = () => {

  };

  return (
    <div>
      <DaangnBanner 
          mainTitle={<span>복비없이 투명한 <br/>부동산 직거래</span>}
          subTitle={<span>이웃이 살던 집, 당근에서 <br/>편하게 직거래해보세요.</span>}
          buttonText='매물 올리기'
          onClick={onClickSell}
          imgElement={ <img alt="복비없이 투명한 부동산 직거래"  style={{ width: '400px' }} src="https://www.daangn.com/_next/static/media/nearby_stores_hero_image_3x.47c43e04.png"></img>}
      />
      
      <Flex gap="middle" justify='center' align='center'>
        <div className='list-wrap'>
          
        </div>
      </Flex>
    </div>
  );
};

export default HouseList;