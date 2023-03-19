import { FlatList } from 'react-native';
import ButtonIcon from '@components/ButtonIcon';
import Filter from '@components/Filter';
import Header from '@components/Header';
import Highlight from '@components/HighLight';
import Input from '@components/Input';

import { Container, Form, HeaderList, NumberOfPlayers } from './styles'
import { useState } from 'react';

const Players = () => {

    const [team, setTeam] = useState("Time A");
    const [players, setPlayers] = useState([]);

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
        </Container>
    );
}

export default Players;