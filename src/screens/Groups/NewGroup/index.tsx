import { Header } from '@components/Header';
import React from 'react';
import { Container, Content, Icon } from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from 'react-native';
import { Input } from '@components/Input';

export function NewGroup(){
return(
    <Container>
      <Header showBackButton/>
      <Content>
<Icon/>

<Highlight
title="Nova Turma"
subtitle="crie a turma para adicionar novos participantes"
/>
<Input
placeholder='Nova turma'
style={{borderWidth: 2,borderColor:'white',marginBottom:20 }}
/>

<Button  

title="Criar" 

/>

      </Content>

    </Container>
);

}