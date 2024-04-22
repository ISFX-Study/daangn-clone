/**
 * 중고거래 등록 화면
 * @date 2024.04.20
 * @author pej
 * @description
 */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
/* antd 컴포넌트 import */
import { Upload, Select, Button, Checkbox, Form, Input, Radio, Flex } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
/* 커스텀 컴포넌트 import */
import DaangnBanner from '../components/DaangnBanner';
/* Axios import */
import axios from 'axios';
/* 상수 import */
import { API_URL } from '../constants/API_URL';
import { MESSAGE } from '../constants/MESSAGE';
/* ts import */
import commonUtils from '../utils/commonUtils';
import TextArea from 'antd/es/input/TextArea';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const AddProduct: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  const [form] = Form.useForm();
  const [negoChecked, setNegoChecked] = useState(false); // 체크 여부 상태
  
  const [location, setLocation] = useState({});        // 현재 위치 
  const REST_API_KEY = 'c8cb9f9b54e0f1a86e46ee0eedd9b2ce';
  const tranHopeSpotNm = '인천시 부평구 부개동';         // 거래희망장소명

  useEffect(() => {
    // 사용자의 현재 위치를 가져오는 함수 => 공인 IP여야 결과를 받을수있다고함
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;

          // 카카오 API 호출
          const kakaoAPI = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latitude}&y=${longitude}`;
          const headersParam ={
            headers: {
              'Authorization': `KakaoAK ${REST_API_KEY}`
            }
          };
          axios.get(kakaoAPI, headersParam)
          .then(data => { // 요청이 성공했을 때 실행되는 코드
            console.log(data);
            //region_1depth_name: "지역"
            //region_2depth_name: "구이름"
            //region_3depth_name: "동이름"
          })
          .catch(error => { // 요청이 실패했을 때 실행되는 코드
            console.error('오류 발생:', error);
          });
        }, (error) => {
          console.error('위치 정보를 가져오는 데 실패했습니다.', error);
        });
      } else {
        console.error('이 브라우저는 Geolocation을 지원하지 않습니다.');
      }
    };

    // getLocation(); // 컴포넌트가 마운트될 때 사용자의 위치를 가져옴
  }, []); // 의존성 배열을 빈 배열로 지정하여 한 번만 호출되도록 함

  // 체크박스 변경 시 호출되는 함수
  const handleNegoChange = (e:any) => {
    setNegoChecked(e.target.checked); // 체크 여부에 따라 상태 업데이트
  };

  // 가격 변경 이벤트
  const onFocusPrice = (e:any) => {
    // 포커스시 콤마 포맷 제거
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    form.setFieldValue('sellPrice', e.target.value);
  };
  const onBlurPrice = (e:any) => {
    // 포커스 아웃시 콤마 포맷 적용
    e.target.value = e.target.value.replace(/[^\d]/g, '');
    form.setFieldValue('sellPrice',  commonUtils.convertNumberComma(Number(e.target.value), {showKrw: false}));
  };

  /**
   * 작성완료 버튼 클릭 이벤트
   * @date 2024.04.20
   * @author pej
   */
  const onFinish = (param:Product) => {
    // 가격제안받기 YN으로 변경
    param.negoYn = (param.negoYn) ? 'Y' : 'N';

    console.log('param:', param);

    // 여기서 서버로 데이터를 전송하거나 다른 작업을 수행합니다.
    const url = API_URL.PRODUCT_INSERT;
    axios.post(url, param)
      .then(response => { // 요청이 성공했을 때 실행되는 코드
        alert(commonUtils.getMessage('MSG_0001', ['저장이']));
      })
      .catch(error => { // 요청이 실패했을 때 실행되는 코드
        console.error('오류 발생:', error);
      });
  };
// values, errorFields, outOfDate 
  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
  };
  // 폼 레이아웃 디자인
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      // sm: {
      //   span: 14,
      // },
    },
  };
  // 폼 유효성검사 메세지
  const validateMessages = {
    required: '${label}을 적어주세요.',
    types: {
      // email: '${label} is not a valid email!',
      number: '숫자만 입력해주세요.',
    },
    number: {
      // range: '${label} must be between ${min} and ${max}',
    },
  };

  return (
    <div>
      <Flex gap="middle" justify='center' align='center'>
        <div className='form-wrap'>
          <div>
            <h2  className='form-title'>중고거래 등록</h2>
          </div>
          <Form 
              form={form}
              {...formItemLayout}
              name="productForm"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              style={{
                maxWidth: 600,
              }}
              layout="vertical"
              size="large"
              validateMessages={validateMessages}
              initialValues={{ 
                tranType: '10', 
                categoryCd: '10000', 
                tranHopeSpot: `${tranHopeSpotNm}` ,
              }}>
              <Form.Item
                name="title"
                label="제목"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                <Input placeholder='제목'/>
              </Form.Item>

              <Form.Item
                name="categoryCd"
                label="카테고리" 
                style={{ textAlign: 'left'}}>
                <Select placeholder="카테고리">
                  <Select.Option value="10000">디지털기기</Select.Option>
                  <Select.Option value="10001">생활가전</Select.Option>
                  <Select.Option value="10002">가구/인테리어</Select.Option>
                  <Select.Option value="10003">생활/주방</Select.Option>
                  <Select.Option value="10004">유아도서</Select.Option>
                  <Select.Option value="10005">여성의류</Select.Option>
                  <Select.Option value="10006">뷰티/미용</Select.Option>
                  <Select.Option value="10007">스포츠/레저</Select.Option>
                  <Select.Option value="10008">취미/게임/음반</Select.Option>
                  <Select.Option value="10009">도서</Select.Option>
                  <Select.Option value="10010">티겟/교환권</Select.Option>
                  <Select.Option value="10011">식물</Select.Option>
                  <Select.Option value="10012">가공식품</Select.Option>
                  <Select.Option value="10013">반려동물식품</Select.Option>
                  <Select.Option value="10014">기타중고물품</Select.Option>
                  <Select.Option value="10015">삽니다</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="tranType"
                label="거래방식" 
                style={{ textAlign: 'left'}}>
                <Radio.Group value={10}>
                  <Radio.Button value="10">판매하기</Radio.Button>
                  <Radio.Button value="20">나눔하기</Radio.Button>
                </Radio.Group>
              </Form.Item>
              <Form.Item 
                name="sellPrice" 
                label="가격"
                rules={[
                  {
                    required: true,
                    // type: 'number',
                    whitespace: false,
                    // transform: value => value && value.replaceAll(/[^\d]/g, ''), // 숫자 이외의 문자 제거
                  },
                  // {
                  //   validator: validateNumber,
                  // }
                ]}>
                <Input placeholder='가격을 입력해주세요'  
                    onFocus={onFocusPrice} 
                    onBlur={onBlurPrice}  />
              </Form.Item>
              <Form.Item 
                name="negoYn" 
                valuePropName="checked" 
                style={{ textAlign: 'left'}}>
                  <Checkbox  checked={negoChecked} onChange={handleNegoChange}>가격제안받기</Checkbox>
              </Form.Item>

              <Form.Item
                name="content"
                label="자세한 설명"
                rules={[
                  {
                    required: true,
                  },
                ]}>
                  <TextArea placeholder='동네에 올릴 게시글 내용을 작성해주세요.(판매 금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국인터넷진흥원과 함께 해요.'
                    rows={15}>
                  </TextArea>
              </Form.Item>

              <Form.Item label="">
                <Form.Item name="dragger" valuePropName="fileList" noStyle>
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">클릭하거나 드래그해서 사진을 등록해주세요.</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item>

              <Form.Item
                name="tranHopeSpot"
                label="거래희망장소">
                <Input readOnly={true} />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" style={{width: '600px', height: '3rem'}}>작성완료</Button>
              </Form.Item>
          </Form>
        </div>
      </Flex>
    </div>
  );
};

export default AddProduct;