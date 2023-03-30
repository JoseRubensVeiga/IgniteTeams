import { Container, Logo, BackButton, BackIcon } from './styles';

import logoImg from '@assets/logo.png';
import { useNavigation } from '@react-navigation/native';

interface Props {
  showBackButton?: boolean;
}

const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation();

  function handleGoBack(): void {
    navigation.navigate('groups');
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
