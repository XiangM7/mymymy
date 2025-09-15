const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建服务器
const server = http.createServer((req, res) => {
    // 当有人访问网站时，读取并发送 index.html 文件
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        // 处理其他页面请求（如果有）
        res.writeHead(404);
        res.end('Page not found');
    }
});

// 启动服务器在端口 80
server.listen(80, () => {
    console.log('Server running at http://localhost:80/');
});
