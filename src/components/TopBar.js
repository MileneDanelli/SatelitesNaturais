import React from 'react';
import {css} from '../../assets/css/Css';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text, TouchableOpacity, View} from 'react-native';

export default function TopBar(props, {navigation}) {
  return (
    <View>
      <View style={css.topBar}>
        <TouchableOpacity
          style={css.home}
          onPress={() => props.navigation.navigate('inicio')}>
          <Icon name="home-heart" size={34} color="#ffffff" />
        </TouchableOpacity>

        <Text style={css.titulo_topBar}>{props.title}</Text>

        <TouchableOpacity
          style={css.grid}
          onPress={() => props.navigation.openDrawer()}>
          <Icon name="account-details" size={34} color="#ffffff" />
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}
