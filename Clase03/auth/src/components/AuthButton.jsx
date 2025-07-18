// Mostrar boton para iniciar sesion si no hay usuario o boton para cerrar sesión si hay usuario.

import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AuthButton() {
    const {user, login, logout} = useContext(AuthContext)

    return(
        <section>
            { !user ? (
                <button onClick={() => login("Joel")}>Inciar Sesión</button>
            ): (
                <button onClick={() => logout()}>Cerrar Sesión</button>
            )}
        </section>
    )
}