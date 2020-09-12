import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/Home';
import AddAluno from './views/AddAluno';
import ModificaAluno from './views/ModificaAluno';


export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="AddAluno" component={AddAluno}
          options={{
            headerTitle: 'Cadastro de Clientes',
            headerStyle: {
              backgroundColor: '#148fcc',
            },
            headerTintColor: '#fff',
          }} />
        <Stack.Screen name="ModificaAluno" component={ModificaAluno}
          options={{
            headerTitle: 'Cadastro de Clientes',
            headerStyle: {
              backgroundColor: '#148fcc',
            },
            headerTintColor: '#fff',
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
