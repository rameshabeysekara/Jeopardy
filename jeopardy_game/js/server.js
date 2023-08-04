const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = 3000; // You can use any available port

// Define a route for the proxy
app.get('/api/categories', async (req, res) => {
  const apiUrl = 'https://jservice.io/api/categories?count=5&random=true';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
