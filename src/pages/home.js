/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, ImageBackground, BackHandler, Alert } from 'react-native';
import { css } from '../../assets/css/Css';
import TopBar from '../components/TopBar';
import { createDrawerNavigator,
        DrawerContentScrollView,
        DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function home({ navigation }) {
    useEffect(() => {
        const backAction = () => {
            Alert.alert('Alerta!', 'Deseja mesmo sair do app?', [
                {
                    text: 'Não',
                    onPress: () => null,
                    style: 'cancel',
                },
                {
                    text: 'Sim', onPress: () => {
                        navigation.navigate('inicio');
                        BackHandler.exitApp();
                    },
                },
            ]);
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <ImageBackground source={require('../../assets/imagens/nexus-space.jpg')} style={css.imageHome}>
            <TopBar title="Home" navigation={navigation} />

        </ImageBackground>
    );
}

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItem
            label="Logout"
            onPress={ ()=> props.navigation.navigate('login')}
            icon={() => (<Icon name="logout" size={34} color="#333" />)}
            inactiveBackgroundColor={'#ffb6c1'}
        />
        <DrawerItem
            label="Alterar Dados"
            onPress={ ()=> props.navigation.navigate('dadosUsuario')}
            icon={() => (<Icon name="account-edit-outline" size={34} color="#333" />)}
            inactiveBackgroundColor={'#ffb6c1'}
        />
      </DrawerContentScrollView>
    );
  }

export default function HomeNav() {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Home"
            drawerPosition={'right'}>
            <Drawer.Screen name="Home" component={home}/>
        </Drawer.Navigator>
    );
}
