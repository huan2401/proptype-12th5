import styled from 'styled-components';
import { Button } from 'antd';

const Container = styled(Button)`
    background-color: transparent;
    color: ${(({ theme }) => theme.colors.primaryColor)};
    &:hover, &:focus {
        background-color: transparent;
        color: ${(({ theme }) => theme.colors.primaryColor)};
    }
`;

export default Container;
