import { TouchableOpacityProps } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Icon, ButtonIconTypeStyleProps } from './styles';

interface Props extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonIconTypeStyleProps;
}

const ButtonIcon = ({icon, type = 'PRIMARY', ...rest}: Props) => {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    );
}

export default ButtonIcon;