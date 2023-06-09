import styled from 'styled-components/native';

export const Container = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.gray700};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green700,
  size: 'large',
}))``;