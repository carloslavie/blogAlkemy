import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import { 
    OBTENER_POSTS, 
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST
} from '../types';

import clienteAxios from '../config/axios';


const PostState = props => {

    const initialState = {
        posts : [],
        errorformulario: false,
        post: null, 
        mensaje: null
    }

    const [state, dispatch] = useReducer(postReducer, initialState)

    // Obtener los posteos
    const obtenerPosts = async () => {
        try {
            const resultado = await clienteAxios.get('/posts');
            console.log(resultado.data)

            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error)
            // const alerta = {
            //     msg: 'Hubo un error',
            //     categoria: 'alerta-error'
            }
            
            dispatch({
                // type: PROYECTO_ERROR,
                // payload: alerta
            })
        }    

    //Agregar nuevo post
    const agregarPost = async post => {

         try {
             const resultado = await clienteAxios.post('/posts', post);
             console.log(resultado);
             //Insertar el post en el state
             dispatch({
                 type: AGREGAR_POST,
                 payload: resultado.data
             })
         } catch (error) {
             const alerta = {
                 msg: 'Hubo un error',
                 categoria: 'alerta-error'
             }
            
             dispatch({
                 type: POST_ERROR,
                 payload: alerta
             })
         }
     }

    //Actualizar un post
    const editarPost = async info => {
        
        try {
            const resultado = await clienteAxios.put(`/posts/${info.id}`, info)
           
            dispatch({
                type: EDITAR_POST,
                payload: info
            })
        } catch (error) {
            
        }
    }

    // // Valida el formulario por errores
    // const mostrarError = () => {
    //     dispatch({
    //         type: VALIDAR_FORMULARIO
    //     })
    // } 

    // Selecciona el Proyecto que el usuario dio click
    const postActual = async id => {
        try {
            const resultado = await clienteAxios.get(`/posts/${id}`)
            console.log(resultado.data)

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
             console.log(error)
        //      const alerta = {
        //          msg: 'Hubo un error',
        //          categoria: 'alerta-error'
        //      }
            
        //      dispatch({
        //          type: PROYECTO_ERROR,
        //          payload: alerta
        //      })
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