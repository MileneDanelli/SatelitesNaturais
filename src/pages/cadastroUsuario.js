/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, Button, Image, Platform, ImageBackground, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Keyboard } from 'react-native';
import { css } from '../../assets/css/Css';
import {saveUsuarios} from '../components/usuarios';

export default function cadastroUsuario () {
    const [salvar, setSalvar] = useState(false);
    const [usuario, setUser] = useState('');
    const [senha, setPassword] = useState('');

    const SalvarPress = async () => {
        setSalvar(true);
        await saveUsuarios({usuario, senha});
        setUser('');
        setPassword('');
        setSalvar(false);
    };

    return (
        <ImageBackground source={require('../../assets/imagens/nexus-space.jpg')} style={css.image}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={css.container}>
                <View>
                    <TextInput
                        style={css.input}
                        placeholder="Digite seu nome"
                        onChangeText={(text) => setUser(text)}
                        value={usuario}
                    />
                    <TextInput
                        style={css.input}
                        secureTextEntry={true}
                        placeholder="Digite sua senha"
                        onChangeText={(text) => setPassword(text)} 
                        value={senha}
                    />
                    <TouchableOpacity
                        style={css.botao}
                        disabled={salvar}
                        onPress={SalvarPress}
                    >
                        <Text style={css.textoBotao}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </ImageBackground>
    );
}

