const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Render sets PORT, default to 3000 if not set

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
