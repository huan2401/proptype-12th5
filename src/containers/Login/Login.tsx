import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { LoginWrapper } from './CustomStyled';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const Login: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/reregister');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <LoginWrapper>
      <div className="login-content">
        <h1>Login</h1>
        <Form
          {...formItemLayout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Email"
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

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        <Link to="/forgetPassword">If you forgot your password,click here</Link>
      </div>
    </LoginWrapper>
  );
};

export default Login;
