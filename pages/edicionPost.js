import React, { useContext } from 'react';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
import postContext from '../context/postContext';
import useValidacion from '../hooks/useValidacion';
import validarEditarPost from '../validacion/validarEditarPost';


const EdicionPost = () => {

  const postsContext = useContext(postContext);
  const { post, editarPost } = postsContext;
  
  const { valores, errores, handleChange, handleSubmit, handleBlur} = useValidacion(post, validarEditarPost, postEdit);

  const { first_name, last_name } = valores;

  const router = useRouter();

  async function postEdit(){

    const nuevoPost = {
      first_name,
      last_name
    }

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
                    <input 
                        type="text"
                        id="last_name"
                        name="last_name"
                        value={last_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                </Campo>
                {errores.last_name && <Error>{errores.last_name}</Error> }
                      
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

