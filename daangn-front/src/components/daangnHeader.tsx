/**
 * 당근 클론코딩 화면 Header
 * @date 2024.03.17
 * @author pej
 * @description antd Layout 컴포넌트 이용
 */
import { useNavigate } from 'react-router-dom';
import { Flex, Layout, Menu } from 'antd';

/* 상수 import */
import { API_URL } from '../constants/API_URL';

const { Header } = Layout;

// 메뉴 변수
const menuList = [
    { key: 1, label: '중고거래', },
    { key: 2, label: '동네업체' },
    { key: 3, label: '알바' },
    { key: 4, label: '부동산 직거래' },
    { key: 5, label: '중고차 직거래' }
];

const DaangnHeader: React.FC = () => {
    const navigate = useNavigate();

   /**
    * 메뉴 클릭 이벤트
    * @date 2024.03.23
    * @author pej
    */
    const onClickMenu = (e:any) => {
        switch (Number(e.key)) {
            case 1: // 중고거래
                navigate(API_URL.PRODUCT_LIST);
                break;
            case 2: // 동네업체
                navigate(API_URL.COMPANY_LIST);
                break;
            case 3: // 알바
                navigate(API_URL.PART_TIME_LIST);
                break;
            case 4: // 부동산 직거래
                navigate(API_URL.HOUSE_LIST);
                break;
            case 5: // 중고차 직거래
                navigate(API_URL.CAR_LIST);
                break;
            default:
                navigate(API_URL.HOME);
        }
    };

    return (
        <Header className='header-wrap'>
            <Flex className='header-area'>
                <div className="header-logo" >
                    <a href="" onClick={onClickMenu}>
                        <img src="https://png.pngtree.com/png-clipart/20220117/original/pngtree-carrot-png-image_7148643.png" 
                            className="logo" 
                            alt="당근" />
                    </a>
                </div>
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['']} // 2번째 메뉴 선택
                    items={menuList}
                    style={{ flex: 1, minWidth: 0, fontSize: '18px', fontWeight: 'bold'}}
                    onClick={onClickMenu}
                />
            </Flex>
        </Header>
    );
};
export default DaangnHeader;