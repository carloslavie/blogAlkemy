import React, { useContext } from 'react';
import Boton from '../ui/Boton';
import { css } from '@emotion/react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import postContext from '../../context/postContext';


const DetallePost = ({post}) => {

    const postsContext = useContext(postContext);
    const { postActual, eliminarPost } = postsContext;

    const { title, id } = post;

    const router = useRouter();

    const handleEditar = id =>{
        postActual(id);
        router.push('/edicionPost');
    }

    const handleEliminar = id =>{
        eliminarPost(id);
    }

    return ( 
        <>
        
        <container
            css={css`
            display:flex;
            justify-content:space-between;
        `}>                
            
            <h3
                css={css`
                    margin:1rem;
                `}
            >{title}</h3>
            
            <div
                css={css`
                display:flex;
                justify-content: flex-end;
            `}>
                <Link href="/posts/[id]" as ={`/posts/${id}`}>
                    <Boton>Detalle</Boton>        
                </Link>
                <Boton
                    onClick={()=>handleEditar(id)}
                >Editar</Boton>                
                <Boton
                    onClick={()=>handleEliminar(id)}
                >Eliminar</Boton> 
            </div> 
        </container>
        </>
     );
}
 
export default DetallePost;