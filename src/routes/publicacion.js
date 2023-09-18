const express = require("express");
const publicacionSchema = require("../models/publicacion");
const cors = require("cors"); // Importa el paquete 'cors'
const router = express.Router();

// Habilita CORS para todas las rutas
router.use(cors());

// Create user 
router.post('/publicaciones',(req,res)=>{
   
    const publicacion = publicacionSchema(req.body);
    publicacion.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
})


// Get all users
router.get('/publicaciones',(req,res)=>{
   
    publicacionSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message: error}));
})

// Get a user
router.get('/publicaciones/:id',(req,res)=>{
   const{ id } = req.params;
   publicacionSchema
     .findById(id)
     .then((data)=> res.json(data))
     .catch((error)=> res.json({message: error}));
 })

 // Update a user
router.put('/publicaciones/:id',(req,res)=>{
    const{ id } = req.params;
    const {url,descripcion,likes}=req.body;
     publicacionSchema
      .updateOne({_id : id}, {$set: {url,descripcion,likes}})
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}));
  })

   // Delete a user
router.delete('/publicaciones/:id',(req,res)=>{
    const { id } = req.params;
     publicacionSchema
      .deleteOne({_id : id})
      .then((data)=> res.json(data))
      .catch((error)=> res.json({message: error}));
  })


module.exports = router;