import styled, { css } from 'styled-components/native';
import { TouchableOpacity} from 'react-native';
import { UsersThree } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({theme}) => theme.colors.gray500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 30px;
  margin-bottom: 12px;
`;


export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.fontSize.md}px;
        color: ${theme.colors.gray200};
        font-family: ${theme.fontFamily.regular};
    `}
`;


export const Icon = styled(UsersThree).attrs(({theme}) => ({
    size: 32,
    color: theme.colors.green700,
    weight: 'fill'
}))`
    margin-right: 20px;
`;

