import { RefObject } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

export interface Props extends TextInputProps {
  inputRef: RefObject<TextInput>;
}

const Input = ({ inputRef, ...textInputProps }: Props) => {
  const { colors } = useTheme();

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={colors.gray300}
      {...textInputProps}
    />
  );
};

export default Input;
