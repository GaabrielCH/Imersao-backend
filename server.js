import express from 'express';

const posts = [
     {
          id: 1,
          descricao: 'Foto teste',
          images: 'https://placecats.com/millie/300/150',

     },
     {
          id: 2,
          descricao: 'Foto teste 2',
          images: 'https://placecats.com/millie/300/150',

     },
     {
          id: 3,
          descricao: 'Foto teste 3',
          images: 'https://placecats.com/millie/300/150',

     }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
     console.log('Server escutando..., porta 3000');
     });

function buscarPostPorId(id) {
     return posts.findIndex((post) => 
          post.id === Number(id));
     }

app.get('/posts/:id', (req, res) => {
     const id = buscarPostPorId(req.params.id);
     res.status(200).json(posts[id]);
     });