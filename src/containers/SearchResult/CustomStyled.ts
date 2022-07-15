import styled from 'styled-components';

export const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  gap: 20px;

  .searchResult {
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .searchResult-search {
      width: 500px;
    }

    .searchResult-content {
      width: 100%;
      margin-top: 30px;

      .searchResult-content-title {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .searchResult-content-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        margin-bottom: 20px;
        .content-item-img {
          width: 200px;
          height: 100px;
          overflow: hidden;
          img {
            width: 100%;
            height: 100%;
          }
        }

        .content-item-title {

        }
      }
    }
  }
`;
