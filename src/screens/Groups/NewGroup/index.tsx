import { Header } from '@components/Header';
import React, { useState } from 'react';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
//import { groupCreate } from '@storage/group/groupCreate';


export function NewGroup() {

  const [group, setGroup] = useState('')


  const navigation = useNavigation();


  async function handleNew() {
   
   try{
    await groupCreate(group) 
    navigation.navigate('players', { group });
   }catch(error)
   {
    console.log(error)
   }
    
  }

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <Icon />

        <Highlight
          title="Nova Turma"
          subtitle="Crie a turma para adicionar novos pessoas"
        />

        <Input
          placeholder='Nova turma'
          style={{ borderWidth: 2, borderColor: 'white', marginBottom: 20 }}
          onChangeText={setGroup}
        />

        <Button
          type="PRIMARY"
          title="Criar"
          onPress={handleNew}

        />

      </Content>

    </Container>
  );

}