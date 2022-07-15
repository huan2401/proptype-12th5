import React, { useState } from 'react';
import { Button, Space, Row, Col } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { NewmemberWrapper } from './CustomStyled';

const Newmember: React.FC = () => {
  const history = useHistory();
  return (
    <NewmemberWrapper>
      <div className="newmember-content">
        <h1>New member registration</h1>
        <div className="newmember-desc">
          <Space size={50}>
            <p>Email</p>
            <p>Bắt buộc để đăng ký Trường nhập thông tin</p>
          </Space>
          <Space size={50}>
            <p>Password</p>
            <p>Bắt buộc để đăng ký Trường nhập thông tin</p>
          </Space>
          <Space size={50}>
            <p>Address</p>
            <p>Bắt buộc để đăng ký Trường nhập thông tin</p>
          </Space>
        </div>
        <div>
          <Link to="/login">Login</Link>
        </div>
        <Button type="primary" onClick={() => history.push('/reregister')}>
          Register
        </Button>
      </div>
    </NewmemberWrapper>
  );
};

export default Newmember;
