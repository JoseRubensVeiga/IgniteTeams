import styled from 'styled-components';
import { TextInput } from 'react-native';

export const Container = styled(TextInput)`
    flex: 1;

    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme}) =>  theme.colors.gray700};
    color: ${({theme}) =>  theme.colors.white};

    font-family: ${({theme}) =>  theme.fontFamily.regular};
    font-size: ${({theme}) =>  theme.fontSize.md}px;

    border-radius: 6px;
    padding: 16px;
`;