import React, { useState, useContext } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
import postContext from '../context/postContext';

// validaciones
import useValidacion from '../hooks/useValidacion';
import validarCrearPost from '../validacion/validarCrearPost';


const EdicionPost = () => {

  const postsContext = useContext(postContext);
  const { post, editarPost, consultardb } = postsContext;
  
  const [error, guardarError ] = useState(false);
  
  const { valores, errores, handleChange, handleSubmit, handleBlur} = useValidacion(post, validarCrearPost, postEdit);

  const { title, body } = valores;

  const router = useRouter();

  async function postEdit(){

    //Crear nuevo post
    const nuevoPost = {
      title,
      body
    }

    //insertar en BD
    editarPost(nuevoPost);
    router.push('/');
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
            >Edit Post</h1>
            <Formulario
              onSubmit={handleSubmit}
            >        
                <Campo>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={title}
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
                        value={body}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.body && <Error>{errores.body}</Error> }
                      
                      {error && <Error>{error} </Error>}
                <InputSubmit 
                  type="submit"
                  value="Update"
                />
            </Formulario>
          </>
      </Layout>
    </div>
  )
}

export default EdicionPost;

