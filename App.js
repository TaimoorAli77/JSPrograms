const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // process.exit()
    let url = req.url
    // let method= req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>My First Page</title></head>')
        res.write('<body><h1>My Server</h1></body')
        res.write('</html>')
        res.end()
})
server.listen(9090)