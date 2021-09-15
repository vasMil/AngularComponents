function requireHTTPS(req, res, next) {
    if(!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const app = express();

app.use(requireHTTPS);
app.use(express.static('./dist/AngularComponents'));

app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: 'dist/AngularComponents/'
    });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT);
console.log(`listening on port ${PORT}`);