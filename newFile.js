const { app, ab, abc } = require('./app');

app.get('hello', [ab, abc], (req, res, next) => {
    console.log('form post fromab');
    next();
}, (req, res) => {
    res.send('from ab');
});
