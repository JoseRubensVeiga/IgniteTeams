import { useState, useEffect, useRef } from 'react';

import { Alert, FlatList, TextInput } from 'react-native';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import playerAddByGroup from '@storage/player/playerAddByGroup';
import { playerGetByGroupAndTeam } from '@storage/player/playerGetByGroupAndTeam';
import { PlayerStorageDTO } from '@storage/player/PlayerStorageDTO';
import { playerRemoveFromTeam } from '@storage/player/playerRemoveFromTeam';
import { groupRemoveByName } from '@storage/group/groupRemoveByName';

interface RouteParams {
  group: string;
}

const Players = () => {
  const [newPlayerName, setNewPlayerName] = useState('');

  const [team, setTeam] = useState('Time A');

  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

  const newPlayerNameInputRef = useRef<TextInput>();

  const route = useRoute();

  const { group } = route.params as RouteParams;

  const navigation = useNavigation();

  async function handleAddPlayer() {
    if (newPlayerName.trim().length === 0) {
      return Alert.alert(
        'Nova pessoa',
        'Informe o nome da pessoa para adicionar.'
      );
    }

    const newPlayer = {
      name: newPlayerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);

      newPlayerNameInputRef.current.blur();
      setNewPlayerName('');
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Nova pessoa', error.message);
      } else {
        console.log(error);
        Alert.alert('Nova pessoa', 'Não foi possível adicionar.');
      }
    }
  }

  async function fetchPlayersByTeam() {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(group, team);

      setPlayers(playersByTeam);
    } catch (error) {
      console.error(error);

      Alert.alert('Pessoas', 'Não foi possível obter as pessoas do time.');
    }
  }

  async function handleRemovePlayer(name: string) {
    try {
      const players = await playerRemoveFromTeam(name, group, team);

      setPlayers(players);
    } catch (error) {
      console.error(error);

      Alert.alert('Pessoas', 'Não foi possível remover essa pessoa do time.');
    }
  }

  async function removeGroup() {
    await groupRemoveByName(group);

    navigation.navigate('groups');
  }

  async function handleRemoveGroup() {
    try {
      Alert.alert('Remover', 'Deseja remover esse grupo?', [
        { text: 'Não', style: 'cancel' },
        {
          text: 'Sim',
          onPress: () => removeGroup(),
        },
      ]);
    } catch (error) {
      console.error(error);

      Alert.alert('Grupo', 'Não foi possível remover esse grupo.');
    }
  }

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          inputRef={newPlayerNameInputRef}
          placeholder="Nome da pessoa"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={['Time A', 'Time B']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActivated={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handleRemovePlayer(item.name)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
        contentContainerStyle={
          players.length === 0 ? { flex: 1 } : { paddingBottom: 50 }
        }
      />

      <Button
        title="Remover Turma"
        type="SECONDARY"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
};

export default Players;
