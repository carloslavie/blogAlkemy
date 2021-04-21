import React, { useState, useContext, useEffect } from 'react';
import { css } from '@emotion/react';
import Router, { useRouter } from 'next/router';
import Layout from '../components/layout/Layout';
import { Formulario, Campo, InputSubmit, Error } from '../components/ui/Formulario';
import postContext from '../context/postContext';


//import Error404 from '../components/layout/404';

// validaciones
// import useValidacion from '../hooks/useValidacion';
// import validarCrearProducto from '../validacion/validarCrearProducto';



const EdicionPost = () => {

  const postsContext = useContext(postContext);
  const { post, editarPost } = postsContext;
  
  const [ info, guardarInfo ] = useState({
      title:'',
      body:''
  });

  const { title, body } = info;

  useEffect(() => {
     
    guardarInfo(post);

  }, [])


  //const [ error, guardarError] = useState(false);

  
  // hook de routing para redireccionar
  const router = useRouter();

  const handleChange = e =>{
    guardarInfo({
        ...info,
        [e.target.name] : e.target.value
    })
  }
    
  // insertarlo en la base de datos
  const handleSubmit = e =>{  
    e.preventDefault();

    editarPost(info);
  
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
              // noValidate
            >
        
                <Campo>
                    <label htmlFor="userId">User</label>
                    <input 
                        type="text"
                        id="userId"
                        name="userId"
                        onChange={handleChange}
                        //onBlur={handleBlur}
                    />
                </Campo>

                {/* {errores.userId && <Error>{errores.userId}</Error> } */}

                <Campo>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={handleChange}
                        //onBlur={handleBlur}
                    />
                </Campo>

                {/* {errores.title && <Error>{errores.title}</Error> } */}
    
                    
                <Campo>
                    <label htmlFor="body">Description</label>
                    <textarea 
                        id="body"
                        name="body"
                        value={body}
                        onChange={handleChange}
                        //onBlur={handleBlur}
                    />
                </Campo>

                {/* {errores.description && <Error>{errores.description}</Error> } */}
                      
                {/* {error && <Error>{error} </Error>} */}
    
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