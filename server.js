const express = require('express');
const path = require('path');
const app = express();

const PUBLIC_PATH = __dirname + '/client/public';

const PORT = 4000;

const router = new express.Router();

app.use(express.static("client/build"));

router.get("/*", function(req, res) {
  res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
});

app.use(router);

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}!`);
});