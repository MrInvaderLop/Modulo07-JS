// Archivo para obtener las funciones de incrementar y decrementar

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CounterButton() {
    const {incrementar, decrementar } = useContext(CounterContext)

    return (
        <section className="buttons-context">
            <button onClick={incrementar}>Incrementar +1</button>
            <button onClick={decrementar}>Decrementar -1</button>
        </section>
    )
}

//usamos onClick para asignar la funcionalidad que definimos en CounterContext