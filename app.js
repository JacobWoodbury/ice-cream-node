import express from express; 

const app = express();

app.use(express.urlencoded({ extended : true}));

express.static.public;

app.set('view engine', 'ejs');

const port = 3000;

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(PORT, () => {
    console.log("Server Running");
})