/**
 * 커스텀 색상 샘플 화면
 * @date 2024.03.18
 * @author pej
 * @description
 */
import { Button, ConfigProvider, Space } from 'antd';
import { AndroidFilled } from '@ant-design/icons';

const Sample: React.FC = () => (
  <ConfigProvider
    theme={{
      token: {
        // Seed Token
        colorPrimary: '#FF6F0F',
        borderRadius: 2,

        // Alias Token
        colorBgContainer: '#FF6F0F',
      },
    }}
  >
    <Space>
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type='primary' icon={ <AndroidFilled /> }></Button>
    </Space>
  </ConfigProvider>
);

export default Sample;