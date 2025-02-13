import express from 'express'; 

const app = express();

app.use(express.urlencoded({ extended : true}));

express.static.public;

app.set('view engine', 'ejs');

const PORT = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/thankyou', (req, res) => {

    const order = {
        name: req.body.name,
        email: req.body.email,
        toppings: req.body.toppings,
        flavor: req.body.flavor,
        cone: req.body.cone
    };

    console.log(req.body);
    res.render('thankyou', { order });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})