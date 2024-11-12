const recipeFormValidation = ({name, difficulty, preparationTime, description, steps, ingredients, tools}) => {
    const errors = {};

    if(!name.trim()){
        errors.name = 'El nombre es requerido';
    }

    if(!difficulty){
        errors.difficulty = 'Seleccione una dificultad';
    }

    if(preparationTime <= 0){
        errors.preparationTime = 'El tiempo de preparacion debe ser mayor a 0';
    }

    if(description.trim().length < 10){
        errors.description = 'La descripcion debe contener al menos 10 caracteres';
    }

    if(steps.trim().length < 15) {
        errors.steps = 'Debes escribir pasos más detallados';
    }

    if(tools.trim().length < 2) {
        errors.tools = 'Las herramientas son requeridas';
    }

    if(ingredients.trim().length < 2) {
        errors.ingredients = 'Los ingredientes son requeridos';
    }

    return errors;
}

export default recipeFormValidation;