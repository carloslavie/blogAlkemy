import React, { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';//hook de routing que tiene next
import postContext from '../../context/postContext';

import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
//import { InputSubmit, Campo } from '../../components/ui/Formulario';



const ContenedorProducto = styled.div`
    @media (min-width: 768px){
        display:grid;
        grid-template-columns:2fr 1fr;
        column-gap:2rem;
    }

`;

const CreadorProducto = styled.p`
    padding: .5rem 2rem;
    background-color:#DA552F;
    color:#fff;
    text-transform:uppercase;
    font-weight:bold;
    display:inline-block;
    text-align:center;
`;


const Producto = () => {
    
    //Routing para obtener el id actual
    const router = useRouter();
    
    const { query: {id} } = router;

    const [ postActual, guardarPostActual ] = useState({});
    const { title, body } = postActual;
    
    useEffect(() => {
        if(id){
            const obtenerPost = async ()=> {
                const resultado = await clienteAxios.get(`/posts/${id}`)
                guardarPostActual(resultado.data)                
            }
            obtenerPost()
        }

    }, [id])

    
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

                    
                </div>
        

             
            </>
        </Layout>
     );
}
 
export default Producto;

// useEffect(() => {
        
//     if(id){
//         obtenerPosts();
//         guardarPost(posts);
//         //const postActual = post.filter(posted => posted.id === id);
//         console.log(post)
//     }

// }, [id])





// // useEffect(() => {
// //     if(id && consultarDB){//REVISAR USEEFFECT 
// //         const obtenerProducto = async ()=>{
// //             const productoQuery = await firebase.db.collection('productos').doc(id);
// //             const producto =  await productoQuery.get();
// //             console.log("consultando a la BD")
// //             if(producto.exists){
// //                 guardarPost(producto.data());
// //                 console.log(producto.data())
// //                 guardarConsultarDB(false);
// //             } else {
// //                 guardarError(true);
// //                 guardarConsultarDB(false);
// //             }
// //         }
// //         obtenerProducto();
// //     }
// // }, [id, consultarDB]) //cada vez que haya o cambie el id o algo en el producto se renderiza

// // if(Object.keys(post) === 0 && !error) return 'Cargando...'

// // const { title, body } = postActual;

  