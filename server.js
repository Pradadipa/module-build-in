const http = require('http');

const server = http.createServer(
    function(request, response){
            response.writeHead(200,
            {'Content-Type' : 'text/html'});
            response.write('<h1>Hello World!</h1>');
            response.end();
    }
)

const PORT = 4000;
server.listen(PORT,() => {
    console.log(`Server is listening on port http://localhost:` + PORT)
})