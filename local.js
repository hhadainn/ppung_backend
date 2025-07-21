require('dotenv').config();
const app = require('./app');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
// MongoDB URI (Atlas 또는 로컬)
// 또는
// const MONGODB_URI = 'mongodb://localhost:27017/myDB';
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
  }).then(() => {
	console.log('✅ MongoDB connected');
	app.listen(port, () => {
	   console.log(`Listening on: http://localhost:${port}`);
	});
  }).catch((err) => {
	console.error('❌ MongoDB connection error:', err);
  });
