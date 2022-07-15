import styled from 'styled-components';

export const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .home-content {
    width: 500px;

    .home-content-top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .home-content-top-left {
      }
      .home-content-top-right {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }

    .home-content-bottom {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 30px;
      .home-content-bottom-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .home-content-bottom-favorite {
      }
    }
  }
`;

export const FavoriteItem = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
`;
