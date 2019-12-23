const app = require("express");
const index = require("../db/public/assets/index");

// get notes from the notes page through the functions written on the index.js file
app.get("/notes", (req, res) => {
    index
      .getNotes()
      .then(notes => res.json(notes))
      .catch(err => res.status(500).json(err));
  };
  
  

  app.post("/notes", (req, res) => {
    index
      .addNote(req.body)
      .then((note) => res.json(note))
      .catch(err => res.status(500).json(err));
  });

//   deleting the note if the id matches what is passed through the removeNote function, in this case, (req.params.id)
  
  app.delete("/notes/:id", function(req, res) {
    index
      .removeNote(req.params.id)
      .then(() => res.json({ notes: true }))
      .catch(err => res.status(500).json(err));
  });
  
module.exports = app;

