import styled from 'styled-components';

export const SalaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .salary-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &-head {
      width: 100%;
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

    .salary-content-checkboxs {
      width: 100%;

      .ant-checkbox-group {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;
