const http = require('http');
var MidiWriter = require('midi-writer-js');
var fs = require('fs');
const {parse} = require('querystring');

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        collectRequestData(req, res, result => {
            console.log(result);
        });
    }
});

server.listen(3000);

function collectRequestData(request, res, callback) {
    let body = '';
    request.on('data', chunk => {
        body += chunk.toString();
    });
    request.on('end', () => {
        let name = JSON.parse(body)["name"] + ".json"
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (fs.existsSync(name)) {
            i = 1;
            while (fs.existsSync(name)) {
                name = JSON.parse(body)["name"] + i + ".json";
                fs.writeFile(name, body, 'utf8', callback);
                i++;
            }
            res.statusCode = 300;
            res.end('Song with this name already exist');
        } else {
            fs.writeFile(name, body, 'utf8', callback);
            res.statusCode = 200;
            res.end('Song saved');
        }
        
    });
}