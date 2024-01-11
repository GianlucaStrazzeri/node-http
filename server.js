const http = require('node:http');

const server = http.createServer((request, response) => {
  console.log('request received');
});

server.listen(0, () => {
    console.log(`port listening on port ${server.address().port} `);
  });

  import {info} from `./data.js`


res.end(info);