import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import { 
    OBTENER_USUARIOS, 
    AGREGAR_USUARIO,
    USUARIO_ACTUAL,
    EDITAR_USUARIO,
    ELIMINAR_USUARIO,
    POST_ERROR
} from '../types';

import clienteAxios from '../config/axios';


const PostState = props => {

    const initialState = {
        posts : [],
        post: null
    }

    const [state, dispatch] = useReducer(postReducer, initialState)

    // Obtener los usuarios
    const obtenerPosts = async () => {
        try {
            const resultado = await clienteAxios.get('/api/users');
                        
            dispatch({
                type: OBTENER_USUARIOS,
                payload: resultado.data.data
            })
        } catch (error) {
            console.log(error);            
        }    
    }
    //Agregar nuevo usuario
    const agregarPost = async post => {

         try {
            const resultado = await clienteAxios.post('/api/users', post);
            console.log(resultado)
             
            dispatch({
                type: AGREGAR_USUARIO,
                payload: post
            })
         }  catch (error) {             
            alert(error);
         }
     }

    //Actualizar un usuario
    const editarPost = async info => {        
        try {
            await clienteAxios.put(`/api/users${info.id}`, info)
           
            dispatch({
                type: EDITAR_USUARIO,
                payload: info
            })
        } catch (error) {
            alert(error);
            dispatch({
                type: POST_ERROR
            })
        }
    }

    //Seleccionar usuario actual
    const postActual = post => {
        
            dispatch({
                type: USUARIO_ACTUAL,
                payload: post
            })
    }

    // Elimina un usuario
    const eliminarPost = async id => {
        try {
            await clienteAxios.delete(`/api/users${id}`);
            dispatch({
                type: ELIMINAR_USUARIO,
                payload: id
            })
        } catch (error) {
            console.log(error);        
        }
    }

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                post: state.post,
                obtenerPosts,
                agregarPost,
                postActual,
                editarPost,
                eliminarPost    
            }}
        >
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;