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
  first_name:'',
  last_name:'',
  email:''
}

const NuevoPost = () => {

  const postsContext = useContext(postContext);
  const { agregarPost } = postsContext;
  
  const [error, guardarError ] = useState(false);
  
  const { valores, errores, handleChange, handleSubmit, handleBlur} = useValidacion(STATE_INICIAL, validarCrearPost, crearPost);

  const { first_name, last_name, email } = valores;

  const router = useRouter();

  async function crearPost(){

    //Crear nuevo post
    const nuevoPost = {
      first_name,
      last_name,
      email
    }

    //insertar en BD
    agregarPost(nuevoPost);
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
            >New Post</h1>
            <Formulario
              onSubmit={handleSubmit}              
            >        
                <Campo>
                    <label htmlFor="first_name">First Name</label>
                    <input 
                        type="text"
                        id="first_name"
                        placeholder="first Name"
                        name="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.first_name && <Error>{errores.first_name}</Error> }
                <Campo>
                    <label htmlFor="last_name">Last Name</label>
                    <input 
                        type="text"
                        id="last_name"
                        placeholder="last_name Name"
                        name="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.last_name && <Error>{errores.last_name}</Error> }
                <Campo>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="text"
                        id="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.email && <Error>{errores.email}</Error> }
                        
                
                      
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