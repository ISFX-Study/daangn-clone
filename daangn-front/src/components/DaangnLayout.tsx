/**
 * 당근 클론코딩 화면 layout
 * @date 2024.03.17
 * @author pej
 * @description antd Layout 컴포넌트 이용
 */
/* 
React import 
리액트(버전 16 이하)을 사용하는 경우에는 import React from 'react'; 구문이 있어야 JSX를 사용 할 수 있음
*/
// import React from 'react';
import { ReactNode } from 'react';
/* Ant Design 라이브러리에서 컴포넌트 import  */
import { ConfigProvider, Layout } from 'antd';

/* 커스텀 컴포넌트 import */
import DaangnHeader from './DaangnHeader';
import DaangnFooter from './DaangnFooter';

const { Content } = Layout;

interface DaangnLayoutProps {
  children: ReactNode; // ReactNode는 모든 종류의 React 요소를 나타내는 타입
}

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
//const DaangnLayout: React.FC = ({ children }) => {
const DaangnLayout: React.FC<DaangnLayoutProps> = ({ children }) => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#FF6F0F',  // 2024.03.25 : 색상코드를 직접 입력해야 해당 색상으로 변경됨
          colorPrimaryHover: 'var(--primary-color)',
        },
        components: {
            Layout: {
                headerBg: 'var(--background-color)',  // 헤더영역 배경색
                bodyBg: 'var(--background-color)',    // content영역 배경색
                footerBg: 'var(--footer-bg-color)',  // 푸터영역 배경색
                // headerHeight: , // 헤더영역 높이
            },
            Menu: {
              // groupTitleFontSize: 18, // 2024.03.23 : 동작 안함 속성 확인 필요
              // horizontalItemSelectedColor: 'var(--primary-color)',    // 마우스 오버시 메뉴 밑줄 색상
              itemColor: 'var(--black)',    // 메뉴 글자 색상
              // itemHoverColor: 'var(--gray)',  // 마우스 오버시 메뉴 글자 색상
            },
            Button: {
            }
        },
      }}>
      <Layout>
        
        <DaangnHeader />
        
        <Content>
          {children}
        </Content>
        
        <DaangnFooter />

      </Layout>
    </ConfigProvider>
  );
};

export default DaangnLayout;