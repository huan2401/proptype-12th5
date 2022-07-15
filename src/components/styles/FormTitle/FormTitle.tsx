import styled from 'styled-components';

const FormTitle = styled.h1`
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

export default FormTitle;
