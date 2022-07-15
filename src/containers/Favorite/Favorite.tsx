import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { FavoriteWrapper } from './CustomStyled';

const Favorite: React.FC = () => {
  return (
    <FavoriteWrapper>
      <div className="favorite-content">
        <Button type="primary">Compare Button</Button>
        <Link to="/">Click here and you can choose detail item</Link>
        <div className="favorite-content-company-list">
          <div className="favorite-content-company-item">
            <div className="company-item-img">
              <img
                src="https://toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image.jpg"
                alt="#"
              />
            </div>
            <div className="company-item-desc">Company Item Description</div>
          </div>
        </div>
      </div>
    </FavoriteWrapper>
  );
};

export default Favorite;
