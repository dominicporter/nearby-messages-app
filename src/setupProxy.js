const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/getMessagesNearby',
    createProxyMiddleware({
      target: 'http://localhost:3001', // Update with your server's URL
      changeOrigin: true,
    })
  );
};
