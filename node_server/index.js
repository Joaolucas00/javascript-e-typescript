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

rs.on('open', () => {
    console.log('The file is open')
})
