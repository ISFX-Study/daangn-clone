/**
 * 중고거래 상세 화면
 * @date 2024.03.31
 * @author pej
 * @description
 */
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
/* antd 컴포넌트 import */
import { Flex, Image } from 'antd';
/* Axios import */
import axios from 'axios';
/* 상수 import */
import { API_URL } from '../constants/API_URL';
/* ts import */
import commonUtils from '../utils/commonUtils';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const ProductDetail: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  
  // 데이터를 저장할 상태
  const [data, setData] = useState<Product | null>(null);   // 데이터를 저장할 상태
  // useLocation : React Router 훅 중 하나로, 현재 경로의 정보를 가져오는 데 사용
  const location = useLocation();
  const productCd = location.state.productCd; // 값 가져오기

  // 컴포넌트가 마운트될 때 한 번만 실행됨
  useEffect(() => {
    const fetchData = async () => {
      const url = API_URL.PRODUCT_SEARCH;
      const apiParam = {
        productCd: productCd,
      };

      await axios.post(url, null, { params: apiParam })
        .then(response => { // 요청이 성공했을 때 실행되는 코드
          setData(response.data); // 받아온 데이터를 상태에 저장
        })
        .catch(error => { // 요청이 실패했을 때 실행되는 코드
          console.error('오류 발생:', error);
        });
    };

    fetchData(); // 데이터 받아오기

  }, []);

  return (
    <div>
      {data ? (
        <Flex gap="middle" justify='center' align='center'>
        <div className='detail-wrap'>
          <div style={{ }}>
            <Image
              width={750}
              height={450}
              alt='상품이미지'
              src="https://dnvefa72aowie.cloudfront.net/jobs/article/71273467/1713171109022/job-post-2580448422.jpeg?q=95&s=1440x1440&t=inside"
            />
          </div>

          {/* 아이콘, 닉네임, 동네, 매너온도 */}
          <div className='detail-user-area'>
            {/* <Image
              width={750}
              height={450}
              src=""
            /> */}
            <Flex gap="small" vertical={true} >
              <span style={{fontSize: '1.1rem', fontWeight: '700', textAlign: 'left'}}>닉네임</span>
              <span style={{fontSize: '0.8rem', textAlign: 'left'}}>디지털기기</span>
            </Flex>
            <Flex gap="small" vertical={true} justify='left'>
              <div>이미지</div>
              <div className='list-bottom-text2' style={{ lineHeight: '1.5', fontSize: '.813rem'}}>매너온도</div>
            </Flex>
          </div>
          
          <hr />

          <div className='detail-area'>
            <h2 className='detail-title'>{data.status === 30 ? '[거래완료]' : ''}{data.title}</h2>
            <div className='list-bottom-text2' style={{ paddingBottom: '3rem' }}>
              <span style={{fontSize: '1rem'}}>디지털기기</span>
              {/* <span style={{fontSize: '1.1rem', fontWeight: '700'}}>{commonUtils.convertNumberComma(data.sellPrice, {})} </span> */}
            </div>
           
            <h2 className='detail-title'>정보</h2>
            <div style={{ paddingBottom: '2.5rem' }}>
              <p>
                <span style={{fontSize: '1.1rem'}}>가격 : </span>
                <span style={{fontSize: '1.1rem', fontWeight: '700'}}>{commonUtils.convertNumberComma(data.sellPrice, {})} </span>
              </p>
              <h2>{data.negoYn === 'Y'? '가격제안불가' : '가격제안가능' }</h2>
            </div>

            <h2 className='detail-title'>상세 내용</h2>
            <div className='detail-content'>
                {/* {data.content} */}
              저희 동래로덴치과병원 에서 오랫동안 함께 할<br/>
    데스크 직원분 모시고 싶습니다.<br/><br/>

    주4일 근무 이시고,<br/>
    평일 3일 + 주말 1일 기준 입니다<br/>
    (요일 협상 가능)<br/><br/>

    평일 오전 9시 부터 밤 8시 30분<br/>
    주말 오전 9시 부터 오후 5시<br/>
    (점심 시간 오후 12시30분 부터 2시)<br/><br/>

    데스크 경험 없으셔도 되고,<br/>
    유경험자분을 더 선호 합니다<br/>
    (진료과목이 다른 병원 근무하셨던 분도 환영해요)<br/>

    ✔️ 4대보험<br/>
    ✔️ 연봉 협상 (타 병원 임금 기준보다 높습니다)<br/>
    🎀저희는 알바 가 아닌 정직원을 채용하고 있습니다🎀<br/>
    ✔️ 퇴직금<br/>
    ✔️ 명절.생일 챙겨드려요<br/>
    ✔️ 가족의료비혜택<br/>
    ✔️ 세미나지원<br/>
    ✔️ 장기근속자 보너스<br/>
    ✔️ 점심.저녁 제공<br/><br/>

    상냥하고 친절하고 열정 넘치는 직원 분 구해요<br/>
    많이 많이 지원해주세요<br/>
              </div>

              {/* 채팅 관심 조회 */}
              <div className='list-bottom-text2' style={{textAlign: 'left', paddingTop: '4rem'}}>
                관심 {data.likeCnt ? commonUtils.convertNumberComma(data.likeCnt, {}) : 0} | 채팅 {data.chatCnt ? commonUtils.convertNumberComma(data.chatCnt, {}) : 0}
              </div>
          </div>
        </div>
      </Flex>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default ProductDetail;