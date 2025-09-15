const express = require('express');
const app = express();
const port = 80;

// 将 public 文件夹下的内容作为静态资源进行托管
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
