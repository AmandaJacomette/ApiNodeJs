const express = require('express');

const server = express();

//Query params = ?nome=Node
//Route params = /curso/2
//Request body = {nome: 'node', tipo: 'back'}

//a rota usada localhost:3000/cursos
server.get('/curso/:id', (req, res) => {
    //const nome = req.query.nome; // localhost:3000/curso?nome=Node.js
    const nome = req.params.id; // localhost:3000/curso/2
    return res.json(
        {curso: `curso ${nome}`}
    );
});

server.listen(3000);//a porta que ele está