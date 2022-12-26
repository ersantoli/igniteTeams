import { Header } from "@components/Header";
import { Button} from "@components/Button";
import { ButtonIcon} from "@components/ButtonIcon";
import { Highlight } from "@components/Highlight";
import React, { useState } from "react";
import { Container, Form, HeaderList,NumbersOfPlayers } from "./styles";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import {  FlatList, Text } from "react-native";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import theme from "src/theme";


export function Players(){
   
   const [team, setTeam] = useState('Time A')
   const [players, setPlayers] =useState([])
    return(
        <Container>
            
<Header showBackButton />

<Highlight 
title="Nome da turma"
subtitle="Adicione a galera e separe os times"
/>

<Form>
<Input
placeholder="Nome da Pessoa"
autoCorrect={false}
/>

<ButtonIcon
 icon="add"
 />
</Form>

<HeaderList>
<FlatList 
data={['Time A', 'Time B']}
keyExtractor={item=> item}
renderItem={({ item }) => (
    <Filter
    title= {item}
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

ListEmptyComponent={()=> (
    <ListEmpty
    message="Time vazio"
    />
)}

showsVerticalScrollIndicator={false}
contentContainerStyle={[{paddingBottom:100}, players.length === 0 && {flex : 1}]}
/>

{/* ERROR
<Button 
title="Remover Turma"
type="SECONDARY"

 />
 */}
 
 </Container>
    );
}