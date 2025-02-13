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
        name: req.body.email,
        name: req.body.toppings,
        name: req.body.flavor,
    };

    console.log(req.body);
    res.render('confirm', { order });
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
})