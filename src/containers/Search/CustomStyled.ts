import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .search-content {
    width: 500px;

    &-head {
      background: #0404bf;
      padding: 14px 0;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;
      & > h1 {
        text-align: center;
        font-size: 20px;
        line-height: 20px;
        color: #fff;
        margin: 0;
      }
    }
  }
`;
