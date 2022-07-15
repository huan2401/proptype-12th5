import styled from 'styled-components';

export const CorporateinfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .corporateinfo-content {
    width: 500px;

    .corporateinfo-content-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      p {
        margin: 0;
      }
      .corporateinfo-content-top-bookmark {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .corporateinfo-content-bottom {

      & > div {

        p:first-child {
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }
`;
