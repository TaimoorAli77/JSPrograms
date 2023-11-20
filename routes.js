// process.exit()
const fs = require('fs')
const requestHandler = (req, res) => {

    let url = req.url
    let method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button>Submit</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', "Dummy Text")
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk)
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[1]
            fs.writeFile('message.txt', message, () => {

                // res.writeHead(302,{})
                res.statusCode = 302
                res.setHeader('Location', '/')
                return res.end()
            })

        })

    }
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>My Server</h1></body')
    res.write('</html>')
    res.end()

}

// module.exports = requestHandler;
// module.exports = {
//     handler: requestHandler,
//     someText:"Some HArd Coded tExT"
// };

// module.exports.handler= requestHandler
// module.exports.someText= "Some HArd Coded tExT"

exports.handler= requestHandler
exports.someText= "Some HArd Coded tExT"
