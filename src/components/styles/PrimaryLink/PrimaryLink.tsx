import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PrimaryLink = styled(Link)`
  color: ${({ theme }) => theme?.color || '#000000'};
  margin-bottom: 10px;
  font-weight: bold;
  &:hover {
    color: ${({ theme }) => theme.hover};
  }
`;

export default PrimaryLink;