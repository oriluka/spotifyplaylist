const express = require('express');
const app = express();
const path = require('path')
const PORT = 4444;
const cors = require('cors');
const bodyParser = require('body-parser');
const { clientId } = require('../config.js')

// Middleware
app.use(cors());
app.use(bodyParser());
app.use(express.static(path.resolve(__dirname, '../public')))

// Routes

// Get authentication
app.get('/auth', function(req, res) {
  var scopes = 'user-read-private user-read-email';
  res.redirect('https://accounts.spotify.com/authorize' +
    '?response_type=code' +
    '&client_id=' + clientId +
    (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
    '&redirect_uri=' + encodeURIComponent('localhost:444'));
});
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