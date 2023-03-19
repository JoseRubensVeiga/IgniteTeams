import { TouchableOpacityProps } from 'react-native';
import { Container, FilterStyleProps, Title } from './styles';

interface Props extends TouchableOpacityProps, FilterStyleProps {
    title: string;
}

const Filter = ({title, isActivated = false, ...rest}: Props) => {

    return (
        <Container isActivated={isActivated}  {...rest}>
            <Title>{title}</Title>
        </Container>
    );
}

export default Filter;