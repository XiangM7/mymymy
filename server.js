const http = require('http');

// 创建服务器
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h3>Hello World</h3>');
});

// 启动服务器
server.listen(80, () => {
    console.log('Server running at http://localhost:80/');
});
