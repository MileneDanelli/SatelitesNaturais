import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  Text,
  ImageBackground,
  BackHandler,
  Alert,
  TextInput,
} from 'react-native';
import {css} from '../../assets/css/Css';
import {EditarUsuarios, usuarios} from '../components/usuarios';
import {Q, withObservables} from '@nozbe/watermelondb';

export default function dadosUsuario({navigation}) {
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Alerta!', 'Deseja mesmo sair do app?', [
        {
          text: 'Não',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'Sim',
          onPress: () => {
            navigation.navigate('inicio');
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const [senhaAntiga, setSenhaAntiga] = useState(null);
  const [senha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);

  const EditarPress = async () => {
    if(senha !== confNovaSenha){
      Alert.alert('Senhas não coincidem!');
    }else if((await usuarios.query(Q.where('senha', Q.like(`%${Q.sanitizeLikeString(senhaAntiga)}%`))).fetch()).length){
      
      await EditarUsuarios({senha});
    }else{
      Alert.alert('Senha incorreta!');
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/imagens/nexus-space.jpg')}
      style={css.imageHome}>
      <View>
        <Text />
        <TextInput
          placeholder="Senha Antiga:"
          onChangeText={(text) => setSenhaAntiga(text)}
          style={css.input}
        />
        <TextInput
          placeholder="Nova Senha:"
          onChangeText={(text) => setNovaSenha(text)}
          style={css.input}
        />
        <TextInput
          placeholder="Confirmação da Nova Senha:"
          onChangeText={(text) => setConfNovaSenha(text)}
          style={css.input}
        />
        <TouchableOpacity
          onPress={() => {
            EditarPress();
            Keyboard.dismiss();
          }}
          style={css.botao}>
          <Text style={css.textoBotao}>Trocar</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
