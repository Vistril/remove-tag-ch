const fs = require('fs');
const writeTo = '../formattedsong.txt';

fs.watch('../', function (event, filename) {
    if (filename != 'currentsong.txt') return;
    let regex = /(<([^>]+)>)/ig
    let result = fs.readFileSync('../currentsong.txt', 'utf8').replace(regex, ''); 
    fs.writeFileSync(writeTo, result);
});

