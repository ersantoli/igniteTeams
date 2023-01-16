import { Header } from '@components/Header';
import React, { useState } from 'react';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppError';
import { Alert } from 'react-native';
//import { groupCreate } from '@storage/group/groupCreate';


export function NewGroup() {

  const [group, setGroup] = useState('')


  const navigation = useNavigation();


  async function handleNew() {



    try {

      if (group.trim().length === 0) {
        return Alert.alert('Novo grupo', "Informe o Nome da Turma")
      }

     // return console.log(group.length)

      await groupCreate(group)
      navigation.navigate('players', { group });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert('Novo grupo', error.message);
      } else {
        Alert.alert('Novo grupo', "Não foi possivel criar um novo grupo")
      }
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