/**
 * 중고거래 등록 화면
 * @date 2024.04.20
 * @author pej
 * @description
 */
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'
/* antd 컴포넌트 import */
import { Upload, Select, Button, Checkbox, Form, Input, Radio, message } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
/* Axios import */
import axios from 'axios';
/* 상수 import */
import { API_URL } from '../constants/API_URL';
/* ts import */
import commonUtils from '../utils/commonUtils';
import TextArea from 'antd/es/input/TextArea';

/* 컴포넌트를 정의. 함수 컴포넌트 형식으로 작성되었고, React.FC를 사용하여 컴포넌트의 타입을 지정 */
const AddProduct: React.FC = () => {
  // React.FC : React 함수 컴포넌트의 타입을 정의시 TypeScript에서 사용되는 타입
  const [form] = Form.useForm();

  /**
   * 작성완료 버튼 클릭 이벤트
   * @date 2024.04.20
   * @author pej
   */
  const onFinish = (values:Product) => {
    console.log('param:', values);
    // 여기서 서버로 데이터를 전송하거나 다른 작업을 수행합니다.
    const url = API_URL.PRODUCT_INSERT;
    axios.post(url)
      .then(response => { // 요청이 성공했을 때 실행되는 코드
        debugger
        alert('저장 성공');
      })
      .catch(error => { // 요청이 실패했을 때 실행되는 코드
        console.error('오류 발생:', error);
      });
  };
// values, errorFields, outOfDate 
  const onFinishFailed = (errorInfo: any) => {
    console.error('Failed:', errorInfo);
    message.error('저장시 오류가 발생했습니다. 다시 시도해주세요.');
  };


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
      sm: {
        span: 14,
      },
    },
  };

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
    <div style={{
            marginTop: '66px', 
            // textAlign: 'center', 
            // height: '100vh'
          }}>
      <div style={{
              //  display: 'inline-block',
              //  verticalAlign: 'middle', 
              //  width: '885px'
            }}>
        <h2 style={{padding: '20px', textAlign: 'left'}}>
          중고 거래 등록
        </h2>
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
          initialValues={{ tranType: '10', categoryCd: '10000' }}
        >
        <Form.Item
          name="title"
          label="제목"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder='제목'/>
        </Form.Item>

        <Form.Item
            name="categoryCd"
            label="카테고리"
          >
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
          >
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
              type: 'number',
            },
          ]}
          >
          <Input placeholder='가격을 입력해주세요'/>
        </Form.Item>
        
        <Form.Item
          name="content"
          label="자세한 설명"
          rules={[
            {
              required: true,
            },
          ]}>
            <TextArea placeholder='동네에 올릴 게시글 내용을 작성해주세요. (판매 금지 물품은 게시가 제한될 수 있어요.) 신뢰할 수 있는 거래를 위해 자세히 적어주세요. 과학기술정보통신부, 한국인터넷진흥원과 함께 해요.'
              rows={20}
              >
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

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{width: '346px', height: '50px'}}>작성완료</Button>
        </Form.Item>
    </Form>

      
      </div>
    </div>
  );
};

export default AddProduct;