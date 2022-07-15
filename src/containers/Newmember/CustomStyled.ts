import styled from 'styled-components';

export const NewmemberWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .newmember-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    h1 {
      margin: 0;
    }

    .newmember-desc {
      width: 100%;
    }
  }
`;
