import React, { useContext } from 'react';
import Layout from '../components/Layout/Layout';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import postContext from '../context/postContext';


const ContenedorProducto = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;   
`;

const Nombre = styled.p`
    text-align:center;
    font-size:3rem;
    font-family: 'Roboto Slab', serif;
    font-weight: 700; 
    margin:0;
`;


const detallePost = () => {

    const postsContext = useContext(postContext);
    const { post } = postsContext;

    const { email, first_name, last_name, avatar} = post;

    
    return ( 
        <Layout>
            <>            
                <ContenedorProducto>
                    <img
                    css={css`
                        max-width:200px;
                        margin-top:1rem;
                    `} src={avatar}/>
                    
                    <Nombre>{first_name} {last_name}</Nombre>
                    <p>Email: {email}</p>
                    
                </ContenedorProducto>            
            </>
        </Layout>
     );
}
 
export default detallePost;


