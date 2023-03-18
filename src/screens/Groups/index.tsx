import {View} from 'react-native';
import Header from '@components/Header';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Container } from './styles';
import Highlight from '@components/HighLight';

export function Groups() {

  const insets = useSafeAreaInsets();

  return (
    <Container>
      <View style={{ paddingTop: insets.top }}>
        <Header />
        <Highlight
          title="Turmas"
          subtitle='Jogue com a sua turma'/>
      </View>
    </Container>
  );
}

