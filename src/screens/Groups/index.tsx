import { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import Header from '@components/Header';
import { Container } from './styles';
import Highlight from '@components/HighLight';
import GroupCard from '@components/GroupCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import groupsGetAll from '@storage/group/groupsGetAll';

const Groups = () => {
  const navigation = useNavigation();
  const [groups, setGroups] = useState([]);

  function handleNewGroup(): void {
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try {
      setGroups(await groupsGetAll());
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        keyExtractor={(item) => item}
        data={groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Criar nova turma!" onPress={handleNewGroup} />
    </Container>
  );
};

export default Groups;
