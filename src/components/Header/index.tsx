import { Container, Logo, BackButton, BackIcon } from './styles';

import logoImg from '@assets/logo.png'

interface Props {
    showBackButton?: boolean;
}

const Header = ({showBackButton = false}: Props) => (
    <Container>
        {
            showBackButton &&
            <BackButton>
                <BackIcon />
            </BackButton>
        }
        
        <Logo source={logoImg} />
    </Container>
);

export default Header;