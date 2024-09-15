const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000; // Render sets PORT, default to 3000 if not set

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Serve the main index.html file for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});