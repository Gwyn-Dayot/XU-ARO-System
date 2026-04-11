const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

app.get('/api/', (req, res) => {
  res.json({ message: 'XU-ARO Backend is running!' });
});

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});