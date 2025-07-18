// index.js
const express = require('express');
const app = express();
const port = 3000;

// 라우터 예시
app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
