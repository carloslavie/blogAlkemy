export default function validarCrearPost(valores) {
    
    let errores={};

    if(!valores.title){
        errores.title = "Title is required"
    }
    if(!valores.body){
        errores.body = "Description is required"
    }

    return errores;

    
}