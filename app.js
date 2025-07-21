const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json({ limit: '10mb' }));
// 미들웨어
app.use(cors());
// app.use(express.json()); // JSON body 파싱

app.use(express.urlencoded({extended:true}));
app.use(require('./routes'));
module.exports = app