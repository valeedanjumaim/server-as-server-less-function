const express = require('express');

const app = express()
const PORT = 8000

app.get('/', (req, res) => {
  res.send('Server as a serverless function')
})

app.get('/about', (req, res) => {
  res.send('About route 🎉 ')
})

app.get('/slow', async (req, res) => {
  // Simulate a slow operation taking more than 10ms
  await new Promise(resolve => setTimeout(resolve, 200000)); // 2 second delay
  res.send('This response was delayed by 2 seconds 🐌');
})


app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
})