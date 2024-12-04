const posts = require("../dataBase/postsData"); // Importa l'array dei post

//index page and filtre posts by tag
function index(req, res) {
  // Legge il parametro di query 'tag'
  const tag = req.query.tag;
  if (tag) {
    // Filtra i post in base al tag
    const filteredPosts = posts.filter((post) => post.tag.includes(tag));
    if (filteredPosts.length > 0) {
      res.json({ lunghezza: filteredPosts.length, posts: posts }); // Restituisce i post trovati
    } else {
      res.status(404).send(`<i>Nessun post trovato con il tag:</i> <b>${tag}`);
    }
  } else {
    // Se non c'è un tag, restituisce tutti i post
    res.json({ lunghezza: posts.length, posts: posts });
  }
}

function show(req, res) {
  // Estrae l'ID dai parametri della richiesta e lo converte in un numero intero
  const postId = parseInt(req.params.id);
  // Cerca il post con l'ID specificato nell'array dei post
  const post = posts.find((post) => post.id === postId);
  // Se il post non viene trovato, restituisce un errore 404
  if (!post) {
    return res.status(404).send("<h1>Error 404: Post Not Found</h1>");
  }
  // Se il post viene trovato, lo restituisce come risposta JSON
  res.json(post);
}

function store(req, res) {
  route.post("/", (req, res) => {
    res.send("Crea un nuovo post");
  });
}

function update(req, res) {
  route.put("/:id", (req, res) => {
    res.send("Modifica post intero");
  });
}

function modify(req, res) {
  route.patch("/:id", (req, res) => {
    res.send("Modifica parziale post");
  });
}

function destroy(req, res) {
  const id = parseInt(req.params.id); // convert string to number and whit req.params.id I get the id from the url
  const index = posts.findIndex((e) => e.id === id); // find the index of the post by id
  if (index !== -1) {
    posts.splice(index, 1); // splice method remove the element from the array by index, the second parameter is the number of elements to remove
    res.sendStatus(204); // 204 status code means that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body
  } else {
    res.status(404);
    res.json({
      error: 404,
      message: "Post not found",
    });
  }
}
function error(req, res) {
  res.status(404).send("<h1>Error 404: Page Not Found</h1>");
} // 404 page for invalid routes

module.exports = { index, show, store, update, modify, destroy, error };
