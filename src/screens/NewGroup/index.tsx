import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Container, Content, Icon } from './styles';

const NewGroup = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  function handleNew(): void {
    navigation.navigate('players', { group });
  }

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie uma turma para adicionar pessoas"
        />

        <Input
          placeholder="Nome da Turma"
          onChangeText={setGroup}
          value={group}
        />

        <Button title="Criar" style={{ marginTop: 20 }} onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
