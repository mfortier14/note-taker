const app = require("express");


// get notes from the notes page through the functions written on the index.js file
app.get("/notes", function(req, res) {
    index
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  });
  
  

  app.post("/notes", (req, res) => {
    index
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch(err => res.status(500).json(err));
  });
  
