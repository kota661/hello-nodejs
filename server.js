const express = require('express');
const util = require("util");

const port = process.env.PORT || 8080;

const app = express();
msg = process.env.MSG ? process.env.MSG : 'I was built by Buildpacks with Code Engine!';

app.get('/', (request, response) => {
  response.send(util.format(`<!DOCTYPE html>
<html>
  <head>
    <title>Powered By Code Engine</title>
  </head>
  <body>
    <h1>Hello, World</h1>
    <p>%s</p>
  </body>
</html>`, msg));
});

app.listen(port);
console.log('Server running at http://0.0.0.0:'+ port + '/');
