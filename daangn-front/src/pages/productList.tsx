/**
 * 중고거래 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Flex, Button } from 'antd';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';
// 테스트 데이터
const itemList = [
  {no: 1  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 2  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 3  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 4  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 5  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 6  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 7  , title: '🍊 한라봉 실컷 먹을 기회. 가정용 하우스 한라봉 5KG/10KG', middleText: '300000000000,000원', bottomText:'인천광역시 부평구 부개1동'},
  {no: 8  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 9  , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 10 , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 11 , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 12 , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
  {no: 13 , title: '다이슨청소기세트', middleText: '10,000원', bottomText:'충북 청주시 서원구 분평동'},
];

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const ProductList: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
   /**
   * 중고거래 올리기 버튼 클릭 이벤트
   * @date 2024.03.24
   * @author pej
   */
  const onClickSell = () => {
  
  };

  return (
    <div>
      <DaangnBanner 
          mainTitle={<span>믿을만한 <br/>이웃 간 중고거래</span>}
          subTitle={<span>동네 주민들과 가깝고 따뜻한 거래를 <br/>지금 경험해보세요.</span>}
          buttonText='중고거래 올리기'
          onClick={onClickSell}
          imgElement={ 
            <img style={{ width: '400px' }}
              srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp " 
              alt="믿을만한 이웃 간 중고거래" 
              src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/fleamarket-39d1db152a4769a6071f587fa9320b254085d726a06f61d544728b9ab3bd940a.webp"></img>
          }
        />
      
      <Flex gap="middle" justify='center' align='center'>
        <div className='list-wrap'>
          <div>
            <h2  className='list-title'>인기 중고거래</h2>
          </div>
          <Flex gap="middle" wrap='wrap'>
            {
              itemList.map(item => (
                <div key={item.no} style={{ textAlign: 'left' }}>
                  <Flex gap='26px'>
                    <div style={{ }}>
                      <img style={{ width: '150px', height: '150px'}}
                        alt=" 1년간 부담없이 거주하세요 도배해드립니다 부동산 직거래" 
                        src="https://dnvefa72aowie.cloudfront.net/realty/realty/articles/64c72dedbb25e018123c23a1fe2ed0597f6a4f7fd0e086fcd58d65e12818423b_1661987156388.jpeg?q=95&amp;s=1440x1440&amp;t=inside" 
                        decoding="async" data-nimg="fill"></img>
                    </div>
                    <div style={{ textAlign: 'left'}}>
                      <div className='list-top-text'>{item.title}</div>
                      <div className='list-middle-text'>{item.middleText}</div>
                      <div className='list-bottom-text'>{item.bottomText}</div>
                    </div>
                  </Flex>
                </div>
              ))
            }
          </Flex>
        </div>
      </Flex>
    </div>
  );
};

export default ProductList;