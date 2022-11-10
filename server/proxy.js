const createProxyMiddleware = require('http-proxy-middleware');
const express = require('express');
const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(
  '/graphql',
  createProxyMiddleware({
    target: 'https://api.sorare.com/',
    changeOrigin: true,
  })
);

app.listen(3000, () => {
  console.log('Proxy listening on port 3000');
});
