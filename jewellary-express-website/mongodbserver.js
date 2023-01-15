const express = require('express');
const app = express();
const port=4000;
const path = require('path');
const mongoose = require('mongoose');


// to connect with mongodb
mongoose.connect("mongodb://localhost:27017/sumitPactise",{

    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(()=>console.log('Connected to mongodb sucsessfully..... yo.'))
    .catch((err)=> console.log(err));

// To define schema i.e to define structure of document
const playlistscema= new mongoose.Schema({
    name:
    {
        type: String,
        required: true
    },
    ctype: String,
    videos:Number,
    author: String,
    active: Boolean,
    
    date:
    {
        type:Date,
        default: Date.now
    }
    
})
// create collection
const playlist=new mongoose.model("playlist",playlistscema);

// create document (one or many)
const createDocument= async()=>{
   
    try{

        const reactplaylist=new playlist({
        name : "sumit kumar",
        ctype : "middle_end",
        videos: 89,
        author: "thapa techical",
        active: true,
        })
        const nodeplaylist=new playlist({
            name : "satyam kumar",
            ctype : "middle_end",
            videos: 89,
            author: "thapa techical",
            active: true,
            })

        const jsplaylist=new playlist({
            name : "ashish kumar",
            ctype : "front_end",
            videos: 89,
            author: "thapa techical",
            active: true,
            })    

        const result=await playlist.insertMany([reactplaylist,nodeplaylist,jsplaylist]);
        console.log(result);
    }


    catch(err){
        console.log(err);
    }
}
createDocument();

const getDocuments = async () => {
    try
    {
     const res = await Playlist
     .find({ author : "thapa techical"})
     .count();
     console.log(res);

    }
   catch(err)
   {
     console.log(err);
   }
}
getDocuments();
app.listen(port, function()
 {
    console.log('server is listening on port' + port)
});