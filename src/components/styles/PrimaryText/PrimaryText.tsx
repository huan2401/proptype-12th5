import styled from 'styled-components';

const PrimaryText = styled.div<{ display?: string, alignItems?: string, marginLeft?: string }>`
  margin-bottom: 10px;
  font-weight: bold;
  .primaryText{
    margin-left: ${({ marginLeft }) => marginLeft ? marginLeft : '8px'};
    color: ${(({ theme }) => theme.colors.primaryColor)}
  }
  display: ${({ display }) => display};
  align-items: ${({ alignItems }) => alignItems};
`;

export default PrimaryText;
