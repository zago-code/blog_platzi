import axios from 'axios';
import { ACTUALIZAR, CARGANDO, ERROR } from '../types/publicacionesTypes';
import * as usuariosTypes from '../types/usuariosTypes';

const { TRAER_TODOS: USUARIOS_TRAER_TODOS } = usuariosTypes;

export const traerPorUsuario = key => async (dispatch, getState) => {
  dispatch({
    type: CARGANDO,
  });
  const { usuarios } = getState().usuariosReducer;
  const { publicaciones } = getState().publicacionesReducer;
  const usuario_id = usuarios[key].id;
  try {
    const respuesta = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${usuario_id}`);
    const nuevas = respuesta.data.map(publicacion => ({
      ...publicacion,
      comentarios: [],
      abierto: false,
    }));
    const publicaciones_actualizadas = [...publicaciones, nuevas];
    dispatch({
      type: ACTUALIZAR,
      payload: publicaciones_actualizadas,
    });
    const publicaciones_key = publicaciones_actualizadas.length - 1;
    const usuarios_actualizados = [...usuarios];
    usuarios_actualizados[key] = {
      ...usuarios[key],
      // publicaciones_key: publicaciones_key
      publicaciones_key,
    };
    dispatch({
      type: USUARIOS_TRAER_TODOS,
      payload: usuarios_actualizados,
    });
  } catch (error) {
    console.log('Error: ', error.message);
    dispatch({
      type: ERROR,
      payload: 'Publications not available',
    });
  }
};

export const abrirCerrar = (pub_key, com_key) => async (dispatch, getState) => {
  const { publicaciones } = getState().publicacionesReducer;
  const seleccionada = publicaciones[pub_key][com_key];
  const actualizada = {
    ...seleccionada,
    abierto: !seleccionada.abierto
  };
  const publicaciones_actualizadas = [...publicaciones];
  publicaciones_actualizadas[pub_key] = [
    ...publicaciones[pub_key]
  ];
  publicaciones_actualizadas[pub_key][com_key] = actualizada;
  dispatch({
    type: ACTUALIZAR,
    payload: publicaciones_actualizadas,
  });
};
