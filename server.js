const express = require('express');

const app = express();

app.use(express.static('./dist/angular-nestjs'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/angular-nestjs/'}),
);

app.listen(process.env.PORT || 8080);
