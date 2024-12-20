const express = require('express');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

app.get('/', (req, res) => {
    //res.send("home page");
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index',{ title: 'Home', blogs});

});

app.get('/about', (req, res) => {
    //res.send("about page");
    res.render('about',{ title: 'About'})

});

app.get('/blogs/create', (req,res)=>{
    res.render('create',{ title: 'Creat a new blog'})
})

//redirects
app.get('/about_us', (req, res) => {
    res.redirect('/about');
});

//404 error
app.use((req,res)=>{
    res.status(404).render('404',{ title: '404'})
})
