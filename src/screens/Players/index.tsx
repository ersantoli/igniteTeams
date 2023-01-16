import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { ButtonIcon } from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import React, { useState } from "react";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, Text } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import theme from "src/theme";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playersGetByGroup } from "@storage/players/playergetByGroup";
import AsyncStorage from "@react-native-async-storage/async-storage";



type RouteParams = {
    group: string;
}

export function Players() {

    const [newPlayerName, setNewPlayerName] = useState('');
    const [team, setTeam] = useState('Time A');
    const [players, setPlayers] = useState([]);
    const route = useRoute();
    const { group } = route.params as RouteParams;

    async function handleAddPlayer() {

        if (newPlayerName.trim().length === 0) {

            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa para adicionar')
        }
        const newPlayer = {

            name: newPlayerName,
            team,
        }

       try {
         playerAddByGroup(newPlayer, group);
            const players = await playersGetByGroup(group);
           console.log(players);

        }catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message);
            } else {
                console.log(error);
                Alert.alert('Nova pessoa', 'Nao foi possivel adicionar error#5871');
               
            }
            }
           
        }


   
    return (
        <Container>

            <Header showBackButton />

            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />

            <Form>
                <Input
                    onChangeText={setNewPlayerName}
                    placeholder="Nome da Pessoa"
                    autoCorrect={false}
                />

                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>

            <HeaderList>
                <FlatList
                    data={['Time A', 'Time B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>
                    {players.length}
                </NumbersOfPlayers>
            </HeaderList>

            <FlatList
                data={players}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <PlayerCard
                        name={item}
                        onRemove={() => { }}

                    />

                )}

                ListEmptyComponent={() => (
                    <ListEmpty
                        message="Time vazio"
                    />
                )}

                showsVerticalScrollIndicator={false}
                contentContainerStyle={[{ paddingBottom: 100 }, players.length === 0 && { flex: 1 }]}
            />

            {/* ERROR*/}
            <Button
                title="Remover Turma"
                type="SECONDARY"
            />


        </Container>
    );
}

function playerAddByGroup(newPlayer: { name: string; team: string; }, group: string) {
    throw new Error("Function not implemented.");
    
}
