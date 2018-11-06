const EXPRESS = require('express');
const FS = require('fs');
const PORT = 3000;
const BODYPARSER = require('body-parser');
const PATH = require('path')

// Init Express app
const APP = EXPRESS();
APP.use(BODYPARSER.json());

// Express Sendfile Option
const OPTIONS = {
    root: __dirname + '/public/assets/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
};

// Cross-Origin Handlers
APP.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// Point static path to dist directory for angular
APP.use(EXPRESS.static(PATH.join(__dirname, 'public')));

//Init server
APP.listen(PORT);


// Send html file
APP.get('/api/file', (req, res) => {
    res.status(200).sendFile('test.html', OPTIONS, (err) => {
        if (err) throw err;
    });
});



APP.get('*',  (req, res) => {
    res.sendFile(PATH.join(__dirname + '/public/index.html'));
});
