import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import { Container, Content, Icon } from './styles';
import groupCreate from '@storage/group/groupCreate';

const NewGroup = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      console.log(error);
    }
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
