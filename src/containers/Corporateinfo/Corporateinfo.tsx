import React, { useState } from 'react';
import { Rate, Divider } from 'antd';
import { Link } from 'react-router-dom';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { CorporateinfoWrapper } from './CustomStyled';

const Corporateinfo: React.FC = () => {
  const [isFollow, setIsFollow] = useState<number>(0);
  const FollowIcon = isFollow === 1 ? HeartFilled : HeartOutlined;
  const onChange = (value : number) => {
    setIsFollow(value);
  };
  return (
    <CorporateinfoWrapper>
      <div className="corporateinfo-content">
        <div className="corporateinfo-content-top">
          <p>My Company</p>
          <div className="corporateinfo-content-top-bookmark">
            <Rate character={<FollowIcon style={{ color: 'red' }}/>} count={1} onChange={onChange}/>
            <Link to="/favorite">Bookmark</Link>
          </div>
        </div>
        <Divider/>
        <div className="corporateinfo-content-bottom">
          <div>
            <p>Location :</p>
            <p>1-chome, Shinjuku-ku, Tokyo ▼▼ Tầng 35 tòa nhà</p>
          </div>
          <div>
            <p>Date :</p>
            <p>November 2000</p>
          </div>
        </div>
      </div>
    </CorporateinfoWrapper>
  );
};

export default Corporateinfo;
