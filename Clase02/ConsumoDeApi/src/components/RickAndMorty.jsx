import React, {useState, useEffect} from "react";

export default function RickAndMorty(){
    const [characters, setCharacters] = useState([]) //Colocamos corcehtes para crear una lista vacía donde se almacenarán las multiples respuestas de la API
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(reponse => Response.json()) //Guardamos la infor en un json (texto)
            .then(data => {
                console.log(data);
                setCharacters(data.results)
                setLoading(false) //Hacemos el cambio de estado, de true a false
            })
            .catch(error => {
                console.log('Hubo un error');
                setLoading(false) //Declaramos que pasa cuando hay error, igualmente cambia el estado.
            })
    },[])

    if (loading) return <p>Cargando personajes...</p>

    return(
        <section style={{padding: '1rem'}}>
            <h1>Rick and Morty</h1>
            <section style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
                {characters.map(character => (
                    <div key={character.id} style={{textAlign: 'center'}}> 
                        <img src={character.image} alt={character.name} />
                        <p>{character.name}</p>
                    </div>
                ))}
            </section>
        </section>
    )
}