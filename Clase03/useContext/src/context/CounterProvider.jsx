import { useState } from "react";

// Lo ideal sería que a partir de esta parte lo pongamos en otro archivo
export default function CounterProvider({children}) {
    const [count, setCount] = useState(0) //Estos son nuestros estados, count-cuenta y setCount-almacena la cuenta

    const incrementar = () => setCount((prev) => prev + 1);
    const decrementar = () => setCount((prev) => prev - 1);

    return(
        <CounterContext.Provider value={{count, incrementar, decrementar}}>
            {children}
        </CounterContext.Provider>
    )
}