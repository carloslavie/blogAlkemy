export default function validarEditarPost(valores) {
    
    let errores={};

    if(!valores.first_name){
        errores.first_name = "Name is required"
    }
    if(!valores.last_name){
        errores.last_name = "Last Name is required"
    }

    
    return errores;

    
}