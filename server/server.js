const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const UserRoutes = require('./routes/user')
const taskRoutes = require('./routes/task');
const courseMaterialsRoutes = require('./routes/courseMaterial')
const announcementRoutes = require('./routes/announcement')
// const path = require('node:path')
const path = require("path");
const app = express();

// Other server configurations and middleware
app.use(cors());
app.use(express.json()) //to convert body pharse to json
app.use(express.urlencoded({extended:true})) 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/user',UserRoutes)
app.use('/api/tasks',taskRoutes);
app.use('/api/announcements',announcementRoutes);
app.use('/api/courseMaterials',courseMaterialsRoutes);



// app.use(express.static(path.join(__dirname,'client','build')))
// app.get('/',function(req,res){
//   res.sendFile(path.join(__dirname,'client','build','index.html'))
// })
// Connect to MongoDB database
mongoose.connect('mongodb://127.0.0.1:27017/ourclass', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
  });



app.listen(3000, () => {
  console.log('Server started on port 3000');
});
