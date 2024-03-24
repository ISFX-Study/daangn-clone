/**
 * 동네업체 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Flex } from 'antd';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';
/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const CompanyList: React.FC = () => {
  return (
    <div>
      <DaangnBanner 
        mainTitle={<span>동네 이웃들이<br/>자주 가는 동네 업체</span>}
        subTitle={<span>우리 동네 사람들이<br/>이용하는 업체를 찾아보세요.</span>}
        imgElement={ <img alt="동네 이웃들이 자주 가는 동네 업체"  style={{ width: '400px' }} src="https://www.daangn.com/_next/static/media/nearby_stores_hero_image_3x.47c43e04.png"></img>}
      />
      
      <Flex gap="middle" justify='center' align='center'>
        <div className='list-wrap'>
          <div>
            <h2 className='list-title'>인기 동네 업체</h2>
          </div>
        </div>
      </Flex>
    </div>
  );
};

export default CompanyList;