'use strict';

const lodash = require('lodash');
const uuidv4 = require('uuid/v4');

const express = require('express');

const app = express();


app.use(express.json());
// Your code starts here.
// Placeholders for all requests are provided for your convenience.

app.post('/api/user', (req, res) => {
  const content=req.body.user_id;
//   console.log(content);
  if(!content){
  return res.sendStatus(400);
  }
  res.sendStatus(201);
});

app.post('/api/authenticate', (req, res) => {
   const content=req.body;
    if(!content.login&&!content.password){
  return res.sendStatus(400);}

});

app.post('/api/logout', (req, res) => {
  // ...
});

app.post('/api/articles', (req, res) => {
  // ...
});

app.get('/api/articles', (req, res) => {
  const bd=req.body;
  bd.map()
if(Object.keys(req.body).length === 0)
return res.sendStatus()
  //res.send("that work");
 console.log(req.body);
});

exports.default = app.listen(process.env.HTTP_PORT || 3000);
