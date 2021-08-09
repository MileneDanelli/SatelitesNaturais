import {database} from '../models/index';
import Usuarios from '../models/Usuarios';
import {Q, withObservables} from '@nozbe/watermelondb';

export const usuarios = database.collections.get('usuarios');

export const observeUsuarios = () => usuarios.query().observe();

export const saveUsuarios = async ({usuario, senha}: Usuarios) => {
  await database.action(async () => {
    await usuarios.create((entry) => {
      entry.usuario = usuario;
      entry.senha = senha;
    });
  });
};

export const EditarUsuarios = async ({usuario, senha}: Usuarios) => {
  await database.action(async () => {
    await somePost.update(usuariosId => {
      usuariosId.senha = senha;
    })
  });
};
