import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { ComporisonWrapper } from './CustomStyled';

const Comporison: React.FC = () => {
  return (
    <ComporisonWrapper>
      <div className="comporison-content">
        <Button type="primary">Compare button</Button>
        <div>
          <p>Salary</p>
          <p>Overtime hours</p>
          <p>Rate obtained when taking time off from childcare</p>
          <p>Percentage of taking time off from childcare work</p>
        </div>
      </div>
    </ComporisonWrapper>
  );
};

export default Comporison;
