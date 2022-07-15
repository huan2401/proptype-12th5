import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import { FinishWrapper } from './CustomStyled';

const Finish: React.FC = () => {
  return (
    <FinishWrapper>
      <div>
        <p>
          Thank you for your registration. This registration has been completed.
        </p>
      </div>
      <Link to="/">
        <Button type="primary">Return to Home</Button>
      </Link>
    </FinishWrapper>
  );
};

export default Finish;
