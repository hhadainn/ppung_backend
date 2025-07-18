const mongoose = require('mongoose');

// MongoDB URI (Atlas 또는 로컬)
const MONGODB_URI = 'mongodb+srv://hhadainn:ukubXeiXys8C7K2F@cluster0.86tbade.mongodb.net/';
// 또는
// const MONGODB_URI = 'mongodb://localhost:27017/myDB';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected!'))
.catch((err) => console.error('❌ MongoDB connection error:', err));
