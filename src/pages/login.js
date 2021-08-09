import {Q} from '@nozbe/watermelondb';
import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import {css} from '../../assets/css/Css';
import {usuarios} from '../components/usuarios';

export default function login({navigation}) {
  const [entrar, setEntrar] = useState(false);
  const [usuarioInput, setUser] = useState('');
  const [senhaInput, setPassword] = useState('');

  const EntrarPress = async () => {
    setEntrar(true);
    if (
      (
        await usuarios
          .query(
            Q.where(
              'usuario',
              Q.like(`%${Q.sanitizeLikeString(usuarioInput)}%`),
            ),
            Q.where('senha', Q.like(`%${Q.sanitizeLikeString(senhaInput)}%`)),
          )
          .fetch()
      ).length
    ) {
      navigation.navigate('home');
    } else {
      Alert.alert('Usuário não cadastrado!');
    }
    setUser('');
    setPassword('');
    setEntrar(false);
  };

  return (
    <ImageBackground
      source={require('../../assets/imagens/nexus-space.jpg')}
      style={css.image}>
      <KeyboardAvoidingView
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        style={css.container}>
        <View>
          <TextInput
            style={css.input}
            placeholder="Digite seu nome"
            onChangeText={(text) => setUser(text)}
            value={usuarioInput}
          />
          <TextInput
            style={css.input}
            secureTextEntry={true}
            placeholder="Digite sua senha"
            onChangeText={(text) => setPassword(text)}
            value={senhaInput}
          />
          <TouchableOpacity
            style={css.botao}
            disabled={entrar}
            onPress={EntrarPress}>
            <Text style={css.textoBotao}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
