import { TouchableOpacity }  from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

interface Props {
    type: ButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)<Props>`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.colors.green700 : theme.colors.redDark};

    border-radius: 6px;

    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.fontSize.md}px;
        color: ${theme.colors.white};
        font-family: ${theme.fontFamily.bold};
    `}
`;

