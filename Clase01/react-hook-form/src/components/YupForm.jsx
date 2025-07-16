//Biblioteca de esquemas

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schemas = yup.object({
    nombre: yup.string().required('El nombre es obligatorio'),
    correo: yup.string().email('Correo inválido').required('El correo es obligatorio'),
    edad: yup.number().min(18, 'Debe tener mínimo 18 años').required('Edad requerida')
})

export default function YupForm() {
    const {register, handleSubmit, formState:{errors}} = useForm({resolver: yupResolver(schemas)});

    const onSubmit = (data) => {
        console.log(data);
    };

return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <section>
            <label htmlFor="name">Nombre:</label>
            <input {...register("nombre")} placeholder="Nombre" />
            {errors.nombre && <p>{errors.nombre.message}</p>}
        </section>
        <section>
            <label htmlFor="email">Correo:</label>
            <input {...register("correo")} placeholder="Correo@correo.com" />
            {errors.correo && <p>{errors.correo.message}</p>}
        </section>
        <section>
            <label htmlFor="edad">Edad:</label>
            <input type="number" {...register("edad")} placeholder="edad" />
            {errors.edad && <p>{errors.edad.message}</p>}
        </section>
        <button type="submit">Enviar</button>
    </form>
);
};