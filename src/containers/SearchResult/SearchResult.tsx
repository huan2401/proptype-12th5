import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { SearchResultWrapper } from './CustomStyled';

const SearchResult: React.FC = () => {
  const [options, setOptions] = useState<any>([]);
  const { Search } = Input;
  const onSearch = (value: any) => {
    console.log('value', value);
  };
  const onChange = (e: any) => {
    console.log('onChange', e.target.value);
    setOptions(e.target.value ? [...e.target.value] : []);
  };
  console.log('options', options);
  // const searchResult = (query: string) => {
  //   console.log('query', query);

  //   return [
  //     {
  //       value: query,
  //       label: (
  //         <div
  //           style={{
  //             display: 'flex',
  //             justifyContent: 'space-between',
  //           }}
  //         >
  //           <span>{query}</span>
  //           <span>{query.length} result</span>
  //         </div>
  //       ),
  //     },
  //   ];
  // };
  // const [options, setOptions] = useState<any>([]);
  // console.log('option', options);
  // const handleSearch = (value: string) => {
  //   setOptions(value ? searchResult(value) : []);
  // };

  // const onSelect = (value: string) => {
  //   console.log('onSelect', value);
  // };
  return (
    <SearchResultWrapper>
      <div className="searchResult">
        <div className="searchResult-search">
          {/* <AutoComplete
            dropdownMatchSelectWidth={252}
            style={{ width: '100%' }}
            options={options}
            onSelect={onSelect}
            onSearch={handleSearch}
          >
            <Input.Search size="large" placeholder="search" enterButton />
          </AutoComplete> */}
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
            onChange={onChange}
          />
        </div>
        <div className="searchResult-content">
          {/* <div className="searchResult-content-title">
            <p>12 result</p>
          </div> */}
          {options.map((item: any, index: any) => {
            return (
              <div className="searchResult-content-item" key={index}>
                <div className="content-item-img">
                  <img
                    src="https://toponseek.com/blogs/wp-content/uploads/2019/06/toi-uu-hinh-anh-optimize-image.jpg"
                    alt="#"
                  />
                </div>
                <div className="content-item-title">
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Fugiat non dolorem enim, neque a sit dolorum libe
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SearchResultWrapper>
  );
};

export default SearchResult;
