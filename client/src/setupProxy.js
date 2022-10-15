const { createProxyMiddleware } = require('http-proxy-middleware');
const url = process.env.REACT_APP_PROXY_URL

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: url,
      changeOrigin: true,
    })
  );
};