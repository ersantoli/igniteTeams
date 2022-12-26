
import { NewGroup } from '@screens/Groups/NewGroup';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import { StatusBar } from 'react-native';


import { useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';

import { Loading } from '@components/Loading';
import React from 'react';
import { Players } from '@screens/Players';


export default function App() {
const [fontsLoaded] = useFonts({Roboto_700Bold,Roboto_400Regular})



  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
      barStyle="light-content"
      backgroundColor="transparent"
      translucent
      />
      { fontsLoaded ? <Players/> : <Loading/>}
    </ThemeProvider>
  
  );
}

