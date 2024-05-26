const http = require('http')
const fs = require('fs')
const rs = fs.createReadStream('./texto.txt')


const server = {
    sendHtml: (html, status, res, head) => {
        fs.readFile(html, (err, data) => {
            res.writeHead(status, {'Content-Type': 'text/html', ...head})
            res.write(data)
            return res.end()
        })
    }
}

const routes = {
    acceptUrls: [
        {url: '/', html: 'index.html'},
        {url: '/about', html: 'about.html'}
    ]
}


http.createServer((req, res) => {

    if (!routes.acceptUrls.some((route) => route.url === req.url)) {
        server.sendHtml('404.html', 404, res)
    }

    routes.acceptUrls.forEach((route) => {
        if (route.url === req.url) server.sendHtml(route.html, 200, res)
    })
    
}).listen(5555)
console.log("Servidor pronto em: http://localhost:5555/");

http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5555'
    })

    res.end(JSON.stringify({nome: "João", id: 19}))

    
}).listen(8080)
console.log("Servidor JSON pronto em: http://localhost:8080/");

rs.on('open', () => {
    console.log('The file is open')
})
