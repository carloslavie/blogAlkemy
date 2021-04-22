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

  const { first_name, last_name } = valores;

  const router = useRouter();

  async function postEdit(){

    //Crear nuevo post
    const nuevoPost = {
      first_name,
      last_name
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
                    <label htmlFor="first_name">First Name</label>
                    <input 
                        type="text"
                        id="first_name"
                        name="first_name"
                        value={first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.first_name && <Error>{errores.first_name}</Error> }

                <Campo>
                    <label htmlFor="last_name">Last Name</label>
                    <textarea 
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.last_name && <Error>{errores.last_name}</Error> }
                      
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

