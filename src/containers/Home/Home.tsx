import React from 'react';
import { Button, Divider } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { HomeWrapper, FavoriteItem } from './CustomStyled';

const ForgetPassword: React.FC = () => {
  const history = useHistory();
  return (
    <HomeWrapper>
      <div className="home-content">
        <div className="home-content-top">
          <div className="home-content-top-left">
            <Button
              type="primary"
              onClick={() =>
                window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
              }
            >
              My STO
            </Button>
          </div>
          <div className="home-content-top-right">
            <Link to="/login">Login |</Link>
            <Link to="/">Bookmark List |</Link>
            <Link to="/">My page |</Link>
            <Link to="/favorite">Annual income simulation</Link>
          </div>
        </div>
        <Divider />
        <div className="home-content-bottom">
          <div className="home-content-bottom-top">
            <Link to="/search">Job Search</Link>
            <Link to="/reregister">New member registration</Link>
          </div>
          <div className="home-content-bottom-favorite">
            <FavoriteItem onClick={() => history.push('/favorite')}>
              <span>Favorite Item</span>
              <span>Favorite Item Description</span>
            </FavoriteItem>
          </div>
        </div>
      </div>
    </HomeWrapper>
  );
};

export default ForgetPassword;
