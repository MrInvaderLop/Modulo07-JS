// Creando una app para mostrar si hay un usuario logeado

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function UserInfo() {
    const {user} = useContext(AuthContext);

    return (
        <section>
            {user ? (
                <h1>Bienvenido {user.name}</h1>
            ): ( <h1>No hay usuario registrado!!</h1> )}
        </section>
    )
}

// Si es true lo mandamos a una nueva pagina, si no regresamos. Usando navlink / Rutas de protección.
