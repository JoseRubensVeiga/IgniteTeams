import { useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Button from '@components/Button';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';

import groupCreate from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';

import { Container, Content, Icon } from './styles';

const NewGroup = () => {
  const navigation = useNavigation();
  const [group, setGroup] = useState('');

  async function handleNew() {
    try {
      await groupCreate(group);
      navigation.navigate('players', { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Ops!', error.message);
      } else {
        Alert.alert('Ops!', 'Não foi possível criar este grupo.');
      }
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
