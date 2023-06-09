import { TouchableOpacityProps } from 'react-native';
import { ButtonTypeStyleProps, Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
    title: string;
    type?: ButtonTypeStyleProps;
}

const Button = ({title, type = 'PRIMARY', ...rest}: Props) => {
    return (
        <Container {...rest} type={type} >
            <Title>{title}</Title>
        </Container>
    );
}

export default Button;