/* 
React import 
리액트(버전 16 이하)을 사용하는 경우에는 import React from 'react'; 구문이 있어야 JSX를 사용 할 수 있음
*/
// import React from 'react';
/* Ant Design 라이브러리에서 컴포넌트 import  */
import { Layout, Menu, theme, Flex, Input, Button } from 'antd';
import { WechatFilled, NotificationFilled, QuestionCircleFilled } from '@ant-design/icons';
import viteLogo from '/vite.svg';
//import componetStyle from './assets/css/component.css';

const { Header, Content, Footer } = Layout;

// 메뉴 변수
const menuList = [
    { key: 1, label: '중고거래' },
    { key: 2, label: '동네업체' },
    { key: 3, label: '알바' },
    { key: 4, label: '부동산 직거래' },
    { key: 5, label: '중고차 직거래' }
];
// 하단 메뉴
const footerMenuList1 = [
    { key: 1, label: '중고거래' },
    { key: 2, label: '동네업체' },
    { key: 3, label: '당근 알바' },
    { key: 4, label: '부동산 직거래' },
    { key: 5, label: '중고차 직거래' },
];
const footerMenuList2 = [
  { key: 1, label: '당근비즈니스' },
  { key: 2, label: '채팅하기' },
];
const footerMenuList3 = [
  { key: 1, label: '자주 묻는 질문' },
  { key: 2, label: '회사 소개' },
  { key: 3, label: '인재 채용' },
];
/* 기본 스타일을 정의한 객체. 높이와 너비를 설정 */
const baseStyle: React.CSSProperties = {
    // React.CSSProperties : React에서 CSS 속성을 타입으로 지정하기 위한 인터페이스, TypeScript에서 사용되는 타입
    // width: '60%',
    height: 64,
    margin: '0 8px', // 메뉴 사이의 가로 간격 조절
};

