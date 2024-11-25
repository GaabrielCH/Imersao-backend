import {getTodosPosts, criarPost} from "../models/postsModel.js";
import fs from 'fs';

export async function listarPosts(req, res) {
     const posts = await getTodosPosts();
     res.status(200).json(posts);
}

export async function postarNovoPost(req, res) {
     const novoPost = req.body;
     try{
          const postCriado = await criarPost(novoPost);
          res.status(200).json(postCriado);
     }
     catch (erro){
          console.error(erro.message);
          res.status(400).send('Erro ao criar post');
     }
}

export async function uploadImagem(req, res) {
     const novoPost = req.body;
     try{
          const postCriado = await criarPost(novoPost);
          const arqAtualizado = `uploads/${postCriado.insertedId}.png`;
          fs.renameSync(req.file.path, arqAtualizado);
          res.status(200).json(postCriado);
     }
     catch (erro){
          console.error(erro.message);
          res.status(400).send('Erro ao criar post');
     }
}