import {NavigationContainer, View} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import React from 'react';
import cadastroUsuario from './src/pages/cadastroUsuario';
import inicio from './src/pages/inicio';
import login from './src/pages/login';
import HomeNav from './src/pages/home';
import dadosUsuario from './src/pages/dadosUsuario';
import './ReactotronConfig';

export default function App() {
  const Stack = createStackNavigator(); 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="inicio"
          component={inicio}
          options={{
            title: 'Satélites Naturais',
            headerTintColor: '#f0ffff',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'},
          }}
        />
        <Stack.Screen
          name="cadastroUsuario"
          component={cadastroUsuario}
          options={{
            title: 'Cadastro Usuário',
            headerTintColor: '#f0ffff',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'},
          }}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{
            title: 'Entrar',
            headerTintColor: '#f0ffff',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'},
          }}
        />
        <Stack.Screen
          name="home"
          component={HomeNav}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="dadosUsuario"
          component={dadosUsuario}
          options={{
            title: 'Alterar Dados',
            headerTintColor: '#f0ffff',
            headerStyle: {backgroundColor: '#000000'},
            headerTitleStyle: {fontWeight: 'bold', alignSelf: 'center'},
          }}
        />       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
