const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My AWS Hello World</title>
    <style>
        body { font-family: Arial, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f4f4f4; }
        .container { text-align: center; padding: 2rem; background: white; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1); }
        h1 { color: #333; }
        button { padding: 10px 20px; font-size: 16px; cursor: pointer; background-color: #007bff; color: white; border: none; border-radius: 4px; margin-top: 20px; }
        button:hover { background-color: #0056b3; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hello World from AWS!</h1>
        <p>This is our first custom website.</p>
        <button onclick="alert('Hello! This is JavaScript working on AWS!')">Click Me!</button>
    </div>
</body>
</html>
    `);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
