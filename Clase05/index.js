/*Este archivo nos va a permitir crear nuestro código JS
Crear nuestra lógica 
*/

const express = require('express')
const app = express()
const PORT = 3000

app.get('/', (req, res) => {
    res.send('Hola Mundo desde Express')
})

//Otra ruta para nuestro servidor
app.get('/frutas', (req, res) => {
    const frutas = ['manzana', 'durazno', 'uva', 'mango']
    res.json(frutas)
})

app.listen(PORT, () => {
    console.log('Servidor escuchando en http://localhost:${PORT});
})