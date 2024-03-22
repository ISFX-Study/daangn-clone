/**
 * 당근 클론코딩 화면 Footer
 * @date 2024.03.17
 * @author pej
 * @description antd Layout 컴포넌트 이용
 */
import { Layout, Flex} from 'antd';

const { Footer } = Layout;

// 하단 메뉴
const footerMenuList1 = [
    { key: 0, label: '메뉴' },
    { key: 1, label: '중고거래' },
    { key: 2, label: '동네업체' },
    { key: 3, label: '당근알바' },
    { key: 4, label: '부동산 직거래' },
    { key: 5, label: '중고차 직거래' },
];
const footerMenuList2 = [
    { key: 0, label: '서비스' },
    { key: 1, label: '당근비즈니스', link: 'https://business.daangn.com/' },
    { key: 2, label: '채팅하기', link: 'https://chat.daangn.com/onboarding' },
    { key: 3, label: '자주 묻는 질문', link: 'https://cs.kr.karrotmarket.com/wv/faqs' },
];
const footerMenuList3 = [
    { key: 0, label: '회사' },
    { key: 1, label: '회사 소개', link: 'https://about.daangn.com/' },
    { key: 2, label: '인재 채용', link: 'https://about.daangn.com/jobs/' },
];
const footerMenuList4 = [
    { key: 0, label: '문의' },
    { key: 1, label: '제휴 문의', link: 'pej4303@naver.com' },
    { key: 2, label: '광고 문의', link: 'pej4303@naver.com' },
    { key: 3, label: 'PR 문의', link: 'pej4303@naver.com' },
    { key: 4, label: 'IR 문의', link: 'pej4303@naver.com' },
];

/*  컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const daangnFooter: React.FC = () => {
    // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
    // 메뉴 변수
    return (
        <Footer style={{ padding: '0 0'}}>
            <Flex gap="middle" vertical={true} className='footer-wrap'>
                <Flex gap="230px" justify='center' className='footer-area1'>
                    <Flex vertical={true} align='flex-start'>
                        {
                            footerMenuList1.map(item => (
                                <div key={item.key} className='footer-menu'>
                                   {item.key === 0 ? ( <span style={{fontSize: '18px'}}>{item.label}</span>) : ( <a href='#' target="_blank">{item.label}</a>)}
                                </div>
                            ))
                        }
                    </Flex>
                    <Flex vertical={true} align='flex-start'>
                        {
                            footerMenuList2.map(item => (
                                <div key={item.key} className='footer-menu'>
                                    {item.key === 0 ? ( <span style={{fontSize: '18px'}}>{item.label}</span>) : ( <a href={item.link} target="_blank">{item.label}</a>)}
                                </div>
                            ))
                        }
                    </Flex>
                    <Flex vertical={true} align='flex-start'>
                        {
                            footerMenuList3.map(item => (
                                <div key={item.key} className='footer-menu'>
                                    {item.key === 0 ? ( <span style={{fontSize: '18px'}}>{item.label}</span>) : ( <a href={item.link} target="_blank">{item.label}</a>)}
                                </div>
                            ))
                        }
                    </Flex>
                    <Flex vertical={true} align='flex-start'>
                        {
                            footerMenuList4.map(item => (
                                <div key={item.key} className='footer-menu'>
                                    {item.key === 0 ? ( <span style={{fontSize: '18px'}}>{item.label}</span>) : ( <a href={`mailto:${item.link}`}>{item.label}</a>)}
                                </div>
                            ))
                        }
                    </Flex>
                </Flex>

                <Flex gap="middle" vertical={true} align='flex-start' className='footer-area2'>
                    <div> 
                        <span className='footer-item-title'>대표</span><span>김용현, 황도연</span> &nbsp;| &nbsp;
                        <span className='footer-item-title'>사업자번호 </span><span>375-87-00088</span>
                    </div>
                    <div>
                        <span className='footer-item-title'>직업정보제공사업 신고번호 </span><span> J1200020200016</span>
                    </div>
                    <div>
                        <span className='footer-item-title'>주소 </span><span>서울특별시 구로구 디지털로30길 28, 609호(당근서비스)</span> 
                    </div>
                    <div>
                        <span className='footer-item-title'>전화 </span><span>1544-9796</span>&nbsp;| &nbsp;
                        <span className='footer-item-title'>고객문의 </span><span>cs@daangnservice.com</span>
                    </div>
                </Flex>
                <Flex gap="middle" justify='flex-start' align='flex-start' className='footer-area3'>
                    <div><a href='https://www.daangn.com/policy/terms' target="_blank">이용약관</a></div>
                    <div><a href='https://privacy.daangn.com/' target="_blank">개인정보처리방침</a></div>
                    <div><a href='https://www.daangn.com/policy/location' target="_blank">위치기반서비스 이용약관</a></div>
                    <div><a href='https://www.daangn.com/wv/faqs/3994' target="_blank">이용자보호 비전과 계획</a></div>
                    <div><a href='https://www.daangn.com/wv/faqs/9010' target="_blank">청소년보호정책</a></div>
                </Flex>
            </Flex>
        </Footer>
    );
};
/* 컴포넌트를 기본으로 내보냅니다. */
export default daangnFooter;