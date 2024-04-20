/* react-ruuter 불러오기 */
import {BrowserRouter, Routes, Route} from 'react-router-dom';
/* css import */
import './App.css';
import './styles/layout.css'
import './styles/componet.css'

/* 컴포넌트 import */
import DaangnLayout from './components/DaangnLayout';

/* 페이지 불러오기 */
import Home from './pages/home';

import ProductList from './pages/productList';  // 중고거래
import AddProduct from './pages/addProduct';

import CompanyList from './pages/companyList';  // 동네업체
import PartTimeList from './pages/partTimeList';  // 알바
import HouseList from './pages/houseList';  // 부동산직거래
import CarList from './pages/carList';  // 중고차직거래

import Sample from './pages/sample';

/* 상수 import */
import { API_URL } from './constants/API_URL';
import ProductDetail from './pages/productDetail';

/**
 * 해당 함수가 react 컴포넌트라는 것을 타입스크립트로 설정
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <DaangnLayout>
        <Routes>
          <Route path={API_URL.HOME} element={<Home />}  />
          <Route path={API_URL.ADD_PRODUCT} element={<AddProduct />}  />
          <Route path={API_URL.PRODUCT_LIST} element={<ProductList />} />
          <Route path={API_URL.PRODUCT_DETAIL} element={<ProductDetail />} />
          <Route path={API_URL.COMPANY_LIST} element={<CompanyList />} />
          <Route path={API_URL.PART_TIME_LIST} element={<PartTimeList />} />
          <Route path={API_URL.HOUSE_LIST} element={<HouseList />} />
          <Route path={API_URL.CAR_LIST} element={<CarList />} />
          <Route path="/sample" element={<Sample />} />
        </Routes>
      </DaangnLayout>
    </BrowserRouter>
  );
}
export default App;