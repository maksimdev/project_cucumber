const express = require('express');
const path = require('path');
const app = express();
const expressWs = require('express-ws')(app);

const PUBLIC_PATH = __dirname + '/client/public';

const PORT = 4000;

const router = new express.Router();

app.use(express.static("client/build"));

router.get("/*", function(req, res) {
  res.sendFile(path.join(PUBLIC_PATH, 'index.html'));
});
 
app.use(function (req, res, next) {
  console.log('middleware');
  req.testing = 'testing';
  return next();
});
 
app.ws('/', function(ws, req) {
  ws.on('message', function(msg) {
    const incomingAction = JSON.parse(msg);  //doing something with incomingAction, for example sending to server reducer
    //reducer
    ws.send(JSON.stringify({type: 'EXTERNAL_ARTICLE_RECEIVED', payload: {id: 2, title: 'New article'} }));  //sending to server
  });
});
 
app.listen(4000);