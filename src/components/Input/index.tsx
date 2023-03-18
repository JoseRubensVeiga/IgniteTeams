import  { TextInputProps } from 'react-native';

import { Container } from './styles';

const Input = (textInputProps: TextInputProps) => {
    return (
        <Container {...textInputProps} />
    );
}

export default Input;