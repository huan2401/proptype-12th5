import React, { useState } from 'react';
import { Input, AutoComplete, Checkbox } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { SalaryWrapper } from './CustomStyled';

const mockVal = (str: string, repeat = 1) => ({
  value: str.repeat(repeat),
});
const Search: React.FC = () => {
  const history = useHistory();
  const searchResult = (query: string) => {
    return [
      {
        value: query,
        label: (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
            onClick={() => history.push('/search-result')}
          >
            <span>{query}</span>
            <span>{query.length} result</span>
          </div>
        ),
      },
    ];
  };
  const [options, setOptions] = useState<any>([]);
  const handleSearch = (value: string) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value: string) => {
    console.log('onSelect', value);
  };

  function onChange(checkedValues: any) {
    console.log('checked = ', checkedValues);
  }

  const onSearch = (searchText: string) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const plainOptions = ['Apple', 'Pear', 'Orange', 'Banana', 'Test'];

  return (
    <SalaryWrapper>
      <div className="salary-content">
        <div className="salary-content-head">
          <h1>Search</h1>
          <AutoComplete
            options={options}
            style={{ width: '50%' }}
            onSelect={onSelect}
            onSearch={onSearch}
            placeholder="input here"
          />
        </div>
        <div className="salary-content-checkboxs">
          <Checkbox.Group
            options={plainOptions}
            defaultValue={['Apple']}
            onChange={onChange}
          />
        </div>
      </div>
    </SalaryWrapper>
  );
};

export default Search;
