import { 
    OBTENER_USUARIOS, 
    AGREGAR_USUARIO,
    USUARIO_ACTUAL,
    EDITAR_USUARIO,
    ELIMINAR_USUARIO,
    POST_ERROR
} from '../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_USUARIOS:
             return {
                 ...state,
                 posts: action.payload
             }
        case AGREGAR_USUARIO:
        return {
            ...state,
            posts: [action.payload, ...state.posts],            
        }
        case EDITAR_USUARIO:
            return{
                ...state,
                posts: state.posts.map(post=> post.id === action.payload.id ? action.payload : post),
                consultardb:false,
                post:null
            }
        case USUARIO_ACTUAL:
             return {
                 ...state,
                 post: action.payload,
                 consultardb:true
             }
        case ELIMINAR_USUARIO:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.payload ),
                post: null
            }
        case POST_ERROR:
            return {
                ...state,
                post:null,
                consultardb:true
            }
        default:
            return state;
    }
}