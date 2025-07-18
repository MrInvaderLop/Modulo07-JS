// Usaremos un useContext para acceder al valor de nuestro contexto

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

export default function CounterDisplay(){
    const { count } = useContext(CounterContext)

    return <h1>Contador actual: {count} </h1>
}