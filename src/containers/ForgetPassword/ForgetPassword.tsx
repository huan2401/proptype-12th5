import React from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { ForgetPasswordWrapper } from './CustomStyled';

const ForgetPassword: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <ForgetPasswordWrapper>
      <div className="forgetPassword-content">
        <h1>登録しているメールアドレスを入力してください</h1>
        <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            // label="Email"
            name="email"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Link to="/reregister">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Link>
          </Form.Item>
        </Form>
      </div>
    </ForgetPasswordWrapper>
  );
};

export default ForgetPassword;
