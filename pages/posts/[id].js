import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';//hook de routing que tiene next

import Layout from '../../components/layout/Layout';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';


const ContenedorProducto = styled.div`
    @media (min-width: 768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:2rem;
        font-size: 2rem;
    }
`;


const Producto = () => {
    
    const router = useRouter();
    
    const { query: {id} } = router;

    const [ postSelected, guardarPostSelected ] = useState({});
    const { title, body, userId } = postSelected;
    const [ leerDB, guardarLeerDB ] = useState(true)
    
    useEffect(() => {
        if(id && leerDB){
            const obtenerPost = async ()=> {
                const resultado = await clienteAxios.get(`/posts/${id}`)
                guardarPostSelected(resultado.data)                
            }
            obtenerPost();
            guardarLeerDB(false);
        }

    }, [id, leerDB])

    
    return ( 
        <Layout>
            <>
            
                <div className="contenedor">
                    <h1 css={css`
                        text-align:center;
                        margin-top:5rem;
                    `}>{title}</h1>
                    
                    <ContenedorProducto>
                        <p>{body}</p> 
                    </ContenedorProducto>
                        <p>Creado por: {userId}</p>   
                </div>
            </>
        </Layout>
     );
}
 
export default Producto;

