const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建服务器
const server = http.createServer((req, res) => {
    // 处理根路径请求
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
        // 处理其他静态文件请求（如starpack.ico）
        // 获取文件路径
        const filePath = path.join(__dirname, req.url);
        // 读取文件
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('File not found');
            } else {
                // 根据文件扩展名设置Content-Type
                const ext = path.extname(filePath);
                let contentType = 'text/plain';
                switch (ext) {
                    case '.ico':
                        contentType = 'image/x-icon';
                        break;
                    case '.html':
                        contentType = 'text/html';
                        break;
                    case '.css':
                        contentType = 'text/css';
                        break;
                    case '.js':
                        contentType = 'text/javascript';
                        break;
                    case '.png':
                        contentType = 'image/png';
                        break;
                    case '.jpg':
                    case '.jpeg':
                        contentType = 'image/jpeg';
                        break;
                }
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(data);
            }
        });
    }
});

// 启动服务器
server.listen(80, () => {
    console.log('Server running at http://localhost:80/');
});
