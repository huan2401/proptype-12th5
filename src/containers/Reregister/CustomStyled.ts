import styled from 'styled-components';

export const ReregisterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .reregister-content {
    width: 500px;

    .ant-form-item-control-input-content {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-row.ant-form-item {
      flex-direction: column;

      .ant-col.ant-form-item-label {
        text-align: left !important;
      }
    }
  }
`;
