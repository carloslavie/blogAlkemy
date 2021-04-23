export default function validarCrearPost(valores) {
    
    let errores={};

    if(!valores.first_name){
        errores.first_name = "Name is required"
    }
    if(!valores.last_name){
        errores.last_name = "Last Name is required"
    }

    if(!valores.email){
        errores.email = "Email is required"
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ){
        errores.email = "Email no valido"
    }
    return errores;

    
}