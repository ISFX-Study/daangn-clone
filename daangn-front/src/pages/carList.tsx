/**
 * 중고차직거래 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { useState, useEffect } from 'react'
import { Flex } from 'antd';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';
/* Axios import */
import axios from 'axios';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const CarList: React.FC = () => {
 /**
   * 내 차 판매하기 버튼 클릭 이벤트
   * @date 2024.03.23
   * @author pej
   */
  const onClickSell = () => {
    // return (
    //   <Alert
    //     message="Informational Notes"
    //     description="Additional description and information about copywriting."
    //     type="info"
    //     showIcon
    //   />
    // );
  };

  return (
    <div>
      <DaangnBanner 
        mainTitle={<span>딜러 수수료 없는<br/>중고차 직거래</span>}
        subTitle={<span>딜러 없이 믿고 살 수 있는 중고차, <br/>당근에서 직거래해보세요.</span>}
        buttonText='내 차 판매하기'
        onClick={onClickSell}
        imgElement={ <img alt="딜러 수수료 없는 중고차 직거래" style={{ width: '400px' }} src="https://www.daangn.com/_next/static/media/car_hero_3x.f057110b.png"></img>}
      />
      
      <Flex gap="middle" justify='center' align='center'>
        <div className='list-wrap'>
          <div>
            <h2  className='list-title'>인기 중고차 직거래</h2>
          </div>
         
        </div>
      </Flex>
    </div>
  );
};

export default CarList;