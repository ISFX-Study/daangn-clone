/**
 * 알바 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Flex, Button } from 'antd';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';
/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const PartTimeList: React.FC = () => {
  /**
   * 공고 올리기 버튼 클릭 이벤트
   * @date 2024.03.24
   * @author pej
   */
  const onClickSell = () => {

  };

  return (
    <div>
      <DaangnBanner 
          mainTitle={<span>우리 동네에서 찾는<br/>당근 알바</span>}
          subTitle={<span>걸어서 10분 거리의 <br/>동네 알바들 여기 다 있어요.</span>}
          buttonText='공고 올리기'
          onClick={onClickSell}
          imgElement={ <img alt="우리 동네에서 찾는 당근 알바"  style={{ width: '400px' }} src="https://www.daangn.com/_next/static/media/jobs_hero_3x.b118130e.png"></img>}
        />
      <Flex gap="middle" justify='center' align='center'>
        <div className='list-wrap'>
          
        </div>
      </Flex>
    </div>
  );
};

export default PartTimeList;