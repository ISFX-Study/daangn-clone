export enum API_URL {
    HOME = '/',                        // 홈
    
    PRODUCT_LIST = '/productList',     // 중고거래
    ADD_PRODUCT = '/addProduct',       // 중고거래 등록
    PRODUCT_DETAIL = '/productDetail', // 중고거래 상세
    
    COMPANY_LIST = '/companyList',     // 동네업체
    PART_TIME_LIST = '/partTimeList',  // 당근알바
    HOUSE_LIST = '/houseList',         // 부동산직거래
    CAR_LIST = '/carList',             // 중고차직거래

    PRODUCT_LIST_SEARCH = '/api/prd/searchPrdouctList', // 중고거래 목록 조회
    PRODUCT_SEARCH = '/api/prd/searchPrdouct', // 중고거래  조회
    PRODUCT_INSERT = '/api/prd/addProduct', // 중고거래 등록
}