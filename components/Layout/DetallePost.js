import React, { useContext } from 'react';
import Boton from '../ui/Boton';
import { css } from '@emotion/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import postContext from '../../context/postContext';


const DetallePost = ({post}) => {

    const postsContext = useContext(postContext);
    const { postActual, eliminarPost } = postsContext;

    const { email, id } = post;

    const router = useRouter();


    const handleDetalle = () =>{
        postActual(post);
        console.log(post)
        router.push('/detallePost');
    }
    const handleEditar = () =>{
        postActual(post);
        console.log(post)
        router.push('/edicionPost');
    }

    const handleEliminar = id =>{
        eliminarPost(id);
    }

    return ( 
        <>        
        <div
            css={css`
            display:flex;
            justify-content:space-between;
            border-bottom:1px solid #e1e1e1;
            @media only screen and (max-width:600px){
                display:block;
            }
        `}>                
            
            <h3
                css={css`
                    margin:1rem;
                `}
            >{email}</h3>
            
            <div
                css={css`
                display:flex;
                justify-content: flex-end;
                
                @media only screen and (max-width:600px){
                justify-content:center;                
                }
            `}>
                
                <Boton
                    onClick={handleDetalle}
                >Detalle</Boton>        
                
                <Boton
                    onClick={handleEditar}
                >Editar</Boton>                
                <Boton
                    onClick={()=>handleEliminar(id)}
                >Eliminar</Boton> 
            </div> 
        </div>
        </>
     );
}
 
export default DetallePost;