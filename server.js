const port = require("./application.json").port;
const mime = {
    'htm': 'text/html',
    'html': 'text/html',
    'css': 'text/css',
    'gif': 'image/gif',
    'ico': 'image/x-icon',
    'jpg': 'image/jpeg',
    'js': 'text/javascript',
    'png': 'image/png',
    'rar': 'application/x-rar-compressed',
    'txt': 'text/plain',
    'json': 'application/json',
    'jar': 'application/java-archive'
}

const http = require('http')
const url = require('url')
const fs = require('fs')
const path = require('path')

const root = path.resolve(process.cwd())

const index = './index.html'

http.createServer(function (req, res) {
    const pathname = url.parse(req.url).pathname
    const realpath = pathname !== '/' ? root + pathname : index
    const extname = path.extname(realpath).slice(1)
    let contentType = 'text/html'

    if (extname && mime[extname]) {
        contentType = mime[extname]
    }

    fs.exists(realpath, function (exists) {
        if (exists) {
            res.writeHead(200, {'Content-Type': contentType})
            fs.createReadStream(realpath).pipe(res)
        } else {
            if (realpath.endsWith('/health')) {
                res.writeHead(200, {'Content-Type': mime['json']})
                res.end(JSON.stringify({'status': 'UP'}))
            } else {
                res.writeHead(200, {'Content-Type': contentType})
                fs.createReadStream(index).pipe(res)
            }
        }
    })

}).listen(port)

console.log('simple static file server running at port: ' + port + '.')
