/*Primero, importamos los hooks useState y useEffect en nuestro componente*/
import { useState , useEffect } from "react";

/*Crear estados para almacenar datos y manejar la carga
Necesitamos un estado para guardar los personajes y otro para manejar el estado de carga
*/
export default function StarWarsApi(){
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);

/*Implementar useEffect para hacer la petición a la API*/
useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then((response) => response.json())
    .then((data) => {
        setCharacters(data.results);
        setLoading(false)
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
    });
}, []);

if (loading) return <p>Cargando personajes...</p>

    return(
        <section style={{padding: '1rem'}}>
            <h1>Personajes de Pokemón</h1>
            
            <ul style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0.5rem',
                listStyle: 'none',
                padding: 0
            }}>
                {characters.map(character => (
                <li key={character.name} style={{ borderBottom: '1px solid #ccc', padding: '0.5rem 0' }}>
                    {character.name}
                </li>
                ))}
            </ul>
            /*Esta API no ofrece imagenes, así que solo muestra una lista*/

        </section>
    );
}

/* Se tuvo que cambiar la API debido  que el link de Star Wars no funcionó*/

