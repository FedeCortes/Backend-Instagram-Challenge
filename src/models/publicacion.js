const mongoose = require("mongoose");

const publicacionSchema = mongoose.Schema({
    url: {
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required:false,
    },
    likes:{
        type:Number,
        required:true
    }
});

module.exports = mongoose.model('Publicacion', publicacionSchema);