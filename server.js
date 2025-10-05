const express = require('express');
const app = express()
const port = 5050

const path = require('path');
const { title } = require('process');
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render('index',{title: "Home"});
})

app.listen(port, () =>{
    console.log(`Server is running on Port: ${port}`);
})