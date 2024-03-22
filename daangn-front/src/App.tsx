/* react-ruuter 불러오기 */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
/* css import */
import './App.css';
import './styles/layout.css'
import './styles/componet.css'

/* 컴포넌트 import */
import DaangnLayout from './components/DaangnLayout';

/* 페이지 불러오기 */
import Main from './pages/main';
import ProductList from './pages/productList';  // 중고거래
import CompanyList from './pages/companyList';  // 동네업체
import PartTimeList from './pages/partTimeList';  // 알바
import HouseList from './pages/houseList';  // 부동산직거래
import CarList from './pages/carList';  // 중고차직거래
import Sample from './pages/sample';

/**
 * 해당 함수가 react 컴포넌트라는 것을 타입스크립트로 설정
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DaangnLayout>
        <Routes>
          <Route path="/" element={<Main />}  />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/companyList" element={<CompanyList />} />
          <Route path="/partTimeList" element={<PartTimeList />} />
          <Route path="/houseList" element={<HouseList />} />
          <Route path="/carList" element={<CarList />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </DaangnLayout>
    </BrowserRouter>
  );
}
export default App;