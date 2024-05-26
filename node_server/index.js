const http = require('http')
const fs = require('fs')
const rs = fs.createReadStream('./texto.txt')



http.createServer((req, res) => {

    fs.appendFile('texto.txt', 'teste', (err) => {
        if(err) throw err
        console.log('Saved');
    })

    fs.readFile('index.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(data)
        return res.end()
    })
    
}).listen(5555)
console.log("Servidor pronto em: http://localhost:5555/");

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5555'
    })
    if(req.url === '/api') {
        res.end(JSON.stringify({nome: "João", id: 19}))
    }
}).listen(8080)
console.log("Servidor JSON pronto em: http://localhost:8080/");

rs.on('open', () => {
    console.log('The file is open')
})
