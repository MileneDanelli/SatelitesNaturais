import React from 'react';
import {View, TouchableOpacity, Image, ImageBackground} from 'react-native';
import {css} from '../../assets/css/Css';
import SyncIndicator from '../components/sync_indicador';

export default function inicio({navigation}) {
  return (
    <ImageBackground
      source={require('../../assets/imagens/nexus-space.jpg')}
      style={css.image}>
      <View>
        <SyncIndicator />
        <TouchableOpacity
          onPress={() => navigation.navigate('cadastroUsuario')}>
          <Image
            source={require('../../assets/imagens/cadastro.png')}
            style={css.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('login')}>
          <Image
            source={require('../../assets/imagens/login.png')}
            style={css.icon}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
