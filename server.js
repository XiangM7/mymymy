const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Hello World</h1>');
});

// 启动服务器
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
