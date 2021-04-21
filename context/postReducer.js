import { 
    OBTENER_POSTS,
    POST_ACTUAL,
    EDITAR_POST,
    ELIMINAR_POST
} from '../types';


export default (state, action) => {
    switch(action.type) {
         case OBTENER_POSTS:
             return {
                 ...state,
                 posts: action.payload
             }
        // case AGREGAR_PROYECTO:
        //     return {
        //         ...state,
        //         proyectos: [...state.proyectos, action.payload],
        //         formulario: false,
        //         errorformulario: false
        //     }
        // case VALIDAR_FORMULARIO:
        //     return {
        //         ...state, 
        //         errorformulario: true
        //     }
        case EDITAR_POST:
            return{
                ...state,
                posts: state.posts.map(post=> post.id === action.payload.id ? action.payload : post)
            }
        case POST_ACTUAL:
             return {
                 ...state,
                 post: action.payload
             }
         case ELIMINAR_POST:
             return {
                 ...state,
                 posts: state.posts.filter(post => post.id !== action.payload ),
                 post: null
             }
        // case PROYECTO_ERROR:
        //     return {
        //         ...state,
        //         mensaje: action.payload
        //     }
        default:
            return state;
    }
}