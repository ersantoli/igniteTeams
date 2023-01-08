import { useState,useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { groupsGetAll } from '@storage/group/groupsGetAll';
import { Container } from './styles';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';

import { ListEmpty } from '@components/ListEmpty';
import { GroupCard } from '@components/GroupCard';
import React from 'react';
import { Content, Icon } from './NewGroup/styles';

//import { groupCreate } from 'src/Storage/Group/groupCreate';





export function Groups() {
const [groups, setGroups] = useState<string[]>([]);

const navigation = useNavigation();


function handleNewGroup(){
navigation.navigate('new');

}

async function fetchGroups() {
  
  try{

const data = await groupsGetAll();

    setGroups(data);

  }
  catch(error){
console.log(error)

  }

}
useFocusEffect(useCallback(()=> {
 console.log("UseFocusEffect executou")
  fetchGroups();
},[]));

  return (
  
      <Container>
       <Header/>

       <Content>
     

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
       showsVerticalScrollIndicator={false}
       />

       <Button
       title="Criar novas turmas"
       onPress={handleNewGroup}
       
       />
       </Content>
      </Container>
    
     
   
  );
}

