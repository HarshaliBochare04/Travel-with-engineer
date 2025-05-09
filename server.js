// backend/server.js

const express = require('express');
const path = require('path'); // Node.js built-in module for working with file paths

const app = express();
const port = process.env.PORT || 3000; // Use port 3000 unless specified by environment variable

// Serve static files from the 'frontend' directory
// This line tells Express to serve files like index.html, styles.css,
// and images directly when requested.
app.use(express.static(path.join(__dirname, '../frontend')));

// Define a route for the root URL ('/')
// When someone visits the root, send the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// Basic example of another route (you can add more for other pages if needed)
// For example, to serve the About Us page:
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'About.html'));
});

// You'll need to add similar routes for each of your HTML files
// OR use a single route with parameters if your structure allows (more advanced)
// For now, let's stick to explicit routes for clarity.

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});