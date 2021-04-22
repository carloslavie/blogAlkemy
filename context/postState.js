import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import { 
    OBTENER_POSTS, 
    AGREGAR_POST,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST,
    POST_ERROR
} from '../types';

import clienteAxios from '../config/axios';


const PostState = props => {

    const initialState = {
        posts : [],
        post: null, 
        mensaje: null
    }

    const [state, dispatch] = useReducer(postReducer, initialState)

    // Obtener los posteos
    const obtenerPosts = async () => {
        try {
            const resultado = await clienteAxios.get('/posts');
            
            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);            
        }    
    }
    //Agregar nuevo post
    const agregarPost = async post => {

         try {
            const resultado = await clienteAxios.post('/posts', post);
             
            dispatch({
                type: AGREGAR_POST,
                payload: resultado.data
            })
         }  catch (error) {             
            console.log(error);
         }
     }

    //Actualizar un post
    const editarPost = async info => {        
        try {
            await clienteAxios.put(`/posts/${info.id}`, info)
           
            dispatch({
                type: EDITAR_POST,
                payload: info
            })
        } catch (error) {
            console.log(error);
        }
    }

    //Seleccionar post actual
    const postActual = async id => {
        try {
            const resultado = await clienteAxios.get(`/posts/${id}`)
            
            dispatch({
                type: POST_ACTUAL,
                payload: resultado.data
            })

        } catch (error) {
            console.log(error)
        }

    }

    // Elimina un proyecto
    const eliminarPost = async id => {
        try {
            await clienteAxios.delete(`posts/${id}`);
            dispatch({
                type: ELIMINAR_POST,
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
                mensaje: state.mensaje,
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