import styled from 'styled-components/native';

interface Props {
    paddingTop: number;
  }

export const Container = styled.View<Props>`
  padding-top: ${({paddingTop}) => paddingTop}px;
  background-color: ${({theme}) => theme.colors.gray600}
`;