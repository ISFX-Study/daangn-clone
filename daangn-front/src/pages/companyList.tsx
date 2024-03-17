/**
 * 동네업체 목록 화면
 * @date 2024.03.17
 * @author pej
 * @description
 */
import { Layout, theme, Flex } from 'antd';

import DaangnHeader from '../components/DaangnHeader';
import DaangnFooter from '../components/DaangnFooter';

const { Content } = Layout;

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const companyList: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <DaangnHeader />
      
      <Content>
        <Flex gap='middle' vertical={true} 
          style={{
            background: colorBgContainer,
            minHeight: 280,
            borderRadius: borderRadiusLG,
            display: 'flex',
            gap: 0
          }}>
            <div>동네업체</div>
         </Flex>
      </Content>
      
      <DaangnFooter />

    </Layout>
  );
};

export default companyList;