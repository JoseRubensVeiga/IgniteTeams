import { FlatList } from 'react-native';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { useState } from 'react';
import PlayerCard from '@components/PlayerCard';
import ListEmpty from '@components/ListEmpty';
import Button from '@components/Button';

const Players = () => {

    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState(["Pessoa A", "Pessoa B", "Pessoa C", "Pessoa D", "Pessoa E", "Pessoa F", "Pessoa G"]);

    return (
        <Container>
            <Header showBackButton />

            <Highlight
                title="Nome da Turma"
                subtitle="Adicione a galera e separe os times"
            />

            <Form>  
                <Input
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon icon="add"/>
            </Form>

            <HeaderList>
                <FlatList
                    data={["Time A", "Time B"]}
                    keyExtractor={item => item}
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
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => {}}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => <ListEmpty message="Não há pessoas nesse time"/>}
                contentContainerStyle={players.length === 0 ? {flex: 1} : {paddingBottom: 50}}
            />

            <Button title="Remover Turma" type='SECONDARY'/>
        </Container>
    );
}

export default Players;