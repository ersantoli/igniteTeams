import { Container } from './styles';
import { Header } from '@components/Header';
import React from 'react';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';



export function Groups() {
const [groups, setGroups] = useState<string[]>([])

  return (
  
      <Container>
       <Header />
       <Highlight title={'Turmas'} subtitle={'Jogue com a galera'} />
      
       <FlatList
       data={groups}
       keyExtractor={item => item}
       renderItem={({ item} )=> (

        <GroupCard 
        title={item}
        />
       )}
       contentContainerStyle={groups.length === 0 && {flex:1}}
       ListEmptyComponent={() => (
       <ListEmpty
        message='Lista vazia, Favor cadastrar a 1° turma'
       />
       )}
       
       />
       <Button
       title="Criar novas turmas"
       
       />
    
      </Container>
    
     
   
  );
}

