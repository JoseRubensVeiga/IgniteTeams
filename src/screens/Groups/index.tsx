import {FlatList} from 'react-native';
import Header from '@components/Header';

import { Container } from './styles';
import Highlight from '@components/HighLight';
import GroupCard from '@components/GroupCard';
import { useState } from 'react';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

const Groups = () => {
  const [groups, setGroups] = useState(["Turma 01", "Turma 02"]);

  return (
    <Container>
        <Header />
        <Highlight
          title="Turmas"
          subtitle="Jogue com a sua turma"
        />

        <FlatList
          keyExtractor={(item) => item}
          data={groups}
          renderItem={({item}) => <GroupCard title={item} />}
          ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          showsVerticalScrollIndicator={false}
        />

        <Button
          title="Criar nova turma!"
        />
        
    </Container>
  );
}


export default Groups;