/* App 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const App: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" >
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']} // 2번째 메뉴 선택
          items={menuList}
          style={{ flex: 1, minWidth: 0 }}
        />
        <Flex gap="middle" vertical>
          <Flex gap="middle">
            <span>
              <form>
                <Input id='searchKeyword' name='searchKeyword' placeholder='물품이나 동네를 검색해보세요.' style={{ width: '250px', marginRight: '5px' }}/>
                <Button id='btnChat'>채팅하기</Button>
              </form>
            </span>
          </Flex>
        </Flex>
      </Header>
      
      <Content style={{ padding: '0 48px' }}>
        <Flex gap="middle" vertical={true} 
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}>
          { /* 당근 */ }
          <Flex gap="middle">
            <div className='service-area'>
              <h1 className='main-title'>당신 근처의<br />지역 생활 커뮤니티</h1>
              <p className='service-desc'>동네라서 가능한 모든 것<br />당근에서 가까운 이웃과 함께해요.</p>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>구글</Button>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>애플</Button>
            </div>
            <div>
              <img class='service-img' 
                  srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-e765d561ee9df7f5ab897f622b8b5a35aaa70314f734e097ea70e6c83bdd73f1.webp " 
                  alt="중고거래, 동네생활 질문글, 알바와 동네업체" 
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-top-eb44f81acb1938b57ba029196887cdd56fbb66dc46aa5d8c6d8392a7d8c9e671.png"></img>
            </div>
          </Flex>
          { /* 중고거래 */ }
          <Flex gap="middle">
            <div>
              <img class='service-img' 
                  srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-c84dd43a3a50742bc296bd36e8b9b1c4a487b8d36aaf67e7f90ecce80201cf60.webp " 
                  alt="우리동네 중고 직거래 사진" 
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-1-efd09cb54044140d530c6647906303c669ca80a8b51473722fc2b1747a3d9047.png" ></img>
            </div>
            <div className='service-area'>
              <p className='service-title'>중고거래</p>
              <h1 className='service-big-title'>믿을만한 이웃 간 중고거래</h1>
              <p className='service-desc'>동네 주민들과 가깝고 따뜻한 거래를 <br/>지금 경험해보세요.</p>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>인기매물 보기</Button>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>믿을수 있는 중고거래</Button>
            </div>
          </Flex>
          { /* 동네생활 */ }
          <Flex gap="middle">
            <div className='service-area'>
              <p className='service-title'>동네생활</p>
              <h1 className='service-big-title'>이웃만 아는<br/> 동네 정보와 이야기</h1>
              <p className='service-desc'>우리동네의 다양한 정보와 이야기를 <br/>공감과 댓글로 나누어요.</p>
              <Flex gap="middle">
                <Flex gap="middle" vertical={true}>
                  <WechatFilled  style={{ fontSize: '43px', color: '#FF6F0F' }} />
                  <p className='service-desc-title'>동네모임</p>
                  <p className='service-desc-item'>근처 이웃들과 동네<br />이야기를 해보세요.</p>
                </Flex>
                <Flex gap="middle" vertical={true}>
                  <QuestionCircleFilled  style={{ fontSize: '43px', color: '#FF6F0F' }} />
                  <p className='service-desc-title'>동네질문</p>
                  <p className='service-desc-item'>궁금한 게 있을 땐<br />이웃에 물어보세요.</p>
                </Flex>
                <Flex gap="middle" vertical={true}>
                  <NotificationFilled  style={{ fontSize: '43px', color: '#FF6F0F' }} />
                  <p className='service-desc-title'>동네분실센터</p>
                  <p className='service-desc-item'>무언가를 잃어버렸다면<br />글을 올려보세요.</p>
                </Flex>
              </Flex>
            </div>
            <div>
              <img class='service-img' 
                srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-78a84106155b4b2c341b6425515a90782dc08a6f443ba0bb622700ef788d2e19.webp " 
                loading="lazy" 
                alt="이웃과 함께하는 동네생활" 
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-2-c99a6862a786b8f801c08ea8e76cfc0c06b5f86442c90ff7bffef0f99146321e.png"></img>
            </div>
          </Flex>
          { /* 알바 */ }
          <Flex gap="middle">
            <div>
              <img class='service-img' 
                    srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-fa126bf72868e1a60f6a67dde54d8a39d51e70ee5df415ebf0ab3175e23d8ee1.webp "
                    loading="lazy" 
                    alt="당근하듯 쉽고 편한 동네 알바 구하기" 
                    src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/rebranded-image-3-c105057eecd5aecd8343a3ad6b396e64a79ee75d54b3e6239eb231779ab0db04.png"></img>
            </div>
            <div className='service-area'>
              <p className='service-title'>알바</p>
              <h1 className='service-big-title'>걸어서 10분!<br/> 동네 알바 구하기</h1>
              <p className='service-desc'>당근하듯 쉽고, 편하게 <br/>당근 알바로 동네 알바를 구할 수 있어요.</p>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>내 근처 알바 보기</Button>
            </div>
          </Flex>
          { /* 동네업체 */ }
          <Flex gap="middle">
            <div className='service-area'>
              <p className='service-title'>동네업체</p>
              <h1 className='service-big-title'> 내 근처에서 찾는<br/> 동네업체</h1>
              <p className='service-desc'>이웃들의 추천 후기를 확인하고 <br/>동네 곳곳의 업체들을 찾을 수 있어요.</p>
              <Button type="primary" style={{height: '56px', backgroundColor: '#FF6F0F'}}>당근 동네업체 보기</Button>
            </div>
            <div>
              <img class='service-img' 
                srcSet="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-business-cc45c805de4a639e259aea606640042d09bccf358e8d20f50af325dd994aceef.webp "
                loading="lazy" 
                alt="내 근처에서 찾는 동네업체" 
                src="https://d1unjqcospf8gs.cloudfront.net/assets/home/main/3x/image-business-cc45c805de4a639e259aea606640042d09bccf358e8d20f50af325dd994aceef.webp"></img>
            </div>
          </Flex>
        </Flex>
      </Content>
      
      <Footer style={{ textAlign: 'center', }}>
        <Flex gap="middle">
            <Flex vertical={true}> 
                {
                    footerMenuList1.map(item => (
                        <div key={item.key} style={{ ...baseStyle }}>
                            <a href='#'>{item.label}</a>
                        </div>
                    ))
                }
            </Flex>
            <Flex vertical={true}> 
                {
                    footerMenuList2.map(item => (
                        <div key={item.key} style={{ ...baseStyle }}>
                            <a href='#'>{item.label}</a>
                        </div>
                    ))
                }
            </Flex>
            <Flex vertical={true}> 
                {
                    footerMenuList3.map(item => (
                        <div key={item.key} style={{ ...baseStyle }}>
                            <a href='#'>{item.label}</a>
                        </div>
                    ))
                }
            </Flex>
        </Flex>
        <hr />
        <div>
          <span>대표 </span><span>김용현, 황도연</span> |
          <span>사업자번호 </span><span>375-87-00088</span><br/>
          <span>직업정보제공사업 신고번호 </span><span> J1200020200016</span><br/>
          <span>주소 </span><span>서울특별시 구로구 디지털로30길 28, 609호(당근서비스)</span><br/>
          <span>전화 </span><span>1544-9796</span> | 
          <span>고객문의 </span><span>cs@daangnservice.com</span>
        </div>
        <Flex gap="middle" style={{paddingBottom: '20px'}}>
          <div>제휴 문의</div>
          <div>광고 문의</div>
          <div>PR 문의</div>
          <div>IR 문의</div>
        </Flex>
        <Flex gap="middle" style={{paddingBottom: '20px'}}>
          <div>이용약관</div>
          <div>개인정보처리방침</div>
          <div>위치기반서비스 이용약관</div>
          <div>이용자보호 비전과 계획</div>
          <div>청소년보호정책</div>
        </Flex>
      </Footer>
    </Layout>
  );
};

export default App;