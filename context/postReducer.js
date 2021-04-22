import { 
    OBTENER_POSTS,
    AGREGAR_POST,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST,
    POST_ERROR
} from '../types';


export default (state, action) => {
    switch(action.type) {
        case OBTENER_POSTS:
             return {
                 ...state,
                 posts: action.payload
             }
        case AGREGAR_POST:
        return {
            ...state,
            posts: [action.payload, ...state.posts],            
        }
        case EDITAR_POST:
            return{
                ...state,
                posts: state.posts.map(post=> post.id === action.payload.id ? action.payload : post),
                consultardb:false,
                post:null
            }
        case POST_ACTUAL:
             return {
                 ...state,
                 post: action.payload,
                 consultardb:true
             }
        case ELIMINAR_POST:
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