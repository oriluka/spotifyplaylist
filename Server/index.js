const express = require('express');
const app = express();

const PORT = 4444;
const bodyParser = require('body-parser');

// Middleware


app.use('/', express.static(path.join(__dirname, 'public')))

// Routes

// Get authentication


// Get similar artist

// Show artists albums

// Get songs from artist Albums / sort by popularity

// Get artist popular songs


///////////

// Create playlist

// Add songs to play list

//

app.listen(PORT, () => {
  console.log('app listening on port: ' + PORT)
})