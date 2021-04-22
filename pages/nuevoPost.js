import React, { useState, useContext } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
import postContext from '../context/postContext';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearPost from '../validacion/validarCrearPost';

const STATE_INICIAL = {
  title:'',
  body:''
}

const NuevoPost = () => {

  const postsContext = useContext(postContext);
  const { agregarPost } = postsContext;
  
  const [error, guardarError ] = useState(false);
  
  const { valores, errores, handleChange, handleSubmit, handleBlur} = useValidacion(STATE_INICIAL, validarCrearPost, crearPost);

  const { title, body } = valores;

  const router = useRouter();

  async function crearPost(){

    //Crear nuevo post
    const post = {
      title,
      body
    }

    //insertar en BD
    agregarPost(post);
    return router.push('/');
  }
  
  return (
    <div>
      <Layout>       
          <>
            <h1
              css={css`
                text-align: center;
                margin-top: 5rem;
              `}
            >New Post</h1>
            <Formulario
              onSubmit={handleSubmit}              
            >        
                <Campo>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title"
                        placeholder="Title Name"
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.title && <Error>{errores.title}</Error> }
                        
                <Campo>
                    <label htmlFor="body">Description</label>
                    <textarea 
                        id="body"
                        name="body"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.body && <Error>{errores.body}</Error> }
                      
                {error && <Error>{error} </Error>} 
    
                <InputSubmit 
                  type="submit"
                  value="Post"
                />
            </Formulario>
          </>        
      </Layout>
    </div>
  )
}

export default NuevoPost;