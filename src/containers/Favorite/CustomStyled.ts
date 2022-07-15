import styled from 'styled-components';

export const FavoriteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 20px;

  .favorite-content {
    width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;

    .favorite-content-company-list {

      .favorite-content-company-item {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        cursor: pointer;
        .company-item-img {
          width: 200px;
          height: 100px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        .company-item-desc {

        }
      }
    }
  }
`;
