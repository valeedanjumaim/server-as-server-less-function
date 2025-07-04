const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Server as a serverless function')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})