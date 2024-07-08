const http = require('http')
const fs = require('fs')
const rs = fs.createReadStream('./texto.txt')

const server = {
    sendHtml: async (html, status, res, head = {}) => {
        fs.readFile(html, (err, data) => {
            if(err) throw err
            fs.writeFile(html, data, (err) => {
                if (err) throw err
                res.writeHead(status, {'Content-Type': 'text/html', ...head})
                res.write(data)
                return res.end()
            })
        })
    }
}


const routes = {
    '/': 'index.html',
    '/about': 'about.html',
    '/teste': 'teste.html'
}


http.createServer((req, res) => {
    console.log("REQ: ", req.url);
    console.log("routes[req.url]: ", routes[req.url]);
    if(routes[req.url]) {
        return server.sendHtml(routes[req.url], 200, res)
    }

    return server.sendHtml('404.html', 404, res)
    
}).listen(5555)
console.log("Servidor pronto em: http://localhost:5555/");


const controller = {
    getJson: (req, res) => {
        res.end(JSON.stringify({nome: "João", id: 19}))
    }
}

const controllerBy = {
    GET: controller.getJson
}



http.createServer((req, res) => {
    
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5555'
    })
    
    if(controllerBy[req.method]) return controllerBy[req.method](req, res)
    
    
}).listen(8080)
console.log("Servidor JSON pronto em: http://localhost:8080/");

rs.on('open', () => {
    console.log('The file is open')
})



/*
const server = {
    sendHtml: (html, status, res, head) => {
        fs.readFile(html, (err, data) => {
            res.writeHead(status, {'Content-Type': 'text/html', ...head})
            res.write(data)
            return res.end()
        })
    }
}
*/

/*
function render(html, data, status, res, head) {
    fs.write(html, data, () => {
        if (err) throw err
        res.writeHead(status, {'Content-Type': 'text/html', ...head})
        res.write(serverRender.renderWithProps(data, () => {
            return `<pre>${JSON.stringify(props)}</pre>`
        }))
        console.log("Opa!");
        return res.end()
    })
}*/