import React from "react";
import {useForm} from "react-hook-form"

export default function BasicForm(){
    const {register, handleSubmit, formState:{errors}} = useForm()

    const onSubmit = (data) => {
        //Aquí crearíamos la lógica para enviar los datos a la base de datos
        //Como no tenemos base aún, solo indicamos la acción
        console.log('Datos enviados');
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} /*Cuando enviemos el formulario se ejecuta handlesubmit y cuando sea exitosa llama la funcion onSubmit*/> 
            <input {...register("name", {
                required:"Nombre es obligatorio", 
                minLength: {value:3, message:"El nombre debe de tener al menos tres letras"}})} //Esta es una validación para este campo usando register, pueden ponerse más validaciones usando comas
            placeholder="Nombre"/>

            {errors.name && <p>{errors.name.message}</p>}

            <button type="submit">Submit</button>
        </form>
    )
}