import React, { useEffect, useState } from "react"

//Se está haciendo todo junto en APP, nosotros deberíamos poder hacerlo en diferentes carpetas y archivos

export default function App() {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState (null);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [selectedPost, setSelectedPost] = useState(null)
  const [editTitle, setEditTitle] = useState("")

  //Método GET
  const fetchPosts = async () => {
    setLoading(true)
    setError(null)

    try{
      const response = await fetch ("https://jsonplaceholder.typicode.com/posts/")
      if (!response.ok) throw new Error ("Error al cargar las publicaciones")
        const data = await response.json()
        setPosts(data.slice(0,10))
    } catch(error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  //Método POST: Editar el título del post (Terminar)
  const updatePost = async () => {
    if(!editTitle) return alert("Ingresa un título para actualizar")

    try{
      const newTitle = await fetch (`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`),
      {
        method: "PATCH",
        body: JSON.stringify({
          title: editTitle
        }),
        headers: { "Content-type": "application/json; charset=UTF-8"}
      }
    }

  }

  //Función DELETE post
  const deletePost = async() => {
    if(!window.confirm("¿Estas seguro de que quieres eliminar este post?")) return;

      try{
      const response = await fetch (`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`),
      {
        method: "DELETE",
      }
    }
  }

  const createPost = async () => {
    if(!newPostTitle) return alert('Ingresa un titulo')

      try{
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/", {
          method: "POST",
          body: JSON.stringify({
            title: newPostTitle,
            body: "Contenido de ejemplo",
            userId: 1,
          }),
          headers: {"Content-type": "application/json; charset=UTF-8"},
        })

        if (!response.ok) throw new Error('Error al cargar el post')
      //terminar esta parte
      }
  }

  const showPostDetail = (id) => {
    const post = posts.find((p) => p.id === id)
    if(post){
      //luego de las dos secciones anteriores terminar este 01:35:00
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return(
      <section style={{padding: 20}}>
        <h1>Blog con React</h1>

        <section>
          <input type="text" placeholder="Título nuevo" value={newPostTitle} />
        //terminar en esta parte también
        </section>

        <section>
          <h2>Publicaciones Recientes</h2>
          {loading && <p>Cargando...</p>}
          {error && <p style={{color: "red"}}>{error}</p>}

          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <a href="#!"
                >{post.title}</a>
              </li>
            ))}
          </ul>
        </section>

        {selectedPost && (
          <section>
            //Por ultimo esta sección necesita ser completada
          </section>
        )}

      </section>
  )

}