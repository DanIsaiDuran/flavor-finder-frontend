
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const emailValidation = ({email, username, password}) => {
    const errors = {};
    if (!email.trim()) {
        errors.email = "El correo electronico es requerido"
    }
    else if(!isValidEmail(email)) {
        errors.email = "Debes ingresar un email correcto";
    }

    if(!username.trim()) {
        errors.username = "El usuario es requerido";
    }

    if(!password.trim()) {
        errors.password = "La contraseña es requerida";
    }
        
    return errors;
}