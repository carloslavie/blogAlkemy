export default function validarCrearPost(valores) {
    
    let errores={};

    if(!valores.first_name){
        errores.first_name = "Title is required"
    }
    if(!valores.last_name){
        errores.last_name = "Description is required"
    }

    return errores;

    
}