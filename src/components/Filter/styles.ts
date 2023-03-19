import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export interface FilterStyleProps {
    isActivated?: boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
    ${({theme, isActivated}) => isActivated && css`
        border: 1px solid ${theme.colors.green700};
    `}

    border-radius: 4px;
    margin-right: 12px;

    height: 38px;
    width: 70px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.fontFamily.bold};
        font-size: ${theme.fontSize.sm}px;
        color: ${theme.colors.white};
    `}
`;