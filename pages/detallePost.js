import React, { useEffect, useContext, useState } from 'react';


import Layout from '../components/Layout/Layout';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import postContext from '../context/postContext';


const ContenedorProducto = styled.div`
    @media (min-width: 768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:2rem;
        font-size: 2rem;
    }
`;


const detallePost = () => {

    const postsContext = useContext(postContext);
    const { post } = postsContext;

    const { email, first_name, last_name} = post;

    //const [ postSelected, guardarPostSelected ] = useState({});
    //const { email, first_name, last_name } = postSelected;
    //const [ leerDB, guardarLeerDB ] = useState(true)
    
    // useEffect(() => {
    //     if(id && leerDB){
    //         const obtenerPost = async ()=> {
    //             const resultado = await clienteAxios.get(`/api/users/${id}`)
    //             guardarPostSelected(resultado.data)                
    //         }
    //         obtenerPost();
    //         guardarLeerDB(false);
    //     }

    // }, [id, leerDB])

    
    return ( 
        <Layout>
            <>
            
                <div className="contenedor">
                    <h1 css={css`
                        text-align:center;
                        margin-top:5rem;
                    `}>{email}</h1>
                    
                    <ContenedorProducto>
                        <p>First Name: {first_name}</p> 
                        <p>Last Name: {last_name}</p> 
                    </ContenedorProducto>
                           
                </div>
            </>
        </Layout>
     );
}
 
export default detallePost;


