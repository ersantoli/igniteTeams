import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { AppRoutes } from './app.routes';

export  function Routes() {
  return (
    <View style={{flex:1,backgroundColor:'black'}}>
    <NavigationContainer>{
        <AppRoutes/>
}</NavigationContainer>
</View>
  );
}