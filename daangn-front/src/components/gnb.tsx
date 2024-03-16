/* 
React import 
리액트(버전 16 이하)을 사용하는 경우에는 import React from 'react'; 구문이 있어야 JSX를 사용 할 수 있음
*/
// import React from 'react';

/* Ant Design 라이브러리에서 Flex와 Radio 컴포넌트 import  */
import { Flex } from 'antd';

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
  // 메뉴 변수
  const menus = [
    { id: 1, name: '중고거래' },
    { id: 2, name: '동네업체' },
    { id: 3, name: '알바' },
    { id: 4, name: '부동산 직거래' },
    { id: 5, name: '중고차 직거래' }
  ];

  return (
    <Flex gap="middle" vertical>
      <Flex>
        {
          menus.map(menu => (
            <div key={menu.id} style={{ ...baseStyle }}>
              <a href='#'>{menu.name}</a>
            </div>
          ))
        }
      </Flex>
    </Flex>
  );
};
/* App 컴포넌트를 기본으로 내보냅니다. */
export default App;