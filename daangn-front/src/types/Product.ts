type Product = {
    productCd: number;  // 상품번호
    alt: string;
    imageUrl: string;
    title: string;      // 글제목
    content: string,    // 상세내용
    sellPrice: number;  // 판매가
    tranHopeSpot: string;
    likeCnt: number;    // 관심건수
    chatCnt: number;    // 채팅건수
    negoYn: string,     // 가격제안받기
    status: number,     // 상태
  };