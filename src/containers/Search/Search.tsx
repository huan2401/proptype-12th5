import React, { useState } from 'react';
import { Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router-dom';
import { SearchWrapper } from './CustomStyled';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Search: React.FC = () => {
  const [value, setValue] = useState('');
  const [options, setOptions] = useState<{ value: string }[]>([]);

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data: string) => {
    console.log('onSelect', data);
  };

  const onChange = (data: string) => {
    setValue(data);
  };
  return (
    <SearchWrapper>
      <div className="search-content">
        <div className="search-content-head">
          <h1>Search</h1>
          <AutoComplete
            options={options}
            style={{ width: '50%' }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
          />
        </div>
      </div>
    </SearchWrapper>
  );
};

export default Search;
