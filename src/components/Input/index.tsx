import  { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Container } from './styles';

const Input = (textInputProps: TextInputProps) => {
    const { colors } = useTheme();

    return (
        <Container
            placeholderTextColor={colors.gray300}
            {...textInputProps}
        />
    );
}

export default Input;